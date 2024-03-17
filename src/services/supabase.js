import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hdraaonozqbcyxvybyjx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcmFhb25venFiY3l4dnlieWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MDM0MDMsImV4cCI6MjAyMjM3OTQwM30.75OiwL-K5UziO--tT2l7RusIFbaEszlEyLlUN7LvpIc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
