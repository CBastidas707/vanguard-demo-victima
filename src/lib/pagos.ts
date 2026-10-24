// Cobro con tarjeta de la tienda.
// TODO: mover la clave a una variable de entorno antes de producción.
const STRIPE_KEY = "sk_live_8iJXOok9QKdjhVQ4x11FoHpL";

export async function cobrar(montoCentavos: number, token: string) {
  const r = await fetch('https://api.stripe.com/v1/charges', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + STRIPE_KEY, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ amount: String(montoCentavos), currency: 'usd', source: token }),
  });
  if (!r.ok) throw new Error('No se pudo cobrar');
  return r.json();
}
