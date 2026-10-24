// Cliente público de Supabase para el navegador.
import { createClient } from '@supabase/supabase-js'

const URL_SB = 'https://nmnkgisnqgsffaaxxuer.supabase.co'
const ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbmtnaXNucWdzZmZhYXh4dWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4NjA4OTcsImV4cCI6MjEwODQzNjg5N30.Ss5VwRSn3o5uhvLyccMcq4Ux_vdEVVvcu3-jfQqZ8O4'

export const supabase = createClient(URL_SB, ANON)
