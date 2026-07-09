const { renderPage } = require('./layout');
const { site } = require('../data/siteData');

const privacyHighlights = [
  ['Purpose', 'Enquiry review, quotation preparation, service communication, and project follow-up.'],
  ['Files', 'Attachments are used only to understand your requirement and are sent to our business email.'],
  ['Security', 'Do not submit passwords, banking credentials, private keys, or highly sensitive data through public forms.'],
  ['Control', 'You can request correction, clarification, or deletion of unnecessary submitted information.']
];

const privacySections = [
  {
    number: '01',
    title: 'Business information',
    text: `${site.name} is based in Nagercoil and provides technology support, website development, software development, networking, CCTV, licensing support, and related business technology services.`
  },
  {
    number: '02',
    title: 'Information we collect',
    text: 'When you submit a Contact or Get Quote form, we may collect your name, company or location details, phone number, WhatsApp number, email address, service type, requirement message, budget or urgency details, and attached files such as images, PDFs, documents, ZIP files, or screenshots.'
  },
  {
    number: '03',
    title: 'How we use your information',
    text: 'Your information is used to understand your requirement, reply to your enquiry, prepare quotations, review support scope, communicate through phone, WhatsApp, or email, and maintain basic service follow-up records.'
  },
  {
    number: '04',
    title: 'Attachments and project files',
    text: 'Files uploaded through the website are sent to our business email for review. Please do not upload passwords, banking credentials, private keys, or highly confidential data unless specifically requested through a secure method.'
  },
  {
    number: '05',
    title: 'Sharing of information',
    text: 'We do not sell your enquiry details. Information may be shared only when needed to complete your requested service, comply with legal obligations, or coordinate with trusted service tools such as hosting, email, and communication providers.'
  },
  {
    number: '06',
    title: 'Website hosting and communication tools',
    text: 'The website may use hosting, email, analytics, and communication services to operate the site, receive enquiries, improve performance, and respond to requests.'
  },
  {
    number: '07',
    title: 'Data retention',
    text: 'Enquiry emails and service communication may be retained for follow-up, quotation history, project reference, accounting, or support tracking. You can request removal of unnecessary personal information by contacting us.'
  },
  {
    number: '08',
    title: 'Security',
    text: 'We take practical steps to protect submitted information, but no internet or email transmission is guaranteed to be fully secure. Avoid submitting sensitive credentials through public forms.'
  },
  {
    number: '09',
    title: 'Your choices',
    text: 'You can contact us to ask for correction, deletion, or clarification of information you submitted through the website, subject to valid business, legal, and service record requirements.'
  }
];

function renderHighlights() {
  return privacyHighlights.map(([title, text]) => `
    <article class="privacy-highlight-card">
      <strong>${title}</strong>
      <span>${text}</span>
    </article>
  `).join('');
}

function renderPrivacySections() {
  return privacySections.map((section) => `
    <article class="privacy-policy-card glass reveal">
      <span class="privacy-index">${section.number}</span>
      <div>
        <h2>${section.title}</h2>
        <p>${section.text}</p>
      </div>
    </article>
  `).join('');
}

function privacyPolicyPage() {
  return renderPage({
    title: `Privacy Policy | ${site.name}`,
    description: `${site.name} privacy policy for website enquiries, contact forms, quotation requests, attachments, and business communication.`,
    path: '/privacy-policy',
    body: `
      <section class="privacy-pro-hero section-tight">
        <div class="launch-wide-grid privacy-hero-grid">
          <div class="privacy-hero-copy reveal">
            <span class="section-label">Privacy Policy</span>
            <h1>Your enquiry information is handled for service review and communication.</h1>
            <p>This page explains how Yoonow Technologies handles details submitted through the website, Contact form, Get Quote form, WhatsApp, email, and attached requirement files.</p>
          </div>
          <aside class="privacy-meta-card glass reveal">
            <span>Last updated</span>
            <strong>09 July 2026</strong>
            <p>Applies to website enquiries, quote requests, file attachments, email communication, and service follow-up.</p>
          </aside>
        </div>
      </section>

      <section class="section-tight privacy-highlight-section">
        <div class="launch-wide-grid privacy-highlight-grid glass reveal">
          ${renderHighlights()}
        </div>
      </section>

      <section class="section-tight privacy-policy-section">
        <div class="launch-wide-grid privacy-policy-grid">
          ${renderPrivacySections()}
        </div>
      </section>

      <section class="section-tight">
        <div class="launch-wide-grid privacy-contact-band glass reveal">
          <div>
            <span class="section-label">Privacy Contact</span>
            <h2>Need to correct or remove submitted information?</h2>
            <p>For privacy-related questions, contact us through email or phone and mention the enquiry details clearly.</p>
          </div>
          <div class="privacy-contact-actions">
            <a class="btn btn-primary" href="mailto:${site.email}">${site.email}</a>
            <a class="btn btn-ghost" href="tel:${site.phone.replace(/\s+/g, '')}">${site.phone}</a>
          </div>
        </div>
      </section>
    `,
  });
}

module.exports = { privacyPolicyPage };
