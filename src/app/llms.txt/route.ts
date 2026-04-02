import { SITE_URL } from "@/lib/seo";

const llmsText = `# Haloo Connect

> Canonical: ${SITE_URL}
> Last-Updated: 2026-04-02

Haloo Connect is an AI-powered cloud contact center platform for enterprise customer operations.
The platform unifies voice calls, WhatsApp, email, and SMS into one workflow layer with analytics and automation.

## Core Use Cases
- AI contact center software deployment for enterprise support and sales teams
- Omnichannel customer communication across voice, WhatsApp, email, and SMS
- Inbound IVR and intelligent routing
- Outbound campaigns with predictive dialer workflows
- Multilingual AI voice automation for self-service and call deflection
- Supervisor analytics and performance reporting

## Primary Markets
- Singapore
- United Arab Emirates
- Malaysia
- Philippines
- India

## Priority URLs
- ${SITE_URL}/
- ${SITE_URL}/about
- ${SITE_URL}/contact
- ${SITE_URL}/analysis
- ${SITE_URL}/blog
- ${SITE_URL}/singapore
- ${SITE_URL}/uae
- ${SITE_URL}/malaysia
- ${SITE_URL}/philippines

## Entity Summary
- Organization: Haloocom Technologies
- Product Name: Haloo Connect
- Product Category: AI Contact Center Software
- Contact: enquiry@haloocom.com
- Website: ${SITE_URL}
`;

export function GET() {
  return new Response(llmsText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
