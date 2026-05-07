# NakshatVault

NakshatVault is a full-stack Vedic astrology platform where users can register, manage profile and birth details, generate/store kundli records, and book consultations. It is designed as a modern web app with role-based access and production-ready deployment support.

## Table of contents

- [General info](#general-info)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Setup](#setup)
- [Code Examples](#code-examples)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)

## General info

NakshatVault was built to combine traditional Vedic astrology workflows with a clean digital user experience.  
The purpose of this project is to provide:

- secure user authentication
- structured birth detail management
- kundli generation and history
- appointment booking with consultation options
- admin visibility for managing users and appointments

Motivation:
- make astrology services easier to access online
- practice and demonstrate full-stack architecture
- deploy a real production-style app using modern tooling

## Screenshots

sections:
- Home page
- Register/Login page
- User dashboard
- Kundli page
- Appointment booking page
- Admin dashboard

## Technologies

- React - 19.2.4
- Vite - 8.0.4
- React Router DOM - 7.14.0
- Node.js - 20.x (recommended runtime)
- Express - 4.19.2
- Mongoose - 8.5.0
- MongoDB Atlas - cloud database
- JSON Web Token - 9.0.2
- Render - backend hosting
- Vercel - frontend hosting

## Setup

[Project is live here](https://nakshat-vault.vercel.app/)

### Prerequisites

- Node.js 20+
- npm
- MongoDB Atlas connection string
- API keys for third-party integrations used in backend

### 1) Clone repository

```bash
git clone https://github.com/bismitw/NakshatVault.git
cd NakshatVault
```

### 2) Setup backend

```bash
cd backend
npm install
```

Create `.env` from `.env.example`:

Mac/Linux:
```bash
cp .env.example .env
```

Windows PowerShell:
```powershell
Copy-Item .env.example .env
```

Fill all required values in `backend/.env`:

- `MONGODB_URI`
- `PORT`
- `CORS_ORIGIN`
- `ACCESS_TOKEN_SECRET`
- `ACCESS_TOKEN_EXPIRY`
- `REFRESH_TOKEN_SECRET`
- `REFRESH_TOKEN_EXPIRY`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `ADMIN_EMAIL`
- `PROKERALA_CLIENT_ID`
- `PROKERALA_CLIENT_SECRET`
- `PROKERALA_BASE_URL`
- `DEFAULT_EXPERT_NAME`
- `DEFAULT_EXPERT_EMAIL`
- `GEOAPIFY_API_KEY`

Run backend:

```bash
npm run dev
```

Backend runs on:
- `http://localhost:8000` (or your configured `PORT`)

### 3) Setup frontend

Open a new terminal:

```bash
cd ../frontend
npm install
```

Create `.env` in `frontend` and add:

```bash
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:
- `http://localhost:5173` (default Vite port)

### 4) Quick local verification

1. Open `http://localhost:5173`
2. Try register/login flow
3. Test backend health at `http://localhost:8000/`
4. Test public API endpoint at `http://localhost:8000/api/v1/appointments/options`

### Demo / Production URLs

- Frontend: `https://nakshat-vault.vercel.app`
- Backend: `https://nakshatvault.onrender.com`


### Backend route mounting

```js
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/kundli", kundliRouter);
app.use("/api/v1/appointments", appointmentRouter);
```

### Frontend API base usage

```js
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8001/api/v1";
```

## Features

List of features ready and TODOs for future development

- User registration/login with JWT auth flow
- Protected user routes (profile, kundli, appointments)
- Birth details and profile update support
- Kundli create/view/update/delete and generated kundli support
- Appointment booking and consultation options
- Admin endpoints for all users and all appointments
- Production deployment on Vercel + Render + MongoDB Atlas

To-do list:

- Add password reset and email verification flow
- Add pagination/filtering for admin dashboards
- Add automated CI tests in deployment pipeline
- Add API documentation (OpenAPI/Swagger)
- Improve observability (health checks, structured logs, uptime monitoring)

## Status

Project is: in progress.

Reason:
- core product features are functional and deployed
- additional hardening and quality improvements are planned before final production maturity

## Inspiration

Project inspired by:
- the need to modernize traditional Vedic astrology workflows
- full-stack production deployment practices for real-world portfolio projects

## Contact

Created by @bismitw - feel free to contact me!

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
