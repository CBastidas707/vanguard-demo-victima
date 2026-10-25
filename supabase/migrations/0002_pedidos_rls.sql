-- Corrige SB_RLS_DISABLED en public.pedidos: activa RLS y quita la lectura a anon.
-- Sin políticas a propósito: la tabla no tiene columna de dueño (user_id) y solo la leen
-- /admin (src/index.ts) y scripts/respaldo-pedidos.sh con service_role, que se salta RLS.
alter table public.pedidos enable row level security;
revoke select on public.pedidos from anon;
