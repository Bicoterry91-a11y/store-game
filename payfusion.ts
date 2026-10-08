type PaymentInput = {
  amount: number;
  currency: string;
  phone: string;
  reference: string;
  method: string;
};

export async function createPayfusionPayment(input: PaymentInput) {
  const baseUrl = process.env.PAYFUSION_BASE_URL;
  const clientId = process.env.PAYFUSION_CLIENT_ID;
  const clientSecret = process.env.PAYFUSION_CLIENT_SECRET;
  const path = process.env.PAYFUSION_PAYMENT_PATH || "/payments";

  if (!baseUrl || !clientId || !clientSecret) {
    throw new Error("PayFusion n'est pas encore configuré dans les variables d'environnement.");
  }

  // Le format exact de l'API PayFusion doit être aligné sur la documentation
  // de votre compte marchand. Cette couche isole cette intégration du reste du site.
  const response = await fetch(`${baseUrl.replace(/\/$/, "")}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`
    },
    body: JSON.stringify(input),
    cache: "no-store"
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`PayFusion a refusé la demande (${response.status}): ${message.slice(0, 300)}`);
  }

  return response.json();
}
