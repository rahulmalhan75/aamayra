# LeadPilot AI — MVP

AI WhatsApp sales assistant for real-estate brokers.

## Stack
- Next.js + TypeScript
- PostgreSQL/Supabase
- OpenAI Responses API
- WhatsApp Cloud API

## Quick start
1. Copy `.env.example` to `.env.local`
2. Fill in credentials.
3. `npm install`
4. `npm run dev`

The WhatsApp webhook is intentionally a starter implementation. Before production, verify webhook signatures, validate payloads, add authentication/rate limiting, and use the current Graph API version supported by Meta.


## Production checklist
- Replace `vXX.X` in `lib/whatsapp.ts` with the Meta Graph API version currently supported by your WhatsApp Cloud API app.
- Configure and verify the WhatsApp webhook in Meta Business Manager.
- Implement Meta webhook signature verification before enabling automatic replies.
- Add authentication/authorization around dashboard and API routes.
- Add idempotency for WhatsApp message IDs.
- Store secrets only in server-side environment variables.
- Add rate limits, logging, retries, error monitoring, and database migrations.
