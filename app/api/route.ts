import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    return new Response(challenge || "", { status: 200 });
  }

  return new Response("Forbidden", { status: 403 });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  // TODO:
  // 1. Verify Meta webhook signature.
  // 2. Parse the incoming message.
  // 3. Find/create the lead.
  // 4. Save inbound message.
  // 5. Generate AI reply.
  // 6. Save outbound message.
  // 7. Send reply via WhatsApp.
  //
  // Keep this endpoint fast and make processing idempotent.

  console.log("WhatsApp webhook:", JSON.stringify(body));
  return Response.json({ received: true });
}
