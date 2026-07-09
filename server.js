const express = require('express');
const path = require('path');
const multer = require('multer');

const { homePage } = require('./src/views/home');
const { aboutPage } = require('./src/views/about');
const { servicesPage } = require('./src/views/services');
const { projectsPage, projectDetailPage } = require('./src/views/projects');
const { quotePage } = require('./src/views/quote');
const { contactPage } = require('./src/views/contact');
const { faqPage } = require('./src/views/faq');
const { privacyPolicyPage } = require('./src/views/privacyPolicy');
const { termsPage } = require('./src/views/terms');

const app = express();
const PORT = process.env.PORT || 3000;
const leadHits = new Map();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    files: 8,
    fileSize: 15 * 1024 * 1024,
    fields: 30,
    fieldSize: 32 * 1024,
  },
});

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
  setHeaders: (res, filePath) => {
    if (/assets[\\/]js[\\/]main\.js$/.test(filePath) || /assets[\\/]css[\\/]styles\.css$/.test(filePath)) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      return;
    }

    if (/assets[\\/]images[\\/]projects[\\/].+\.webp$/.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return;
    }

    if (/assets[\\/](images|video)[\\/]/.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=604800');
    }
  },
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

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


function formatFileSize(bytes) {
  const size = Number(bytes || 0);
  if (size >= 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
  if (size >= 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${size} B`;
}

function safeFileName(fileName) {
  return cleanValue(fileName, 180).replace(/[\\/:*?"<>|]/g, '-');
}

function buildAttachmentSummary(files = []) {
  return files
    .filter(Boolean)
    .map((file) => `${safeFileName(file.originalname)} (${formatFileSize(file.size)})`)
    .join('\n');
}

function buildLeadFields(payload) {
  return [
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
    ['Client Selected Files', payload.attachmentNames],
  ].filter(([, value]) => value);
}

function buildLeadEmail(payload, files = []) {
  const fields = buildLeadFields(payload);
  const bodyLines = fields.map(([label, value]) => `${label}: ${value}`);
  const attachmentSummary = buildAttachmentSummary(files);
  if (attachmentSummary) {
    bodyLines.push(`Attached Files:
${attachmentSummary}`);
  }
  return bodyLines.join('\n');
}

function buildLeadEmailHtml(payload, files = []) {
  const fields = buildLeadFields(payload);
  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });
  const formType = payload.formType || 'Website Enquiry';
  const service = payload.service || 'General Enquiry';
  const phoneDigits = String(payload.phone || '').replace(/\D/g, '');
  const waPhone = phoneDigits.startsWith('91') ? phoneDigits : `91${phoneDigits}`;
  const whatsappText = encodeURIComponent(`Hello ${payload.name || ''}, thank you for contacting Yoonow Technologies regarding ${service}.`);
  const whatsappLink = phoneDigits ? `https://wa.me/${waPhone}?text=${whatsappText}` : 'https://wa.me/918610507446';
  const emailLink = payload.email ? `mailto:${encodeURIComponent(payload.email)}` : 'mailto:info@yoonowtech.com';

  const rows = fields.map(([label, value]) => `
    <tr>
      <td style="padding:14px 16px;border-bottom:1px solid #1e365f;color:#93a4bd;font:600 13px Arial,Helvetica,sans-serif;letter-spacing:.02em;text-transform:uppercase;width:35%;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:14px 16px;border-bottom:1px solid #1e365f;color:#e8f0ff;font:600 15px Arial,Helvetica,sans-serif;line-height:1.55;vertical-align:top;">${escapeHtml(value).replace(/\n/g, '<br>')}</td>
    </tr>
  `).join('');

  const attachmentRows = files.length ? files.map((file) => `
    <tr>
      <td style="padding:13px 16px;border-bottom:1px solid #1e365f;color:#dbe8ff;font:700 14px Arial,Helvetica,sans-serif;line-height:1.5;vertical-align:top;">${escapeHtml(safeFileName(file.originalname))}</td>
      <td align="right" style="padding:13px 16px;border-bottom:1px solid #1e365f;color:#93a4bd;font:700 13px Arial,Helvetica,sans-serif;white-space:nowrap;vertical-align:top;">${escapeHtml(formatFileSize(file.size))}</td>
    </tr>
  `).join('') : '';

  const attachmentBlock = files.length ? `
            <tr>
              <td style="padding:0 24px 20px;background:#08111f;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #1e365f;border-radius:18px;overflow:hidden;background:#0b1424;">
                  <tr>
                    <td colspan="2" style="padding:14px 16px;border-bottom:1px solid #1e365f;color:#7db3ff;font:800 12px Arial,Helvetica,sans-serif;letter-spacing:.14em;text-transform:uppercase;background:rgba(37,99,235,.08);">Attached Files</td>
                  </tr>
                  ${attachmentRows}
                </table>
              </td>
            </tr>
  ` : '';

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(formType)} - Yoonow Technologies</title>
  </head>
  <body style="margin:0;padding:0;background:#050a14;font-family:Arial,Helvetica,sans-serif;color:#e8f0ff;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#050a14;padding:28px 14px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px;background:#08111f;border:1px solid #1c355f;border-radius:22px;overflow:hidden;box-shadow:0 22px 60px rgba(0,0,0,.34);">
            <tr>
              <td style="padding:0;background:linear-gradient(135deg,#0a1630 0%,#0d2348 48%,#1b2f56 100%);">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:28px 28px 22px;">
                      <div style="display:inline-block;padding:8px 13px;border:1px solid rgba(77,148,255,.45);border-radius:999px;background:rgba(42,103,255,.12);color:#7db3ff;font:700 12px Arial,Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;">Yoonow Technologies</div>
                      <h1 style="margin:18px 0 8px;color:#ffffff;font:800 28px Arial,Helvetica,sans-serif;line-height:1.15;">New ${escapeHtml(formType)}</h1>
                      <p style="margin:0;color:#b8c8de;font:500 15px Arial,Helvetica,sans-serif;line-height:1.6;">A new enquiry has been submitted from <strong style="color:#ffffff;">www.yoonowtech.com</strong>. Review the requirement and contact the client using phone, WhatsApp, or email.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 24px 8px;background:#08111f;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:16px;border:1px solid #203a67;border-radius:18px;background:linear-gradient(145deg,rgba(37,99,235,.12),rgba(249,115,22,.08));">
                      <div style="color:#94a8c7;font:700 12px Arial,Helvetica,sans-serif;letter-spacing:.14em;text-transform:uppercase;margin-bottom:7px;">Requested Service</div>
                      <div style="color:#ffffff;font:800 20px Arial,Helvetica,sans-serif;line-height:1.35;">${escapeHtml(service)}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px 20px;background:#08111f;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #1e365f;border-radius:18px;overflow:hidden;background:#0b1424;">
                  ${rows}
                </table>
              </td>
            </tr>
            ${attachmentBlock}
            <tr>
              <td style="padding:0 24px 26px;background:#08111f;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:16px;border:1px solid #203a67;border-radius:18px;background:#0b1424;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="padding:4px 0;color:#93a4bd;font:600 13px Arial,Helvetica,sans-serif;">Submitted from</td>
                          <td align="right" style="padding:4px 0;color:#e8f0ff;font:700 13px Arial,Helvetica,sans-serif;">www.yoonowtech.com</td>
                        </tr>
                        <tr>
                          <td style="padding:4px 0;color:#93a4bd;font:600 13px Arial,Helvetica,sans-serif;">Submitted at</td>
                          <td align="right" style="padding:4px 0;color:#e8f0ff;font:700 13px Arial,Helvetica,sans-serif;">${escapeHtml(submittedAt)} IST</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 28px;background:#08111f;">
                <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;">
                  <tr>
                    <td align="center" style="padding:0 0 10px;">
                      <a href="${escapeHtml(whatsappLink)}" style="display:inline-block;margin:4px;padding:13px 18px;border-radius:999px;background:#2563eb;color:#ffffff;text-decoration:none;font:800 14px Arial,Helvetica,sans-serif;">Reply on WhatsApp</a>
                      <a href="${escapeHtml(emailLink)}" style="display:inline-block;margin:4px;padding:13px 18px;border-radius:999px;background:#f97316;color:#ffffff;text-decoration:none;font:800 14px Arial,Helvetica,sans-serif;">Reply by Email</a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="color:#7f91ab;font:500 12px Arial,Helvetica,sans-serif;line-height:1.5;">Yoonow Technologies</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function sendLeadEmail(payload, files = []) {
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
  const body = `${buildLeadEmail(payload, files)}\n\nSubmitted from: www.yoonowtech.com\nSubmitted at: ${new Date().toISOString()}`;
  const attachments = files
    .filter((file) => file && file.buffer && file.size > 0)
    .map((file) => ({
      filename: safeFileName(file.originalname || 'attachment'),
      content: file.buffer,
      contentType: file.mimetype || 'application/octet-stream',
      contentDisposition: 'attachment',
    }));

  const mailOptions = {
    from: `Yoonow Website <${smtpUser}>`,
    to: receiver,
    replyTo: payload.email || smtpUser,
    subject: attachments.length ? `${subject} (${attachments.length} attachment${attachments.length > 1 ? 's' : ''})` : subject,
    text: body,
    html: buildLeadEmailHtml(payload, files),
    headers: {
      'X-Yoonow-Attachment-Count': String(attachments.length),
    },
  };

  if (attachments.length) {
    mailOptions.attachments = attachments;
  }

  await transporter.sendMail(mailOptions);
}

app.post('/api/leads', (req, res) => {
  upload.any()(req, res, async (uploadError) => {
    if (uploadError) {
      const isSizeError = uploadError.code === 'LIMIT_FILE_SIZE' || uploadError.code === 'LIMIT_FILE_COUNT';
      return res.status(isSizeError ? 413 : 400).json({
        ok: false,
        message: isSizeError
          ? 'Attached files are too large. Please upload fewer or smaller files and try again.'
          : 'Unable to read the uploaded files. Please try again.',
      });
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    if (isRateLimited(String(ip))) {
      return res.status(429).json({ ok: false, message: 'Too many submissions. Please try again later.' });
    }

    const uploadedFiles = (Array.isArray(req.files) ? req.files : [])
      .filter((file) => file && file.buffer && file.size > 0)
      .slice(0, 8);
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
      attachmentCount: Number(cleanValue(req.body.attachmentCount, 20) || 0),
      attachmentNames: cleanValue(req.body.attachmentNames, 1200),
      website: cleanValue(req.body.website, 80),
    };

    if (payload.website) {
      return res.json({ ok: true });
    }

    const contentType = String(req.headers['content-type'] || '');
    if (payload.attachmentCount > 0 && !contentType.includes('multipart/form-data')) {
      return res.status(400).json({
        ok: false,
        message: 'Attachment upload did not reach the server because the page used an old cached script. Please press Ctrl + F5, reopen the page, attach the file again and submit.',
      });
    }

    if (payload.attachmentCount > 0 && uploadedFiles.length === 0) {
      return res.status(400).json({
        ok: false,
        message: 'Your enquiry was received, but the selected file did not upload. Please refresh the page, select a file under 4 MB and try again.',
      });
    }

    if (!payload.phone || !payload.email || !payload.message) {
      return res.status(400).json({ ok: false, message: 'Please fill phone, email and requirement details.' });
    }

    try {
      await sendLeadEmail(payload, uploadedFiles);
      return res.json({ ok: true, attachmentCount: uploadedFiles.length });
    } catch (error) {
      console.error('Lead email failed:', error.message);
      return res.status(503).json({ ok: false, message: 'Email service is not configured yet. Please use WhatsApp or email directly.' });
    }
  });
});

app.get('/', (_req, res) => res.send(homePage()));
app.get('/about', (_req, res) => res.send(aboutPage()));
app.get('/services', (_req, res) => res.send(servicesPage()));
app.get('/projects', (_req, res) => res.send(projectsPage()));
app.get('/projects/:slug', (req, res) => res.send(projectDetailPage(req.params.slug)));
app.get('/quote', (_req, res) => res.send(quotePage()));
app.get('/contact', (_req, res) => res.send(contactPage()));
app.get('/faq', (_req, res) => res.send(faqPage()));
app.get('/privacy-policy', (_req, res) => res.send(privacyPolicyPage()));
app.get('/terms', (_req, res) => res.send(termsPage()));

app.use((_req, res) => {
  res.status(404).send(homePage());
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Yoonow Technologies site running at http://localhost:${PORT}`);
  });
}

module.exports = app;
