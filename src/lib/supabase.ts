import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://kxujxtpabiclsnefwohk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4dWp4dHBhYmljbHNuZWZ3b2hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjc1ODYsImV4cCI6MjA3OTYwMzU4Nn0.n2lq8PkELPOUic5Njf88DqHcY06-3FzdA4dwaiXiGDU';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };