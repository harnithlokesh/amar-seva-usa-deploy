Amar Seva Sangam USA – Launch Page

A clean, modern launch website for Amar Seva Sangam USA, built to support donations and collect subscriber information with a nonprofit-friendly design.

FEATURES
- Light blue and beige pastel UI
- Donation section (ready for Zeffy integration)
- Email subscription form (name, email, interests)
- Admin-protected endpoints to view and export subscribers
- Fully responsive layout

TECH STACK
Frontend:
- React
- Vite
- Custom CSS

Backend:
- Node.js
- Express
- Local JSON storage (subscribers.json)

PROJECT STRUCTURE
amar-seva-usa/
- backend/
  - server.js
  - subscribers.json
  - package.json
- frontend/
  - index.html
  - package.json
  - .env
  - src/

GETTING STARTED

Install Dependencies

Backend:
cd backend
npm install

Frontend:
cd frontend
npm install

ENVIRONMENT VARIABLES

Frontend (.env):
VITE_API_URL=http://localhost:4000

Backend (PowerShell):
$env:ADMIN_USER="admin"
$env:ADMIN_PASS="12345"

RUNNING THE PROJECT

Start Backend:
cd backend
npm run dev

Start Frontend:
cd frontend
npm run dev

SUBSCRIBER MANAGEMENT

POST Subscribe:
POST /api/subscribe
Saved in backend/subscribers.json

Admin View:
curl -u admin:12345 http://localhost:4000/api/subscribers

Admin Export CSV:
curl -u admin:12345 http://localhost:4000/api/subscribers.csv -o subscribers.csv

DONATION INTEGRATION

Add Zeffy link to frontend/.env:
VITE_ZEFFY_URL=https://your-zeffy-form-url

PRODUCTION BUILD

Frontend:
npm run build

Backend:
node server.js

FUTURE ENHANCEMENTS
- Zeffy modal integration
- Admin dashboard
- Google Sheets sync
- Email marketing integration

