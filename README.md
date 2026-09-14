# Aamayra / LeadPilot

AI real-estate lead management and WhatsApp sales assistant.

## Stack
- Next.js + TypeScript
- OpenAI Responses API
- PostgreSQL/Supabase
- WhatsApp Cloud API

## Deploy
1. Upload the project files to the root of the GitHub repository.
2. Import the repository into Vercel.
3. Set the environment variables from `.env.example` in Vercel.
4. Deploy.

The root `app/page.tsx` is the homepage, so `/` should render the dashboard rather than a 404.

## Environment variables
- `OPENAI_API_KEY`
- `OPENAI_MODEL` (optional)
- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `WHATSAPP_VERIFY_TOKEN`
- `WHATSAPP_GRAPH_VERSION` (optional)

Never commit real API keys or tokens.
