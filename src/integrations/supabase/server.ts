import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const hasSupabaseServerEnv = Boolean(supabaseUrl && supabaseAnonKey);

let cachedClient: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseServer() {
  if (!hasSupabaseServerEnv) {
    return null;
  }

  if (!cachedClient) {
    cachedClient = createClient<Database>(supabaseUrl!, supabaseAnonKey!);
  }

  return cachedClient;
}
