import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zenoqrpsdmjcsenzjqrw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inplbm9xcnBzZG1qY3NlbnpqcXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzOTg0OTksImV4cCI6MjA0MDk3NDQ5OX0._l2zvg-mXDDHqsbzIW5VkoLRCaujGr0oIcIG4lPuABM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
