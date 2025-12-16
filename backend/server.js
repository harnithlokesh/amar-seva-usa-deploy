
// backend/server.js

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer'); // 👈 added

const app = express();
const PORT = process.env.PORT || 4000;
const DB_PATH = path.join(__dirname, 'subscribers.json');

// Admin credentials (change via env vars)
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'changeme';



// middlewares
app.use(cors());
app.use(bodyParser.json({ limit: '200kb' })); // parse JSON bodies

// Ensure subscribers.json exists with initial structure
function ensureDb() {
  if (!fs.existsSync(DB_PATH)) {
    const initial = { subscribers: [] };
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2), 'utf8');
  }
}
ensureDb();

// helper: read DB
function readDb() {
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read DB:', err);
    return { subscribers: [] };
  }
}

// helper: write DB (atomic-ish)
function writeDb(dbObj) {
  const tmpPath = DB_PATH + '.tmp';
  fs.writeFileSync(tmpPath, JSON.stringify(dbObj, null, 2), 'utf8');
  fs.renameSync(tmpPath, DB_PATH);
}

// Basic auth checker for admin routes
function checkBasicAuth(req) {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Basic ')) return false;
  const b64 = auth.slice(6);
  let cred;
  try {
    cred = Buffer.from(b64, 'base64').toString('utf8'); // "user:pass"
  } catch (e) {
    return false;
  }
  const idx = cred.indexOf(':');
  if (idx === -1) return false;
  const user = cred.slice(0, idx);
  const pass = cred.slice(idx + 1);
  return user === ADMIN_USER && pass === ADMIN_PASS;
}

/* ----------------------------------------
   Email (Contact form) – Nodemailer
   ---------------------------------------- */

// Configure transporter from env
// Set these in your environment:
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS,
// CONTACT_TO_EMAIL (where you receive contact messages),
// CONTACT_FROM_EMAIL (from address shown in email).
const mailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for 587/STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Optional: verify transporter on startup
mailTransporter.verify((err, success) => {
  if (err) {
    console.warn('⚠️ Nodemailer transport not ready:', err.message);
  } else {
    console.log('✅ Nodemailer transport is ready to send emails');
  }
});

/* ----------------------------------------
   Routes
   ---------------------------------------- */

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Subscribe endpoint
app.post('/api/subscribe', (req, res) => {
  const { name = '', email = '', interests = '' } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res
      .status(400)
      .json({ success: false, error: 'A valid email is required.' });
  }

  const db = readDb();

  // simple duplicate check by email
  const exists = db.subscribers.find(
    (s) => s.email.toLowerCase() === email.toLowerCase()
  );
  if (exists) {
    return res.json({
      success: true,
      message: 'Already subscribed',
      subscriber: exists,
    });
  }

  const subscriber = {
    id: Date.now(),
    name: String(name).trim(),
    email: String(email).trim().toLowerCase(),
    interests: String(interests).trim(),
    createdAt: new Date().toISOString(),
  };

  db.subscribers.unshift(subscriber);
  try {
    writeDb(db);
    return res.json({ success: true, subscriber });
  } catch (err) {
    console.error('Failed to write DB:', err);
    return res
      .status(500)
      .json({ success: false, error: 'Could not save subscriber.' });
  }
});

/* Contact Us endpoint – sends email */
app.post('/api/contact', async (req, res) => {
  const { name = '', email = '', subject = '', message = '' } = req.body || {};

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res
      .status(400)
      .json({ success: false, error: 'A valid email is required.' });
  }

  if (!message || !String(message).trim()) {
    return res
      .status(400)
      .json({ success: false, error: 'Message cannot be empty.' });
  }

  const safeName = String(name || '').trim() || 'Anonymous';
  const safeSubject =
    String(subject || '').trim() || 'New message from Amar Seva Sangam USA site';

  try {
    const info = await mailTransporter.sendMail({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        `"Website" <no-reply@example.org>`,
      to: process.env.CONTACT_TO_EMAIL || 'you@example.org',
      replyTo: email,
      subject: safeSubject,
      text: `
From: ${safeName} <${email}>

${message}
      `.trim(),
    });

    console.log('Contact email sent:', info.messageId);
    return res.json({ success: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return res
      .status(500)
      .json({ success: false, error: 'Could not send email.' });
  }
});

// Admin: list subscribers (protected with Basic Auth)
app.get('/api/subscribers', (req, res) => {
  if (!checkBasicAuth(req)) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Admin"');
    return res.status(401).json({ error: 'Unauthorized' });
  }
  const db = readDb();
  res.json(db);
});

// Admin: CSV export (protected with Basic Auth)
app.get('/api/subscribers.csv', (req, res) => {
  if (!checkBasicAuth(req)) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Admin"');
    return res.status(401).send('Unauthorized');
  }

  const db = readDb();
  // CSV header
  const header = 'id,name,email,interests,createdAt\n';

  // escape double quotes in fields by doubling them
  const rows = db.subscribers
    .map((s) => {
      const safe = (v) => `"${String(v || '').replace(/"/g, '""')}"`;
      return [
        safe(s.id),
        safe(s.name),
        safe(s.email),
        safe(s.interests),
        safe(s.createdAt),
      ].join(',');
    })
    .join('\n');

  const csv = header + rows;
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader(
    'Content-Disposition',
    'attachment; filename="subscribers.csv"'
  );
  res.send(csv);
});

// Fallback 404 for other routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
  console.log(
    `Admin user: ${ADMIN_USER} (change with ADMIN_USER / ADMIN_PASS env vars)`
  );
});
