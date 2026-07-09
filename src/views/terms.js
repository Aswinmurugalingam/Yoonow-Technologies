const { renderPage } = require('./layout');
const { site } = require('../data/siteData');

const termSteps = [
  ['01', 'Requirement', 'Client shares service need, files, device details, screenshots, references, or project scope.'],
  ['02', 'Review', 'Yoonow Technologies reviews the requirement, effort, dependencies, timeline, and support expectations.'],
  ['03', 'Quote', 'Final scope, price, timeline, payment terms, and deliverables are confirmed before work starts.'],
  ['04', 'Delivery', 'Work is completed based on agreed scope, approvals, third-party readiness, and client feedback.']
];

const termCards = [
  {
    title: 'Services',
    text: `${site.name} provides technology-related services including IT support, computer and laptop service, networking, CCTV, firewall and NAS setup, printer support, software licensing support, website development, Android app development, and custom business software development.`
  },
  {
    title: 'Enquiries and quotations',
    text: 'Quotations are prepared based on the information shared by the client. Final price, timeline, deliverables, support scope, and payment terms may change if the requirement changes or if additional work is identified during review.'
  },
  {
    title: 'Client responsibility',
    text: 'The client should provide correct requirement details, access permissions, files, content, images, software licence details, device information, approvals, and timely feedback required to complete the service or project.'
  },
  {
    title: 'Payments',
    text: 'Payment terms will be mentioned in the quotation, invoice, or project communication. Work may be started, paused, delivered, or handed over based on the agreed payment schedule.'
  },
  {
    title: 'Project timelines',
    text: 'Timelines depend on requirement clarity, client feedback, content availability, third-party approvals, hosting or domain readiness, hardware availability, and any changes requested after work begins.'
  },
  {
    title: 'Websites, apps, and software',
    text: 'Website, app, and software work may include design, development, testing, deployment, bug fixing, and handover based on the agreed scope. New features, redesigns, integrations, or major changes may require a separate quote.'
  },
  {
    title: 'Hardware, software licences, and third-party services',
    text: 'Hardware, software licences, domains, hosting, email, cloud tools, and other third-party services are subject to the policies, pricing, warranty, and availability of the respective vendors or providers.'
  },
  {
    title: 'Support and maintenance',
    text: 'Support is provided based on the agreed scope. AMC or maintenance plans should clearly mention covered devices, response method, exclusions, visit limits, renewal period, and emergency handling if applicable.'
  },
  {
    title: 'Content and intellectual property',
    text: 'The client is responsible for the legality and ownership of content, logos, images, documents, and data provided for use in a project. Completed deliverables and source access will follow the agreed project terms.'
  },
  {
    title: 'Limitation of liability',
    text: 'Yoonow Technologies is not responsible for losses caused by incorrect client information, third-party service failures, expired licences, unavailable hardware, internet outages, data shared insecurely by the client, or work outside the agreed scope.'
  }
];

function renderSteps() {
  return termSteps.map(([number, title, text]) => `
    <article class="terms-step-card glass reveal">
      <span>${number}</span>
      <h2>${title}</h2>
      <p>${text}</p>
    </article>
  `).join('');
}

function renderTermCards() {
  return termCards.map((card, index) => `
    <article class="terms-clause-card glass reveal">
      <div class="terms-clause-top">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <h2>${card.title}</h2>
      </div>
      <p>${card.text}</p>
    </article>
  `).join('');
}

function termsPage() {
  return renderPage({
    title: `Terms & Conditions | ${site.name}`,
    description: `${site.name} terms for IT support, quotations, websites, software projects, CCTV, networking, licensing support, and service communication.`,
    path: '/terms',
    body: `
      <section class="terms-pro-hero section-tight">
        <div class="launch-wide-grid terms-hero-wrap glass reveal">
          <div>
            <span class="section-label">Terms & Conditions</span>
            <h1>Clear working terms for enquiries, projects, support, and delivery.</h1>
            <p>These terms explain the basic conditions for service requests, quotations, project work, maintenance support, third-party tools, communication, and handover with Yoonow Technologies.</p>
          </div>
          <aside class="terms-update-card">
            <span>Last updated</span>
            <strong>09 July 2026</strong>
            <p>Location: Nagercoil</p>
          </aside>
        </div>
      </section>

      <section class="section-tight terms-process-section">
        <div class="launch-wide-grid">
          <div class="terms-section-head reveal">
            <span class="section-label">Working Process</span>
            <h2>From enquiry to delivery.</h2>
            <p>Every service or project starts with clear requirement review so pricing, timeline, and support expectations are understood before work begins.</p>
          </div>
          <div class="terms-step-grid">
            ${renderSteps()}
          </div>
        </div>
      </section>

      <section class="section-tight terms-clause-section">
        <div class="launch-wide-grid terms-clause-grid">
          ${renderTermCards()}
        </div>
      </section>

      <section class="section-tight">
        <div class="launch-wide-grid terms-contact-band glass reveal">
          <div>
            <span class="section-label">Before Starting</span>
            <h2>Confirm scope, payment, timeline, and handover details clearly.</h2>
            <p>For service or terms-related questions, contact Yoonow Technologies before confirming the work.</p>
          </div>
          <div class="terms-contact-actions">
            <a class="btn btn-primary" href="/quote">Request Quote</a>
            <a class="btn btn-ghost" href="mailto:${site.email}">${site.email}</a>
          </div>
        </div>
      </section>
    `,
  });
}

module.exports = { termsPage };
