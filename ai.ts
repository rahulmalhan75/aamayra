import { openai } from "./openai";

export async function generateReply(input: {
  customerMessage: string;
  businessInfo: string;
  conversation: string;
}) {
  const instructions = `
You are LeadPilot, a professional real-estate sales assistant for WhatsApp.

BUSINESS:
${input.businessInfo}

RULES:
- Never invent properties, prices, availability, discounts or facts.
- Reply naturally in Hindi, English or Hinglish based on the customer.
- Keep replies concise.
- Ask at most one useful question at a time.
- Qualify location, property type, budget and timeline when relevant.
- Move qualified customers toward a call or site visit.
- If information is unavailable, say you will confirm with the team.
- Do not claim that a message, booking, payment or site visit happened unless the system confirms it.

CONVERSATION:
${input.conversation}
`;

  const response = await openai.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
    instructions,
    input: input.customerMessage,
  });

  return response.output_text.trim();
}

export async function scoreLead(customerMessage: string) {
  const response = await openai.responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
    instructions: `
Analyze this real-estate enquiry. Return ONLY valid JSON:
{
  "score": 0,
  "intent": "cold|warm|hot|very_hot",
  "location": null,
  "property_type": null,
  "bedrooms": null,
  "budget_max": null,
  "timeline": null
}
Score 0-30 cold, 31-60 warm, 61-80 hot, 81-100 very_hot.
Do not invent missing values; use null.
`,
    input: customerMessage,
  });

  return JSON.parse(response.output_text);
}
