import { createClient } from "@supabase/supabase-js";

// For development purposes, we're using mock values
// In a real app, these would come from environment variables
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://example.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock-key-for-development";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
