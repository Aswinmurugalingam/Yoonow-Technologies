const { renderPage } = require('./layout');
const { icon } = require('./icons');
const { sectionIntro, renderDevelopmentPackagesSection } = require('./home');
const { services, plans } = require('../data/siteData');


function servicesPage() {
  return renderPage({
    title: 'Technology Services | Website Development, IT Support & CCTV',
    description:
      "Yoonow Technologies is a technology service provider offering website design, website development, custom software development, billing software, IT support, network setup, CCTV installation, NAS setup, computer support services, and domain email setup.",
    path: '/services',
    body: `
      <section class="page-hero section-tight">
        <div class="page-grid narrow">
          <span class="section-label">Services</span>
          <h1>IT, security, and software services designed for business continuity.</h1>
          <p>Choose a single service call, project implementation, or ongoing AMC coverage. We support office infrastructure, user issues, security systems, printers, websites, mobile apps, and custom software requirements.</p>
        </div>
      </section>

      <section class="section-tight">
        <div class="page-grid service-grid service-grid-full">
          ${services.map((service) => `
            <article class="service-card glass reveal" id="${service.id}" data-tilt>
              <span class="card-number">${service.number}</span>
              <div class="icon-wrap">${icon(service.icon)}</div>
              <h3>${service.title}</h3>
              <p>${service.text}</p>
              <a href="/quote" class="service-link">Request this service ${icon('arrow')}</a>
            </article>`).join('')}
        </div>
      </section>
      <section class="section-tight" id="service-amc-plans">
        <div class="page-grid">
          ${sectionIntro({
            label: 'AMC Plans',
            title: 'Choose planned support based on your office size and coverage needs.',
            text: 'AMC coverage is useful when you want regular checks, faster response, documented devices, and one support partner for computers, networks, CCTV, printers, backups, and user issues.',
            centered: true,
          })}
          <div class="plan-grid">
            ${plans.map((plan) => `
              <article class="plan-card glass reveal ${plan.popular ? 'popular' : ''}">
                ${plan.popular ? '<span class="popular-tag">Most chosen</span>' : ''}
                <h3>${plan.title}</h3>
                <p>${plan.desc}</p>
                <strong>Custom quote</strong>
                <ul>${plan.features.map((feature) => `<li>${icon('check')}${feature}</li>`).join('')}</ul>
                <a href="/quote" class="btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}">Get a Quote</a>
              </article>`).join('')}
          </div>
        </div>
      </section>

      ${renderDevelopmentPackagesSection({ id: 'service-development-packages', extraClass: 'services-dev-packages' })}
      <section class="section-tight" id="field-work">
        <div class="page-grid">
          ${sectionIntro({
            label: 'On-Site Delivery',
            title: 'Real technicians, real deployments, documented results.',
            text: 'From a single laptop repair to a full server room, our field team handles the hands-on work behind every service on this page.',
            centered: true,
          })}
          <div class="field-gallery">
            <figure class="field-card reveal">
              <img src="/assets/images/laptop-support.jpg" alt="Technician servicing an office laptop" loading="lazy" />
              <figcaption class="field-caption"><strong>Computer Service</strong><span>Diagnostics & repair</span></figcaption>
            </figure>
            <figure class="field-card reveal">
              <img src="/assets/images/server-network.jpg" alt="Server and network rack maintenance" loading="lazy" />
              <figcaption class="field-caption"><strong>Server & Network</strong><span>Infrastructure setup</span></figcaption>
            </figure>
            <figure class="field-card reveal">
              <img src="/assets/images/security-camera.jpg" alt="CCTV security camera installation" loading="lazy" />
              <figcaption class="field-caption"><strong>CCTV & Security</strong><span>Camera installation</span></figcaption>
            </figure>
            <figure class="field-card reveal">
              <img src="/assets/images/mobile-app.jpg" alt="Mobile app development on a smartphone" loading="lazy" />
              <figcaption class="field-caption"><strong>Web & Mobile</strong><span>App development</span></figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section class="section-tight" id="amc"><div class="page-grid cta-band glass reveal"><span class="section-label">AMC Support</span><h2>Want planned maintenance instead of only emergency support?</h2><p>AMC support gives your business preventive maintenance, priority response, documented systems, and regular checks for computers, networks, CCTV, printers, backups, and user support.</p><a href="/quote" class="btn btn-primary">Plan AMC Coverage</a></div></section>
    `,
  });
}

module.exports = { servicesPage };
