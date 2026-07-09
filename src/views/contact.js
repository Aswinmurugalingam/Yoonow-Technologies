const { renderPage } = require('./layout');
const { icon } = require('./icons');
const { site } = require('../data/siteData');

const contactChannels = [
  { icon: 'call', title: 'Phone / WhatsApp', text: site.phone, link: site.whatsapp, action: 'Start WhatsApp' },
  { icon: 'mail', title: 'Email Enquiry', text: site.email, link: `mailto:${site.email}`, action: 'Send Email' },
  { icon: 'location', title: 'Service Coverage', text: site.location, link: '/quote', action: 'Request Scope' },
];

const supportItems = [
  { value: '01', title: 'IT Support', text: 'Computers, laptops, printers, users, email, and daily support issues.' },
  { value: '02', title: 'Network & Security', text: 'Wi‑Fi, switches, firewall, CCTV, access, backup, and monitoring.' },
  { value: '03', title: 'Web, Apps & Licensing', text: 'Websites, Android apps, dashboards, automation, software licences, and renewals.' },
  { value: '04', title: 'Launch & AMC Planning', text: 'Business launch checklist, device list, response scope, preventive checks, and support schedule.' },
];

function renderChannels() {
  return contactChannels.map((channel) => `
    <article class="contact-channel-card glass reveal">
      <span class="channel-icon">${icon(channel.icon)}</span>
      <div>
        <h3>${channel.title}</h3>
        <p>${channel.text}</p>
      </div>
      <a href="${channel.link}" class="btn btn-ghost btn-small">${channel.action}</a>
    </article>`).join('');
}

function renderSupportItems() {
  return supportItems.map((item, index) => `
    <article class="process-step process-sequence-card contact-scope-card glass" data-sequence-card style="--i:${index}; --step-delay:${index * 140}ms;">
      <span>${item.value}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>`).join('');
}

function contactPage() {
  return renderPage({
    title: `Contact ${site.name} | IT Support Enquiries`,
    description:
      `Contact ${site.name} for IT support, AMC maintenance, CCTV, networking, cybersecurity, website development, Android apps, and custom software enquiries.`,
    path: '/contact',
    body: `
      <section class="page-hero section-tight contact-hero">
        <div class="page-grid narrow">
          <span class="section-label">Contact</span>
          <h1>Talk to us about your office technology requirement.</h1>
          <p>Send your message for IT support, AMC, CCTV, networking, software licensing, business launch setup, website, Android app, or software development. We will guide you with the correct scope and next step.</p>
        </div>
      </section>

      <section class="section-tight contact-main-section">
        <div class="page-grid contact-main-grid">
          <div class="contact-content-panel glass reveal">
            <span class="section-label">Reach Yoonow</span>
            <h2>One contact for support, setup, and project enquiries.</h2>
            <p>Whether you are starting a new office, fixing an existing setup, or planning a website/app project, share the details and we will help organize the requirement professionally.</p>

            <div class="contact-highlight-strip">
              <div><strong>Service Area</strong><span>All Over India and remote global support.</span></div>
              <div><strong>Best For</strong><span>Urgent IT support, AMC, websites, apps, CCTV, networking, and software.</span></div>
              <div><strong>Next Step</strong><span>Share issue details, photos, screenshots, file samples, or project notes.</span></div>
            </div>

            <div class="contact-channel-list">
              ${renderChannels()}
            </div>

            <div class="contact-response-box">
              <span>${icon('headset')}</span>
              <div>
                <strong>Quick support path</strong>
                <p>For urgent issues, message on WhatsApp first. For proper tracking, submit the form with requirement details and attachments.</p>
              </div>
            </div>
          </div>

          <form class="lead-form contact-form-panel glass reveal" data-lead-form method="post" action="/api/leads" enctype="multipart/form-data">
            <input type="hidden" name="formType" value="Contact Enquiry" />
            <input type="text" name="website" tabindex="-1" autocomplete="off" class="form-honeypot" aria-hidden="true" />
            <div class="form-heading-row">
              <div>
                <span class="section-label">Message Form</span>
                <h2>Send your enquiry.</h2>
              </div>
              <span class="form-badge">Response Oriented</span>
            </div>

            <div class="form-two-col">
              <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
              <label>Phone / WhatsApp<input type="tel" name="phone" placeholder="+91 86105 07446" required /></label>
            </div>
            <div class="form-two-col">
              <label>Email<input type="email" name="email" placeholder="Email address" required /></label>
              <label>Company / Location<input type="text" name="company" placeholder="Company name or location" /></label>
            </div>
            <div class="form-two-col">
              <label>Service Required<select name="service" required><option value="">Select service</option><option>Urgent IT Support</option><option>Managed IT / AMC</option><option>Computer / Laptop Service</option><option>Network / Wi‑Fi / Firewall</option><option>CCTV / NAS / Backup</option><option>Website Development</option><option>Mobile App Development</option><option>Custom Software Development</option><option>Software Licensing</option><option>Other Requirement</option></select></label>
              <label>Urgency<select name="urgency"><option>Normal Enquiry</option><option>Need Within This Week</option><option>Urgent Support</option><option>Emergency Office Issue</option></select></label>
            </div>
            <label class="file-upload-field custom-file-upload">Attach Files
              <span class="file-upload-control">
                <span class="file-upload-action"><span class="file-upload-3d-icon" aria-hidden="true"></span><span>Choose files</span></span>
                <span class="file-upload-status" data-file-upload-status>No files selected</span>
              </span>
              <input type="file" name="attachments" multiple />
              <span class="file-upload-note">Optional: images, PDF, documents or small supporting files. For large videos, paste a Drive/OneDrive link in the requirement box.</span>
            </label>
            <label>Requirement<textarea name="message" rows="4" class="requirement-textarea" placeholder="Tell us about the issue, setup, website/app idea, software licensing, business launch setup, or support requirement..." required></textarea></label>
            <button class="btn btn-primary" type="submit">Send Message ${icon('arrow')}</button>
            <p class="form-note" aria-live="polite"></p>
          </form>
        </div>
      </section>

      <section class="section-tight">
        <div class="page-grid">
          <div class="section-head center-head reveal">
            <span class="section-label">Support Scope</span>
            <h2>What you can contact us for.</h2>
            <p>Use the contact form for a quick enquiry or the quote form when you want a structured price and scope.</p>
          </div>
          <div class="process-track contact-scope-grid process-sequence" data-process-sequence>
            ${renderSupportItems()}
          </div>
        </div>
      </section>

      <section class="section-tight">
        <div class="page-grid contact-ready-band glass reveal">
          <div>
            <span class="section-label">Ready To Start</span>
            <h2>Need a quotation instead of a general message?</h2>
            <p>For pricing, include device count, service type, number of pages/screens, cameras, licence needs, office setup scope, location, and expected timeline.</p>
          </div>
          <a class="btn btn-primary" href="/quote">Request Quote ${icon('arrow')}</a>
        </div>
      </section>
    `,
  });
}

module.exports = { contactPage };
