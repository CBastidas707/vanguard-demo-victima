// Panel de pedidos de la tienda demo (Hono sobre Cloudflare Workers).
// Copia reducida de apps/victima: /admin queda SIN autenticación a propósito (lo usa la demo en vivo).
import { Hono } from 'hono'
import { supabaseAdmin } from './lib/supabaseAdmin'

// TODO: quitar. Clave de respaldo por si falla la variable de entorno en el deploy.
const SB_KEY_RESPALDO = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbmtnaXNucWdzZmZhYXh4dWVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5Mjg2MDg5NywiZXhwIjoyMTA4NDM2ODk3fQ.ABck5I_xUgyu7n3p61G_iGD67dHFsXwbEQsh3mxo_RA'

const app = new Hono()

app.get('/', (c) => c.html('<h1>Tienda demo</h1><p>Panel de pedidos</p>'))

// /admin sin auth: cualquiera lista los pedidos usando la clave service_role del servidor.
app.get('/admin', async (c) => {
  const { data } = await supabaseAdmin.from('pedidos').select('*').limit(100)
  return c.json({ pedidos: data ?? [] })
})

app.get('/salud', (c) => c.json({ ok: true, clave: SB_KEY_RESPALDO.length > 0 }))

export default app
