import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are an elite HTML blog content formatter and SEO structure optimizer. You receive raw blog HTML and return PERFECTLY structured, SEO-optimized HTML.

## ABSOLUTE RULES — NEVER BREAK THESE:
1. DO NOT change, rewrite, rephrase, add, or remove ANY text/words/sentences.
2. DO NOT change any image URLs, link URLs, or href values.
3. DO NOT add new sentences, paragraphs of new text, or remove existing text.
4. DO NOT wrap output in markdown code fences or add any explanation.
5. Return ONLY the reformatted raw HTML — nothing else.

## WHAT YOU MUST DO — STRUCTURAL & SEO FORMATTING:

### Heading Hierarchy (Critical for SEO)
- Ensure there is exactly ONE <h1> if present — never duplicate it.
- Enforce strict hierarchy: H1 → H2 → H3. Never skip levels (no H1 → H3).
- If headings are out of order, re-tag them to proper hierarchy WITHOUT changing text.
- Add id attributes to H2/H3 for anchor linking: id="kebab-case-of-heading-text"

### Paragraph & Spacing
- Wrap ALL loose/inline text in <p> tags.
- Ensure every paragraph has proper opening and closing tags.
- Remove empty <p></p> or <p><br></p> tags that add no value.
- Add consistent spacing between content blocks.
- Break overly long paragraphs (500+ chars) into logical <p> groups at natural sentence boundaries — but DO NOT rewrite text.

### Lists (Critical for SEO Featured Snippets)
- Ensure all <ul> and <ol> have proper <li> children.
- Fix broken list nesting — no <li> outside of <ul>/<ol>.
- If content has comma-separated items that look like a list, convert to <ul><li> format.
- Ensure consistent list styling classes: <ul class="list-disc pl-6 my-3 space-y-1"> and <ol class="list-decimal pl-6 my-3 space-y-1">

### Images (SEO & Accessibility)
- Ensure every <img> has a meaningful alt attribute. If alt is empty, derive it from nearby heading/paragraph context — but keep it short (5-10 words).
- Wrap standalone images in <figure> with <figcaption> if there's adjacent descriptive text.
- Add loading="lazy" to all images except the first one.
- Ensure images have proper spacing: class includes "my-4 rounded-lg"

### Links (SEO)
- Ensure external links have target="_blank" rel="noopener noreferrer"
- Internal links should NOT have target="_blank"
- Add proper anchor text structure — links should be inside meaningful sentences.

### Tables
- Ensure tables have <thead> and <tbody> properly separated.
- Add proper classes for styling: border-collapse, border spacing.
- Ensure header cells use <th> not <td>.

### Blockquotes
- Ensure blockquotes have proper <blockquote> wrapping.
- Add class="border-l-4 border-primary pl-4 my-4 italic" for styling.

### Code Blocks
- Ensure code is wrapped in <pre><code> for blocks.
- Inline code should use <code> tags.

### Semantic HTML & SEO Signals
- Use <strong> for important keywords/phrases (max 2-3 per section, only on genuinely important terms already bold).
- Use <em> for emphasis where already italic.
- Ensure proper content flow: introduction → sections with H2 → subsections with H3 → conclusion.
- Add <hr> between major topic shifts if not already present.

### Cleanup
- Remove redundant nested tags like <p><p>text</p></p>.
- Remove empty tags that serve no purpose.
- Fix unclosed or mismatched tags.
- Normalize whitespace — no excessive blank lines but proper breathing room.
- Remove inline styles that conflict with class-based styling.

### Content Structure Pattern (apply if content allows):
1. Opening paragraph (hook/intro)
2. H2 sections with 2-4 paragraphs each
3. H3 subsections where depth is needed
4. Lists for scannable information
5. Images between sections for visual breaks
6. Conclusion paragraph

REMEMBER: You are ONLY restructuring and formatting. Every single word of the original content must remain EXACTLY as written. Output raw HTML only.`;

function splitHtmlIntoChunks(html: string, maxWords: number): string[] {
  // Split by major section boundaries (h2, h3, hr) to keep semantic chunks
  const sectionRegex = /(<h[23][^>]*>)/gi;
  const parts = html.split(sectionRegex);
  
  const chunks: string[] = [];
  let currentChunk = "";
  let currentWordCount = 0;

  for (const part of parts) {
    const partWords = part.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
    
    if (currentWordCount + partWords > maxWords && currentChunk.length > 0) {
      chunks.push(currentChunk);
      currentChunk = part;
      currentWordCount = partWords;
    } else {
      currentChunk += part;
      currentWordCount += partWords;
    }
  }
  
  if (currentChunk) chunks.push(currentChunk);
  
  // If splitting by headings didn't work well, fall back to rough splitting
  if (chunks.length <= 1 && currentWordCount > maxWords) {
    const roughChunkSize = Math.ceil(html.length / Math.ceil(currentWordCount / maxWords));
    const fallbackChunks: string[] = [];
    let i = 0;
    while (i < html.length) {
      let end = Math.min(i + roughChunkSize, html.length);
      // Try to break at a closing tag boundary
      if (end < html.length) {
        const nextClose = html.indexOf("</", end);
        const nextCloseEnd = nextClose !== -1 ? html.indexOf(">", nextClose) : -1;
        if (nextCloseEnd !== -1 && nextCloseEnd - end < 500) {
          end = nextCloseEnd + 1;
        }
      }
      fallbackChunks.push(html.slice(i, end));
      i = end;
    }
    return fallbackChunks;
  }
  
  return chunks.length > 0 ? chunks : [html];
}

async function callAI(html: string, wordCount: number, apiKey: string, isChunk: boolean): Promise<string> {
  const model = wordCount > 5000 ? "google/gemini-2.5-pro" : "google/gemini-3-flash-preview";
  
  const chunkInstruction = isChunk 
    ? "This is a SECTION of a larger blog post. Format this section only. Do NOT add or remove any text. Do NOT add <h1> tags — this section may not have one. Only restructure the HTML."
    : "";

  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `${chunkInstruction}\nFormat and SEO-optimize this blog HTML structure (~${wordCount} words). DO NOT change any text — only restructure and optimize the HTML:\n\n${html}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const status = response.status;
    const body = await response.text();
    console.error(`AI gateway error: ${status}`, body);
    if (status === 429) throw new Error("RATE_LIMIT");
    if (status === 402) throw new Error("CREDITS_EXHAUSTED");
    throw new Error(`AI service error (${status})`);
  }

  const data = await response.json();
  let result = data.choices?.[0]?.message?.content || "";
  result = result.replace(/^```html?\s*\n?/i, "").replace(/\n?\s*```\s*$/i, "").trim();
  return result;
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { html } = await req.json();
    if (!html || typeof html !== "string") {
      return new Response(JSON.stringify({ error: "HTML content is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const wordCount = html.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
    console.log(`AI Blog Align: ${wordCount} words, ${html.length} chars`);

    const CHUNK_THRESHOLD = 4000; // words
    let formattedHtml: string;

    if (wordCount <= CHUNK_THRESHOLD) {
      // Small enough — single pass
      formattedHtml = await callAI(html, wordCount, LOVABLE_API_KEY, false);
    } else {
      // Large content — split into chunks and process each
      const chunks = splitHtmlIntoChunks(html, CHUNK_THRESHOLD);
      console.log(`AI Blog Align: Splitting into ${chunks.length} chunks`);
      
      const results: string[] = [];
      for (let i = 0; i < chunks.length; i++) {
        const chunkWords = chunks[i].replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
        console.log(`AI Blog Align: Processing chunk ${i + 1}/${chunks.length} (${chunkWords} words)`);
        
        let retries = 2;
        let result = "";
        while (retries >= 0) {
          try {
            result = await callAI(chunks[i], chunkWords, LOVABLE_API_KEY, true);
            break;
          } catch (e) {
            if (e instanceof Error && (e.message === "RATE_LIMIT" || e.message === "CREDITS_EXHAUSTED")) {
              throw e; // Don't retry billing/rate errors
            }
            if (retries === 0) throw e;
            retries--;
            console.log(`AI Blog Align: Retrying chunk ${i + 1} (${retries + 1} retries left)`);
            await new Promise(r => setTimeout(r, 2000)); // wait before retry
          }
        }
        
        if (!result) {
          // If AI returned empty for a chunk, keep original
          console.warn(`AI Blog Align: Chunk ${i + 1} returned empty, keeping original`);
          results.push(chunks[i]);
        } else {
          results.push(result);
        }
      }
      
      formattedHtml = results.join("\n");
    }

    if (!formattedHtml) {
      return new Response(JSON.stringify({ error: "AI returned empty content. Please try again." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log(`AI Blog Align: Success — input ${html.length} chars → output ${formattedHtml.length} chars`);

    return new Response(JSON.stringify({ html: formattedHtml }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    console.error("ai-blog-align error:", msg);
    
    if (msg === "RATE_LIMIT") {
      return new Response(JSON.stringify({ error: "Rate limit exceeded. Please wait a moment and try again." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (msg === "CREDITS_EXHAUSTED") {
      return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }), {
        status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
