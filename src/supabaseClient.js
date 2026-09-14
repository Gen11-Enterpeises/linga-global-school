import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fheuzsampabrzvkogodc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZXV6c2FtcGFicnp2a29nb2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNzk1MTUsImV4cCI6MjA5ODY1NTUxNX0.RQKsj983dtIuAWoFvC_ZE2EnadaQ8_J-d8-TWoFnYZc'

export const supabase = createClient(supabaseUrl, supabaseKey)
