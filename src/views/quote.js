const { renderPage } = require('./layout');
const { icon } = require('./icons');
const { site } = require('../data/siteData');

const quoteTypes = [
  { icon: 'monitor', title: 'Office IT Setup', text: 'PCs, laptops, printers, users, email, backup, and daily support scope.' },
  { icon: 'network', title: 'Network & Wi‑Fi', text: 'Routers, switches, cabling, firewall, Wi‑Fi coverage, and internet sharing.' },
  { icon: 'camera', title: 'CCTV & Security', text: 'Camera planning, DVR/NVR, remote viewing, storage, and maintenance.' },
  { icon: 'code', title: 'Website / App / Software', text: 'Websites, Android apps, dashboards, billing tools, and workflow systems.' },
  { icon: 'shield', title: 'Software Licensing', text: 'Microsoft 365, Windows, antivirus, design software, cloud tools, renewals, and licence documentation.' },
  { icon: 'bolt', title: 'Business Launch Setup', text: 'Registration checklist guidance, business email, website, office IT, CCTV, backup, and day-one setup plan.' },
  { icon: 'printer', title: 'Printer & Scanner Support', text: 'Printer setup, sharing, scanning, drivers, basic troubleshooting, and office print workflow support.' },
  { icon: 'cloud', title: 'Cloud / Email Setup', text: 'Business email, domain mail, Microsoft 365, Google Workspace, cloud storage, and backup planning.' },
];

const quoteSteps = [
  { value: '01', title: 'Requirement Review', text: 'We check your message, service type, urgency, location, and expected outcome.' },
  { value: '02', title: 'Scope Confirmation', text: 'We clarify devices, pages, cameras, software features, or AMC coverage before pricing.' },
  { value: '03', title: 'Clear Proposal', text: 'You receive a practical quotation with included work, optional items, and next steps.' },
  { value: '04', title: 'Delivery Plan', text: 'Once approved, we schedule setup, documentation, handover, and support follow-up.' },
];

function renderQuoteTypes() {
  return quoteTypes.map((item) => `
    <article class="mini-service-pill glass reveal">
      <span>${icon(item.icon)}</span>
      <div>
        <strong>${item.title}</strong>
        <p>${item.text}</p>
      </div>
    </article>`).join('');
}

function renderQuoteSteps() {
  return quoteSteps.map((step, index) => `
    <article class="process-step process-sequence-card quote-flow-card glass" data-sequence-card style="--i:${index}; --step-delay:${index * 140}ms;">
      <span>${step.value}</span>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    </article>`).join('');
}

function quotePage() {
  return renderPage({
    title: `Request a Quote | ${site.name}`,
    description:
      `${site.name} prepares clear quotations for IT support, AMC coverage, CCTV, networking, websites, Android apps, and custom software projects.`,
    path: '/quote',
    body: `
      <section class="page-hero section-tight quote-hero">
        <div class="page-grid narrow">
          <span class="section-label">Get Quote</span>
          <h1>Request a clear technology quotation for your business.</h1>
          <p>Share your requirement once. We will help convert it into a practical scope for IT support, office setup, CCTV, networking, AMC, website, Android app, software licensing, business launch setup, or custom software work.</p>
        </div>
      </section>

      <section class="section-tight quote-main-section">
        <div class="page-grid quote-main-grid">
          <div class="quote-info-panel glass reveal">
            <span class="section-label">Before You Submit</span>
            <h2>What helps us price your work correctly?</h2>
            <p>Accurate details help us avoid wrong estimates and prepare a clean proposal with the right service scope, timeline, and support model.</p>

            <div class="quote-info-list">
              <div><strong>Devices / Users</strong><span>PCs, laptops, printers, users, servers, or cameras involved.</span></div>
              <div><strong>Project Type</strong><span>New setup, repair, AMC, website, app, software, or upgrade.</span></div>
              <div><strong>Location / Urgency</strong><span>Office location, preferred visit time, and how urgent the issue is.</span></div>
              <div><strong>Expected Result</strong><span>What should be working after the service or project is completed.</span></div>
            </div>

            <div class="quote-fast-box">
              <span>${icon('bolt')}</span>
              <div>
                <strong>Need urgent support?</strong>
                <p>Use WhatsApp for quick response, then submit this form for proper quotation and record.</p>
              </div>
            </div>
          </div>

          <form class="lead-form quote-form-panel glass reveal" data-lead-form enctype="multipart/form-data">
            <input type="hidden" name="formType" value="Quote Request" />
            <input type="text" name="website" tabindex="-1" autocomplete="off" class="form-honeypot" aria-hidden="true" />
            <div class="form-heading-row">
              <div>
                <span class="section-label">Requirement Form</span>
                <h2>Tell us what you need.</h2>
              </div>
              <span class="form-badge">Fast Scope Review</span>
            </div>

            <div class="form-two-col">
              <label>Company / Name<input type="text" name="company" placeholder="Company or your name" required /></label>
              <label>Phone / WhatsApp<input type="tel" name="phone" placeholder="+91 86105 07446" required /></label>
            </div>
            <div class="form-two-col">
              <label>Email<input type="email" name="email" placeholder="Email address" required /></label>
              <label>Location<input type="text" name="location" placeholder="Nagercoil / Dubai / Remote / Other" /></label>
            </div>
            <label>Service Type<select name="service" required><option value="">Select service type</option><option>Managed IT / AMC</option><option>Office IT Setup</option><option>Computer / Laptop Service</option><option>Networking / Wi‑Fi</option><option>Cybersecurity / Firewall</option><option>CCTV Installation</option><option>Server / NAS Support</option><option>Cloud / Microsoft 365 / Google Workspace</option><option>Printer / Scanner Support</option><option>Website Development</option><option>Android Application Development</option><option>Custom Software Development</option><option>Software Licensing Support</option><option>Business Launch / Full Office Setup</option></select></label>
            <div class="form-two-col">
              <label>Budget Range<select name="budget"><option>Not Decided Yet</option><option>Small Fix / Support</option><option>Basic Website / Setup</option><option>Medium Business Project</option><option>Custom Software / Full Setup</option></select></label>
              <label>Timeline / Urgency<select name="urgency"><option>Normal Enquiry</option><option>Need Within This Week</option><option>Need This Month</option><option>Urgent IT Support</option></select></label>
            </div>
            <label class="file-upload-field">Attach Files
              <input type="file" name="attachments" multiple />
              <span class="file-upload-note">Optional: images, videos, PDF, documents, ZIP files or any supporting file.</span>
            </label>
            <label>Requirement Details<textarea name="message" rows="4" class="requirement-textarea" placeholder="Example: 8 computers, 2 printers, Wi‑Fi setup, CCTV remote viewing, website or app requirement..." required></textarea></label>
            <button class="btn btn-primary" type="submit">Submit Requirement ${icon('arrow')}</button>
            <p class="form-note" aria-live="polite"></p>
          </form>
        </div>
      </section>

      <section class="section-tight">
        <div class="page-grid">
          <div class="section-head center-head reveal">
            <span class="section-label">Quote Categories</span>
            <h2>Common requests we can scope for you.</h2>
            <p>Choose any service type in the form. We can prepare a one-time quote, phased project plan, or AMC proposal depending on your requirement.</p>
          </div>
          <div class="mini-service-grid quote-service-grid">
            ${renderQuoteTypes()}
          </div>
        </div>
      </section>

      <section class="section-tight">
        <div class="page-grid">
          <div class="section-head center-head reveal">
            <span class="section-label">After Submission</span>
            <h2>How your quotation is prepared.</h2>
            <p>We keep the process clear so you know what is included, what is optional, and how the work will be delivered.</p>
          </div>
          <div class="process-track quote-process-grid process-sequence" data-process-sequence>
            ${renderQuoteSteps()}
          </div>
        </div>
      </section>
    `,
  });
}

module.exports = { quotePage };
