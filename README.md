# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


📘 Amar Seva Sangam USA – Launch Page

A minimal, modern, responsive launch website for Amar Seva Sangam USA, featuring a donation section, subscriber sign-up system, and soft pastel UI.
Built using:

React + Vite (Frontend)

Node.js + Express (Backend)

Local JSON storage for subscribers

Ready for Zeffy donation integration (link or modal embed)

🌐 Live Features
✅ Light Blue + Beige Pastel UI

Clean nonprofit-friendly aesthetic.

✅ About Section

Intro to Amar Seva Sangam USA chapter.

✅ Donate Section

Currently includes a button placeholder → ready for Zeffy Checkout URL.

✅ Email Subscription Form

Collects:

Name

Email

Interests

Data is stored securely on the backend.

✅ Admin-Protected Endpoints

Using Basic Auth:

View subscribers (/api/subscribers)

Export CSV (/api/subscribers.csv)

📁 Project Structure
amar-seva-usa/
│
├── backend/
│   ├── server.js
│   ├── subscribers.json
│   ├── package.json
│   └── README.md (optional)
│
└── frontend/
    ├── index.html
    ├── package.json
    ├── .env
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── styles.css
        └── components/
            ├── Hero.jsx
            ├── About.jsx
            ├── Donate.jsx
            ├── Signup.jsx
            └── Footer.jsx

🚀 Getting Started
1️⃣ Install dependencies
Backend
cd backend
npm install

Frontend
cd frontend
npm install

2️⃣ Environment Variables
Frontend — frontend/.env
VITE_API_URL=http://localhost:4000
# (Optional) Zeffy form URL:
# VITE_ZEFFY_URL=https://your-zeffy-form-url

Backend — Admin Login (local only)

Inside PowerShell terminal before starting server:

$env:ADMIN_USER="admin"
$env:ADMIN_PASS="12345"

3️⃣ Running the project
Start Backend
cd backend
npm run dev


The backend will show:

Backend listening on http://localhost:4000
Admin user: admin

Start Frontend
cd frontend
npm run dev


Runs at:

http://localhost:5173


Frontend will now be able to send requests to the backend.

📬 Subscriber Management
➤ POST Subscribe

From the website form, data goes to:

POST /api/subscribe


Saved in:

backend/subscribers.json

➤ Admin: View Subscribers
curl -u admin:12345 http://localhost:4000/api/subscribers

➤ Admin: Export CSV
curl -u admin:12345 http://localhost:4000/api/subscribers.csv -o subscribers.csv

💳 Zeffy Donation Integration (Later)

When you receive the Zeffy form link:

Option A — Simple Link (Recommended)

Add to .env:

VITE_ZEFFY_URL=https://your-zeffy-form-url


The Donate button will open Zeffy checkout in a new tab.

Option B — Embedded Modal / Iframe

You may embed using Zeffy’s provided script or iframe snippet.
Frontend already supports switching easily.

🎨 UI Design Notes

Light pastel blue background

Warm beige section boxes

Soft shadows, rounded corners

Responsive layout for mobile & desktop

Clean nonprofit aesthetic

📦 Production Build
Frontend
cd frontend
npm run build

Backend

Deploy anywhere (Render / Railway / AWS / Heroku), or run locally:

node server.js


Make sure to set environment variables on your hosting provider.

🤝 Contributing / Future Features

Suggested enhancements:

Zeffy modal integration

Admin dashboard UI (React)

Google Sheets sync for subscribers

Mailchimp integration

Animations / scroll effects

Mobile hamburger menu