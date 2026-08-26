import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wfmfjgfebmpfoaebkzdo.supabase.co";

const supabaseKey = "sb_publishable_865NCoFr_l5M7yXt4qMkYQ_Fh-6NXmw";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
