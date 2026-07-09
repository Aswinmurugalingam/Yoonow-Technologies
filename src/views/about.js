const { renderPage } = require('./layout');
const { icon } = require('./icons');
const { video } = require('../data/siteData');

const aboutVideo = {
  src: '/assets/video/about-software-development.mp4',
  poster: video.poster,
};

const aboutHighlights = [
  {
    icon: 'monitor',
    title: 'Office IT Support',
    text: 'Workstations, laptops, printers, user accounts, email, and daily technical support handled with clear documentation.',
  },
  {
    icon: 'network',
    title: 'Network & Security',
    text: 'Routers, switches, Wi-Fi, firewall basics, CCTV, access points, and backup planning arranged for business use.',
  },
  {
    icon: 'code',
    title: 'Web & Software',
    text: 'Websites, forms, dashboards, mobile apps, and custom workflow tools planned around real business requirements.',
  },
  {
    icon: 'shield',
    title: 'AMC Readiness',
    text: 'Support scope, device lists, recurring issues, and improvement plans documented for predictable long-term service.',
  },
];

const approachSteps = [
  {
    number: '01',
    title: 'Understand the setup',
    text: 'We first review the office, users, devices, network, risks, and daily support pain points.',
  },
  {
    number: '02',
    title: 'Document the environment',
    text: 'Every important device, account, backup, software tool, and support scope is listed clearly.',
  },
  {
    number: '03',
    title: 'Fix and improve practically',
    text: 'We suggest only useful improvements that match budget, urgency, and business priority.',
  },
  {
    number: '04',
    title: 'Support after handover',
    text: 'After installation or repair, we continue with AMC support, monitoring, and future upgrades.',
  },
];

function renderAboutHighlights() {
  return aboutHighlights.map((item, index) => `
    <article class="about-capability-card glass reveal" style="transition-delay:${index * 70}ms;">
      <div class="about-capability-icon">${icon(item.icon)}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
    </article>`).join('');
}

function renderApproachSteps() {
  return approachSteps.map((step, index) => `
    <article class="about-approach-step process-sequence-card glass" data-sequence-card style="--i:${index}; --step-delay:${index * 170}ms;">
      <span>${step.number}</span>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    </article>`).join('');
}

function renderAboutVideoPoints() {
  const points = [
    { icon: 'code', title: 'Website & web app planning', text: 'Landing pages, forms, dashboards, and customer-facing web flows are mapped clearly.' },
    { icon: 'phone', title: 'Mobile app workflow', text: 'App screens, user actions, notifications, and admin-side requirements are structured.' },
    { icon: 'server', title: 'Hosting & deployment setup', text: 'Domain, hosting, database, email, backup, and launch basics are prepared together.' },
    { icon: 'shield', title: 'Secure support after launch', text: 'Updates, improvements, access control, and issue tracking stay documented.' },
  ];

  return points.map((point) => `
    <div class="about-video-point">
      <span>${icon(point.icon)}</span>
      <div>
        <strong>${point.title}</strong>
        <small>${point.text}</small>
      </div>
    </div>`).join('');
}

function aboutPage() {
  return renderPage({
    title: 'About Yoonow Technologies | IT Support & Software Partner',
    description:
      'Yoonow Technologies is a professional IT support, networking, CCTV, and software development partner helping offices build reliable, secure, and documented technology systems.',
    path: '/about',
    body: `
      <section class="page-hero about-hero section-tight">
        <div class="page-grid narrow">
          <span class="section-label">About Yoonow</span>
          <h1>One accountable technology partner for office IT, security, websites, and software.</h1>
          <p>Yoonow Technologies is built to support businesses that need practical technical help without vendor confusion. We handle computers, networks, CCTV, printers, cloud tools, websites, mobile apps, and custom software with a documented support approach.</p>
        </div>
      </section>

      <section class="section-tight about-story-section">
        <div class="page-grid about-story-grid">
          <div class="about-story-copy glass reveal">
            <span class="section-label about-label-tight">Our Approach</span>
            <h2>We combine hands-on technical service with clear business documentation.</h2>
            <p class="body-copy">A good IT partner should not only repair issues. The full environment should be understood, recorded, secured, and improved step by step. That is why Yoonow focuses on practical support, clean setup, transparent quotation, and long-term maintainability.</p>
            <div class="about-focus-list">
              <span>${icon('check')} Clear communication without confusing technical language</span>
              <span>${icon('check')} Practical recommendations based on real usage and budget</span>
              <span>${icon('check')} Setup documentation for devices, network, CCTV, and software</span>
              <span>${icon('check')} Support planning for AMC, upgrades, and future growth</span>
            </div>
            <div class="hero-actions about-actions">
              <a href="/quote" class="btn btn-primary">Request Quote ${icon('arrow')}</a>
              <a href="/services" class="btn btn-secondary">View Services</a>
            </div>
          </div>

          <figure class="video-panel about-video-card glass reveal" data-tilt>
            <video class="clean-video" autoplay muted loop playsinline preload="metadata" poster="${aboutVideo.poster}">
              <source src="${aboutVideo.src}" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            <figcaption>
              <strong>See how Yoonow builds digital systems for business.</strong>
              <span>Add your software, app, and web development video here. The content below explains the value of the video and keeps the card balanced.</span>
            </figcaption>
            <div class="about-video-points">
              ${renderAboutVideoPoints()}
            </div>
          </figure>
        </div>
      </section>

      <section class="section-tight about-capabilities-section">
        <div class="page-grid">
          <div class="section-head centered reveal">
            <span class="section-label">What We Cover</span>
            <h2>Complete technology support for a modern business workspace.</h2>
            <p>Whether your company is starting now or already operating, Yoonow can help organize your IT foundation and keep every part supportable.</p>
          </div>
          <div class="about-capability-grid">
            ${renderAboutHighlights()}
          </div>
        </div>
      </section>

      <section class="section-tight about-approach-section">
        <div class="page-grid">
          <div class="section-head centered reveal">
            <span class="section-label">How We Think</span>
            <h2>Every project should end with a cleaner, safer, and easier-to-support setup.</h2>
            <p>Our work is planned around business continuity, security, documentation, and clear ownership after handover.</p>
          </div>
          <div class="about-approach-grid process-sequence" data-process-sequence>
            ${renderApproachSteps()}
          </div>
        </div>
      </section>

      <section class="section-tight">
        <div class="page-grid about-cta-band cta-band glass reveal">
          <span class="section-label">Ready To Plan Your Setup?</span>
          <h2>Need a reliable IT support and software partner?</h2>
          <p>Tell us about your current office, devices, network, security, website, or software requirement. We will suggest a clear support or project scope that fits your business stage.</p>
          <a href="/quote" class="btn btn-primary">Request Quote ${icon('arrow')}</a>
        </div>
      </section>
    `,
  });
}

module.exports = { aboutPage };
