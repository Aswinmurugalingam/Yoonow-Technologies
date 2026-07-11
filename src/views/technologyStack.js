const { renderPage } = require('./layout');
const { icon } = require('./icons');
const { technologyStack } = require('../data/siteData');

function technologyStackPage() {
  return renderPage({
    title: 'Technology Stack | Yoonow Technologies',
    description: 'Explore the frontend, backend, infrastructure, deployment, and security stack used by Yoonow Technologies for websites, software systems, IT support, networks, NAS, CCTV, and business workflows.',
    path: '/technology-stack',
    image: '/assets/images/hero-office.webp',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Yoonow Technologies Technology Stack',
      description: 'A professional overview of the frontend, backend, infrastructure, deployment, analytics, and security layers used by Yoonow Technologies.',
      author: {
        '@type': 'Organization',
        name: 'Yoonow Technologies'
      }
    },
    body: `
      <section class="page-hero section-tight tech-stack-hero">
        <div class="page-grid narrow">
          <span class="section-label">Technology Stack</span>
          <h1>Advanced technical planning for websites, software, IT infrastructure, and secure business systems.</h1>
          <p>Yoonow Technologies plans every project as a connected technology ecosystem. We combine UI design, backend workflow, deployment, analytics, infrastructure readiness, and practical security so clients receive a professional solution, not just a simple web page.</p>
          <div class="tech-stack-hero-metrics">
            <span><strong>4</strong><small>Core Layers</small></span>
            <span><strong>40+</strong><small>Stack Capabilities</small></span>
            <span><strong>360°</strong><small>Build + Launch + Support</small></span>
          </div>
          <div class="hero-actions center-actions">
            <a href="/quote" class="btn btn-primary">Plan a Project ${icon('arrow')}</a>
            <a href="/projects" class="btn btn-secondary">View Projects</a>
          </div>
        </div>
      </section>

      <section class="section-tight tech-stack-section">
        <div class="page-grid tech-stack-grid-3d">
          ${technologyStack.map((group, index) => `
            <article class="tech-stack-card-3d glass reveal" data-tilt style="--stack-delay:${index * 120}ms">
              <div class="tech-stack-card-glow" aria-hidden="true"></div>
              <div class="tech-stack-card-top">
                <div class="tech-stack-heading-row">
                  <span class="tech-stack-icon">${icon(group.icon)}</span>
                  <span class="tech-stack-category-tag">${group.shortCategory || group.category}</span>
                </div>
                <span class="tech-stack-number">${String(index + 1).padStart(2, '0')}</span>
              </div>
              <h2>${group.category}</h2>
              <p>${group.summary}</p>
              <div class="tech-stack-chip-grid">
                ${group.tools.map((tool) => `<span>${tool}</span>`).join('')}
              </div>
              <div class="tech-stack-capability-panel">
                <h3>What this layer covers</h3>
                <ul>
                  ${group.capabilities.map((item) => `<li>${item}</li>`).join('')}
                </ul>
              </div>
              <div class="tech-stack-output">
                <strong>Client outcome</strong>
                <p>${group.output}</p>
              </div>
            </article>`).join('')}
        </div>
      </section>

      <section class="section-tight tech-architecture-section">
        <div class="page-grid">
          <div class="tech-architecture-panel glass reveal">
            <div>
              <span class="section-label">Delivery Architecture</span>
              <h2>How we connect the stack into a real project.</h2>
              <p>Every project is planned from client requirement to launch and support. This helps avoid weak handovers, missing access details, poor SEO setup, broken forms, and unclear maintenance responsibilities.</p>
            </div>
            <div class="architecture-flow-grid">
              <div><b>01</b><strong>Requirement</strong><small>Business goal, pages/modules, users, lead flow, and support need.</small></div>
              <div><b>02</b><strong>Design + Build</strong><small>Responsive UI, backend logic, forms, dashboards, and integrations.</small></div>
              <div><b>03</b><strong>Deploy + Secure</strong><small>Domain, hosting, SSL, DNS, email, analytics, indexing, and basic security.</small></div>
              <div><b>04</b><strong>Handover + Maintain</strong><small>Documentation, renewal reminders, update path, backup plan, and support flow.</small></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-tight tech-proof-section">
        <div class="page-grid tech-proof-grid">
          <article class="tech-proof-card glass reveal">
            <span>${icon('code')}</span>
            <h3>For Websites</h3>
            <p>Landing pages, business websites, SEO structure, forms, social links, Google Analytics, Search Console, mobile responsiveness, and lead tracking.</p>
          </article>
          <article class="tech-proof-card glass reveal">
            <span>${icon('server')}</span>
            <h3>For Software</h3>
            <p>Dashboards, user roles, data flow, reports, document numbering, file uploads, notifications, admin panels, and future module planning.</p>
          </article>
          <article class="tech-proof-card glass reveal">
            <span>${icon('network')}</span>
            <h3>For IT Infrastructure</h3>
            <p>Routers, switches, Wi-Fi, firewall basics, NAS, CCTV, backup planning, system documentation, and support handover for daily operations.</p>
          </article>
        </div>
      </section>

      <section class="section-tight">
        <div class="page-grid">
          <div class="cta-band glass reveal tech-stack-cta">
            <span class="section-label">Project Ready</span>
            <h2>Need a website, software system, or IT setup built with a clear stack?</h2>
            <p>Share your requirement and we will suggest the right technical structure, deployment model, security points, maintenance plan, and support approach.</p>
            <div class="hero-actions center-actions">
              <a href="/quote" class="btn btn-primary">Request Quote ${icon('arrow')}</a>
              <a href="/contact" class="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    `,
  });
}

module.exports = { technologyStackPage };
