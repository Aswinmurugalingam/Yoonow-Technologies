const { renderPage } = require('./layout');
const { site } = require('../data/siteData');

const faqStats = [
  ['12+', 'Project categories supported'],
  ['24 hrs', 'Typical enquiry review window'],
  ['Nagercoil', 'Business location'],
  ['Files', 'Screenshots, PDFs, ZIPs accepted']
];

const faqCategories = [
  {
    icon: '🛠️',
    title: 'IT Support & AMC',
    text: 'Computer service, printer setup, Wi-Fi, networking, firewall, NAS, CCTV, maintenance planning, and business support documentation.'
  },
  {
    icon: '💻',
    title: 'Websites & Software',
    text: 'Business websites, landing pages, dashboards, billing systems, attendance portals, admin panels, and workflow automation tools.'
  },
  {
    icon: '🛡️',
    title: 'Network & Security',
    text: 'FortiGate firewall setup, QNAP NAS backup, CCTV planning, secure access, office network cleanup, and handover support.'
  }
];

const faqs = [
  {
    group: 'Service Support',
    tag: 'IT / AMC',
    items: [
      ['What services does Yoonow Technologies provide?', 'We support computer and laptop service, printer setup, networking, Wi-Fi, CCTV, NAS backup, firewall setup, software licensing, business websites, dashboards, and custom software projects.'],
      ['Do you provide AMC support?', 'Yes. AMC scope can be planned based on device count, printer count, network devices, CCTV cameras, users, visit requirements, response method, and support priority.'],
      ['What details should I share for IT support?', 'Share device count, issue photos or screenshots, error messages, model numbers, urgency level, and your Nagercoil location details so the issue can be reviewed clearly.']
    ]
  },
  {
    group: 'Website & Software Projects',
    tag: 'Development',
    items: [
      ['Can you build a business website?', 'Yes. We build responsive websites for service businesses, academies, shops, personal portfolios, enquiry pages, landing pages, and project showcase websites.'],
      ['Can you develop custom business software?', 'Yes. We can plan dashboards, billing systems, attendance systems, quotation and invoice workflows, GPS/EXIF tools, admin panels, and other workflow-based software.'],
      ['What is needed for a project quote?', 'Share your business type, required pages or features, sample references, logo, content, photos, expected timeline, budget range if available, and any existing files.']
    ]
  },
  {
    group: 'CCTV, Network & Backup',
    tag: 'Infrastructure',
    items: [
      ['Can you help with CCTV installation planning?', 'Yes. We can scope camera count, DVR/NVR storage, viewing requirement, cabling, power points, network connection, and maintenance requirements.'],
      ['Do you support firewall and NAS setup?', 'Yes. We can help with FortiGate firewall, QNAP NAS, backup planning, shared folders, user access, network sharing, and handover documentation.'],
      ['Can you inspect an existing setup?', 'Yes. Share photos, device model numbers, the current issue, network layout if available, and the output you need after the correction.']
    ]
  },
  {
    group: 'Quotation & Communication',
    tag: 'Enquiry',
    items: [
      ['How do I contact Yoonow Technologies?', `You can call or WhatsApp ${site.phone}, email ${site.email}, or submit the Contact / Get Quote form on this website.`],
      ['Can I attach files in the enquiry form?', 'Yes. You can attach small images, PDFs, documents, screenshots, or ZIP files. For very large videos, share a Drive or OneDrive link inside the requirement box.'],
      ['Where is Yoonow Technologies located?', 'Yoonow Technologies is based in Nagercoil.']
    ]
  }
];

function renderStats() {
  return faqStats.map(([value, label]) => `
    <div class="faq-stat-card">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `).join('');
}

function renderCategories() {
  return faqCategories.map((category) => `
    <article class="faq-topic-card glass reveal">
      <span class="faq-topic-icon">${category.icon}</span>
      <h2>${category.title}</h2>
      <p>${category.text}</p>
    </article>
  `).join('');
}

function renderFaqGroups() {
  return faqs.map((section, groupIndex) => `
    <section class="faq-board glass reveal">
      <div class="faq-board-head">
        <div>
          <span class="section-label">${section.tag}</span>
          <h2>${section.group}</h2>
        </div>
        <span class="faq-count">${section.items.length} answers</span>
      </div>
      <div class="faq-board-list">
        ${section.items.map(([question, answer], index) => `
          <details class="faq-pro-item" ${groupIndex === 0 && index === 0 ? 'open' : ''}>
            <summary>${question}</summary>
            <p>${answer}</p>
          </details>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function faqPage() {
  return renderPage({
    title: `FAQ | ${site.name}`,
    description: `Frequently asked questions about ${site.name}, software company in Nagercoil, website development, IT support, CCTV installation, network setup, NAS setup, billing software, and custom software projects.`,
    path: '/faq',
    body: `
      <section class="faq-pro-hero section-tight">
        <div class="launch-wide-grid">
          <div class="faq-hero-card glass reveal">
            <span class="section-label">FAQ Center</span>
            <h1>Answers before you start a project with Yoonow Technologies.</h1>
            <p>Find clear information about service support, AMC planning, websites, software projects, CCTV, networking, quotation requirements, file attachments, and communication.</p>
            <div class="faq-hero-actions">
              <a class="btn btn-primary" href="/quote">Request Quote</a>
              <a class="btn btn-ghost" href="/contact">Contact Us</a>
            </div>
          </div>
          <aside class="faq-stats-panel glass reveal">
            ${renderStats()}
          </aside>
        </div>
      </section>

      <section class="section-tight faq-topic-section">
        <div class="launch-wide-grid faq-topic-grid">
          ${renderCategories()}
        </div>
      </section>

      <section class="section-tight faq-answer-section">
        <div class="launch-wide-grid faq-answer-grid">
          ${renderFaqGroups()}
        </div>
      </section>

      <section class="section-tight">
        <div class="launch-wide-grid">
          <div class="faq-action-band glass reveal">
            <div>
              <span class="section-label">Still need clarity?</span>
              <h2>Send your requirement with screenshots or files.</h2>
              <p>Attach small images, documents, PDFs, or ZIP files so your requirement can be reviewed correctly before quotation.</p>
            </div>
            <a class="btn btn-primary" href="/quote">Send Requirement</a>
          </div>
        </div>
      </section>
    `,
  });
}

module.exports = { faqPage };
