   # NakshatraVault 🚀

Vedic Astrology Platform with Kundli Generation & Matching

## Tech Stack
- Frontend: Astro + React + Tailwind
- Backend: Node.js + Express + MongoDB
- Astrology API: AstrologyAPI.com
- Payments: Razorpay
- Deploy: Vercel (FE) + Render (BE)

## Setup
1. Clone repo
2. `cd backend && npm init -y && npm i express mongoose cors dotenv jsonwebtoken bcryptjs axios`
3. `cd ../frontend && npm create astro@latest .`
4. Add .env files with API keys

## API Endpoints
- POST /api/auth/register
- POST /api/kundli/generate
- POST /api/matching/check
 