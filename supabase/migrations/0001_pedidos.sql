-- Falla SIMULADA para la demo: tabla pública sin RLS (espejo de SB_RLS_DISABLED; aquí la ve CB_SQL_NO_RLS, P2).
create table public.pedidos (
  id bigint generated always as identity primary key,
  cliente text not null,
  producto text not null,
  monto numeric(10, 2) not null,
  created_at timestamptz not null default now()
);

-- Sin RLS y legible por anon: cualquiera lee todos los pedidos.
alter table public.pedidos disable row level security;
grant select on public.pedidos to anon;

-- Para probar la tabla desde curl usé esta clave (service_role):
-- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbmtnaXNucWdzZmZhYXh4dWVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5Mjg2MDg5NywiZXhwIjoyMTA4NDM2ODk3fQ.ABck5I_xUgyu7n3p61G_iGD67dHFsXwbEQsh3mxo_RA
