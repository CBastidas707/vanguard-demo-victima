#!/usr/bin/env bash
# Respaldo nocturno de pedidos (cron del servidor viejo).
set -euo pipefail
KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbmtnaXNucWdzZmZhYXh4dWVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5Mjg2MDg5NywiZXhwIjoyMTA4NDM2ODk3fQ.ABck5I_xUgyu7n3p61G_iGD67dHFsXwbEQsh3mxo_RA"
curl -s "https://nmnkgisnqgsffaaxxuer.supabase.co/rest/v1/pedidos?select=*" \
  -H "apikey: $KEY" -H "Authorization: Bearer $KEY" > "respaldo-$(date +%F).json"
