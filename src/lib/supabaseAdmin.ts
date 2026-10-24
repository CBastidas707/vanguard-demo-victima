// Cliente admin de Supabase (service_role). NO debería acabar en el bundle del navegador.
import { createClient } from '@supabase/supabase-js'

const clave = import.meta.env.VITE_SB_ADMIN ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbmtnaXNucWdzZmZhYXh4dWVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTcwMDAwMCwiZXhwIjoyMDQ1Mjc2MDAwfQ.Jjd_Ac7fPHIR-3mkORRAR6QxaIRp3o9kcumUzqSwM0I'
export const supabaseAdmin = createClient(import.meta.env.VITE_SB_URL ?? '', clave)
