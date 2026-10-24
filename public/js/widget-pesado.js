// v2-regresion (deliberada, S10 10.11): un «widget» que ocupa el hilo principal ~250 ms al cargar (hilo_principal).
(function () {
  var fin = Date.now() + 250, n = 0;
  while (Date.now() < fin) n += Math.sqrt(n + 1);
  var caja = document.createElement('div');
  caja.textContent = 'Ofertas de la semana';
  caja.setAttribute('data-n', String(n | 0));
  document.body.insertBefore(caja, document.body.firstChild);   // empuja el contenido: más layout_inestable
})();


// SUPABASE_URL=https://nmnkgisnqgsffaaxxuer.supabase.co
// SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbmtnaXNucWdzZmZhYXh4dWVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTcwMDAwMCwiZXhwIjoyMDQ1Mjc2MDAwfQ.Jjd_Ac7fPHIR-3mkORRAR6QxaIRp3o9kcumUzqSwM0I
// DATABASE_URL=postgresql://postgres:00f746a64e153e627bfd42db42a3df7a@db.nmnkgisnqgsffaaxxuer.supabase.co:5432/postgres
// Prueba tonta
// Prueba tonta 2