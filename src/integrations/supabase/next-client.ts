import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const hasSupabaseNextEnv = Boolean(supabaseUrl && supabaseAnonKey);

// Keep client-side rendering stable even when env vars are missing in a deploy.
// Requests will fail gracefully instead of crashing the whole page at import time.
const fallbackUrl = "https://missing-project.supabase.co";
const fallbackAnonKey =
  "missing-next-public-supabase-publishable-key";

export const supabaseNext = createClient<Database>(
  supabaseUrl || fallbackUrl,
  supabaseAnonKey || fallbackAnonKey,
  {
  auth: {
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  },
  },
);
