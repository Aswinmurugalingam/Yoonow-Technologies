const express = require('express');
const path = require('path');

const { homePage } = require('./src/views/home');
const { aboutPage } = require('./src/views/about');
const { servicesPage } = require('./src/views/services');
const { projectsPage, projectDetailPage } = require('./src/views/projects');
const { quotePage } = require('./src/views/quote');
const { contactPage } = require('./src/views/contact');

const app = express();
const PORT = process.env.PORT || 3000;
const leadHits = new Map();

app.use(express.json({ limit: '32kb' }));
app.use(express.urlencoded({ extended: false, limit: '32kb' }));

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  next();
});

app.use(express.static(path.join(__dirname, 'public'), {
  extensions: ['html'],
  maxAge: process.env.NODE_ENV === 'production' ? '1d' : 0,
}));

function cleanValue(value, maxLength = 1200) {
  return String(value || '').replace(/[<>]/g, '').trim().slice(0, maxLength);
}

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 6;
  const current = (leadHits.get(ip) || []).filter((time) => now - time < windowMs);
  if (current.length >= maxRequests) {
    leadHits.set(ip, current);
    return true;
  }
  current.push(now);
  leadHits.set(ip, current);
  return false;
}

function buildLeadEmail(payload) {
  const fields = [
    ['Form Type', payload.formType],
    ['Name', payload.name],
    ['Company / Name', payload.company],
    ['Phone / WhatsApp', payload.phone],
    ['Email', payload.email],
    ['Location', payload.location],
    ['Service Required', payload.service],
    ['Budget Range', payload.budget],
    ['Timeline / Urgency', payload.urgency],
    ['Requirement', payload.message],
  ].filter(([, value]) => value);

  return fields.map(([label, value]) => `${label}: ${value}`).join('\n');
}

async function sendLeadEmail(payload) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiver = process.env.LEAD_RECEIVER_EMAIL || 'info@yoonowtech.com';

  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error('SMTP environment variables are not configured.');
  }

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const formType = payload.formType || 'Website Enquiry';
  const subject = `Yoonow Technologies - ${formType}`;
  const body = `${buildLeadEmail(payload)}\n\nSubmitted from: www.yoonowtech.com\nSubmitted at: ${new Date().toISOString()}`;

  await transporter.sendMail({
    from: `Yoonow Website <${smtpUser}>`,
    to: receiver,
    replyTo: payload.email || smtpUser,
    subject,
    text: body,
  });
}

app.post('/api/leads', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(String(ip))) {
    return res.status(429).json({ ok: false, message: 'Too many submissions. Please try again later.' });
  }

  const payload = {
    formType: cleanValue(req.body.formType, 80),
    name: cleanValue(req.body.name || req.body.company, 160),
    company: cleanValue(req.body.company, 180),
    phone: cleanValue(req.body.phone, 80),
    email: cleanValue(req.body.email, 180),
    location: cleanValue(req.body.location, 180),
    service: cleanValue(req.body.service, 180),
    budget: cleanValue(req.body.budget, 120),
    urgency: cleanValue(req.body.urgency, 120),
    message: cleanValue(req.body.message, 2500),
    website: cleanValue(req.body.website, 80),
  };

  if (payload.website) {
    return res.json({ ok: true });
  }

  if (!payload.phone || !payload.email || !payload.message) {
    return res.status(400).json({ ok: false, message: 'Please fill phone, email and requirement details.' });
  }

  try {
    await sendLeadEmail(payload);
    return res.json({ ok: true });
  } catch (error) {
    console.error('Lead email failed:', error.message);
    return res.status(503).json({ ok: false, message: 'Email service is not configured yet. Please use WhatsApp or email directly.' });
  }
});

app.get('/', (_req, res) => res.send(homePage()));
app.get('/about', (_req, res) => res.send(aboutPage()));
app.get('/services', (_req, res) => res.send(servicesPage()));
app.get('/projects', (_req, res) => res.send(projectsPage()));
app.get('/projects/:slug', (req, res) => res.send(projectDetailPage(req.params.slug)));
app.get('/quote', (_req, res) => res.send(quotePage()));
app.get('/contact', (_req, res) => res.send(contactPage()));

app.use((_req, res) => {
  res.status(404).send(homePage());
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Yoonow Technologies site running at http://localhost:${PORT}`);
  });
}

module.exports = app;
