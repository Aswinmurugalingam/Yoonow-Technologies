const { renderPage } = require('./layout');
const { icon } = require('./icons');
const { site, technologies, technologyStack, testimonials, services, amcPillars, plans, developmentPackages, industries, stats, launchReadiness, video, promo } = require('../data/siteData');

const deliveryPoints = [
  {
    value: '01',
    title: 'Site-ready design',
    text: 'Every recommendation is planned around your office layout, users, devices, and future growth requirements.',
  },
  {
    value: '02',
    title: 'Clean implementation',
    text: 'We install, configure, test, document, and hand over solutions in a way that is practical for daily teams.',
  },
  {
    value: '03',
    title: 'Faster support flow',
    text: 'One team can handle infrastructure, security, and software coordination without vendor confusion.',
  },
  {
    value: '04',
    title: 'Scalable roadmap',
    text: 'Your environment stays ready for expansion, branch growth, cloud services, and new digital tools.',
  },
];

const homeStats = [
  { target: 100, suffix: '+', label: "Pc's Workstations Assembled" },
  { target: 50, suffix: '+', label: 'Network Systems Managed' },
  { target: 50, suffix: '+', label: 'Websites Designed' },
  { target: 20, suffix: '+', label: 'Custom Software Developed' },
];


function sectionIntro({ label, title, text, centered = true }) {
  return `
    <div class="section-head${centered ? ' centered' : ''}">
      <span class="section-label">${label}</span>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>`;
}

function techLogo(item) {
  const initial = item.name.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase() || 'IT';
  const simpleLogo = item.slug ? `https://cdn.simpleicons.org/${item.slug}` : '';
  const src = item.logoUrl || simpleLogo;
  const fallback = item.fallbackLogoUrl || (item.domain ? `https://www.google.com/s2/favicons?domain=${item.domain}&sz=128` : simpleLogo);
  return `<span class="tech-chip" data-initial="${initial}">
    <span class="logo-fallback">${initial}</span>
    <span class="tech-logo-wrap"><img src="${src}" data-fallback-src="${fallback}" data-simple-src="${simpleLogo}" alt="${item.name} logo" loading="eager" decoding="async" referrerpolicy="no-referrer" /></span>
    <b>${item.name}</b>
  </span>`;
}

function heroVisual() {
  return `
  <div
    class="hero-stage workstation-stage"
    data-hero-stage
    aria-hidden="true"
  >
      <div class="workstation-orbit orbit-one"></div>
      <div class="workstation-orbit orbit-two"></div>

      <svg
        class="workstation-svg"
        viewBox="0 0 680 560"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="3D IT workstation, server, and network dashboard"
      >
        <defs>
          <linearGradient id="wsTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#4b5f83"/>
            <stop offset="1" stop-color="#263653"/>
          </linearGradient>
          <linearGradient id="wsFace" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#18243a"/>
            <stop offset="1" stop-color="#0a101c"/>
          </linearGradient>
          <linearGradient id="wsSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#111b2c"/>
            <stop offset="1" stop-color="#060a13"/>
          </linearGradient>
          <linearGradient id="wsScreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#203150"/>
            <stop offset="1" stop-color="#07101d"/>
          </linearGradient>
          <radialGradient id="wsBlueGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stop-color="#3d8bff" stop-opacity="0.52"/>
            <stop offset="1" stop-color="#3d8bff" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="wsOrangeGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stop-color="#ff6b2c" stop-opacity="0.42"/>
            <stop offset="1" stop-color="#ff6b2c" stop-opacity="0"/>
          </radialGradient>
        </defs>

        <ellipse cx="310" cy="430" rx="205" ry="42" fill="url(#wsBlueGlow)"/>
        <ellipse cx="512" cy="432" rx="150" ry="34" fill="url(#wsOrangeGlow)"/>

        <g opacity="0.72">
          <path d="M452 72 L304 150" stroke="#6ba6ff" stroke-width="1.6" stroke-dasharray="4 7"/>
          <path d="M452 72 L548 115" stroke="#6ba6ff" stroke-width="1.6" stroke-dasharray="4 7"/>
          <path d="M452 72 L424 330" stroke="#ff8a52" stroke-width="1.25" stroke-dasharray="3 8"/>
        </g>
        <circle cx="452" cy="72" r="17" fill="url(#wsOrangeGlow)"/>
        <circle cx="452" cy="72" r="6" fill="#ff8a52"/>

        <g class="workstation-server">
          <path d="M482 118 L574 118 L602 101 L510 101 Z" fill="url(#wsTop)"/>
          <path d="M574 118 L574 382 L602 364 L602 101 Z" fill="url(#wsSide)"/>
          <rect x="482" y="118" width="92" height="264" rx="2" fill="url(#wsFace)"/>
          <g>
            <rect x="496" y="140" width="64" height="24" rx="4" fill="#101a2e" stroke="#263856"/>
            <circle cx="508" cy="152" r="3" fill="#6ba6ff"/>
            <rect x="496" y="176" width="64" height="24" rx="4" fill="#101a2e" stroke="#263856"/>
            <circle cx="508" cy="188" r="3" fill="#ff8a52"/>
            <rect x="496" y="212" width="64" height="24" rx="4" fill="#101a2e" stroke="#263856"/>
            <circle cx="508" cy="224" r="3" fill="#6ba6ff"/>
            <rect x="496" y="248" width="64" height="24" rx="4" fill="#101a2e" stroke="#263856"/>
            <circle cx="508" cy="260" r="3" fill="#6ba6ff"/>
            <rect x="496" y="284" width="64" height="24" rx="4" fill="#101a2e" stroke="#263856"/>
            <circle cx="508" cy="296" r="3" fill="#ff8a52"/>
            <rect x="496" y="320" width="64" height="24" rx="4" fill="#101a2e" stroke="#263856"/>
            <circle cx="508" cy="332" r="3" fill="#6ba6ff"/>
          </g>
        </g>

        <g class="workstation-monitor">
          <path d="M213 352 L358 352 L386 335 L241 335 Z" fill="url(#wsTop)"/>
          <rect x="213" y="352" width="145" height="11" fill="url(#wsFace)"/>
          <path d="M266 314 L307 314 L334 298 L293 298 Z" fill="url(#wsTop)"/>
          <rect x="266" y="314" width="41" height="26" fill="url(#wsFace)"/>
          <path d="M145 153 L395 153 L423 136 L173 136 Z" fill="url(#wsTop)"/>
          <path d="M395 153 L395 306 L423 288 L423 136 Z" fill="url(#wsSide)"/>
          <rect x="145" y="153" width="250" height="153" rx="6" fill="url(#wsScreen)" stroke="#2a3d60" stroke-width="1.5"/>
          <rect x="162" y="167" width="215" height="15" rx="4" fill="#1d2c4a"/>
          <circle cx="172" cy="174" r="2.7" fill="#ff8a52"/>
          <circle cx="181" cy="174" r="2.7" fill="#6ba6ff"/>
          <rect x="162" y="197" width="92" height="45" rx="6" fill="#101a2e" stroke="#263856"/>
          <rect x="171" y="222" width="8" height="14" rx="2" fill="#6ba6ff"/>
          <rect x="184" y="212" width="8" height="24" rx="2" fill="#9bc4ff"/>
          <rect x="197" y="218" width="8" height="18" rx="2" fill="#6ba6ff"/>
          <rect x="210" y="205" width="8" height="31" rx="2" fill="#ff8a52"/>
          <rect x="267" y="197" width="110" height="45" rx="6" fill="#101a2e" stroke="#263856"/>
          <polyline points="276,229 292,216 308,231 325,207 342,218 360,204 370,211" fill="none" stroke="#6ba6ff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="162" y="252" width="215" height="38" rx="6" fill="#101a2e" stroke="#263856"/>
          <rect x="176" y="263" width="123" height="6" rx="3" fill="#31446b"/>
          <rect x="176" y="276" width="88" height="6" rx="3" fill="#31446b"/>
          <circle cx="351" cy="271" r="10" fill="none" stroke="#ff8a52" stroke-width="2.4"/>
        </g>

        <g class="workstation-laptop">
          <path d="M78 331 L190 331 L214 348 L101 348 Z" fill="#19243a" stroke="#2c3c5c"/>
          <path d="M93 267 L190 267 L207 331 L77 331 Z" fill="#0b1220" stroke="#2c3c5c"/>
          <rect x="105" y="280" width="78" height="38" rx="4" fill="#101a30"/>
          <path d="M111 309 L127 296 L144 307 L160 289 L179 300" fill="none" stroke="#6ba6ff" stroke-width="2" stroke-linecap="round"/>
        </g>

        <circle cx="114" cy="216" r="3" fill="#6ba6ff" opacity="0.75"/>
        <circle cx="624" cy="246" r="2.6" fill="#ff8a52" opacity="0.7"/>
        <circle cx="446" cy="363" r="2.8" fill="#6ba6ff" opacity="0.6"/>
      </svg>
  </div>`;
}



function renderDevelopmentPackageCard(plan, typeKey, index) {
  const isOfferPackage = Boolean(plan.originalPrice);
  const priceBlock = isOfferPackage
    ? `
      <div class="dev-package-price offer-price-box">
        <div class="original-price-row"><small>Original Price</small><del>${plan.originalPrice}</del></div>
        <div class="launch-price-row"><small>Launch Offer</small><strong>${plan.price}</strong></div>
        <span class="save-line">${plan.savings}</span>
      </div>
      <span class="delivery-badge">${plan.delivery}</span>`
    : `
      <div class="dev-package-price">
        <small>Starting from</small>
        <strong>${plan.price}</strong>
        <span>${plan.altPrice}</span>
      </div>`;

  return `
    <article class="dev-package-card glass reveal ${isOfferPackage ? 'offer-package-card' : ''} ${typeKey === 'website' ? 'website-offer-card' : ''} ${typeKey === 'android' ? 'android-offer-card' : ''} ${plan.popular ? 'popular' : ''}" data-tilt style="--package-delay:${index * 90}ms;">
      <span class="package-badge ${plan.popular ? 'package-badge-popular' : ''}">${plan.badge}</span>
      <h3>${plan.title}</h3>
      <p>${plan.desc}</p>
      ${priceBlock}
      <ul>${plan.features.map((feature) => `<li>${icon('check')}${feature}</li>`).join('')}</ul>
      <a href="/quote?service=${typeKey}&package=${encodeURIComponent(plan.title)}" class="btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}">Request Quote ${icon('arrow')}</a>
    </article>`;
}

function renderDevelopmentPackagesSection({ id = 'development-packages', extraClass = '' } = {}) {
  const packageTypes = [
    { key: 'website', label: 'Website Development' },
    { key: 'android', label: 'Android App Development' },
  ];

  return `
    <section class="section-tight dev-packages-section ${extraClass}" id="${id}" data-package-switcher>
      <div class="page-grid">
        ${sectionIntro({
          label: 'Development Packages',
          title: 'Launch offer website and Android app packages for growing businesses.',
          text: 'Both website and Android app packages now show original price, launch offer price, savings, delivery time, and included features clearly for quick customer decision making.',
          centered: true,
        })}
        <div class="package-tabs glass" role="tablist" aria-label="Development package categories">
          ${packageTypes.map((type, index) => `
            <button class="package-tab ${index === 0 ? 'is-active' : ''}" type="button" role="tab" aria-selected="${index === 0 ? 'true' : 'false'}" data-package-tab="${type.key}">
              ${type.label}
            </button>`).join('')}
        </div>
        <div class="package-panels" data-package-panels>
          ${packageTypes.map((type, index) => {
            const group = developmentPackages[type.key];
            return `
              <div class="package-panel ${index === 0 ? 'is-active' : ''}" data-package-panel="${type.key}">
                <p class="package-panel-note">${group.intro}</p>
                <div class="dev-package-grid ${type.key === 'website' ? 'offer-package-grid website-offer-grid' : ''} ${type.key === 'android' ? 'offer-package-grid android-offer-grid' : ''}">
                  ${group.plans.map((plan, planIndex) => renderDevelopmentPackageCard(plan, type.key, planIndex)).join('')}
                </div>
              </div>`;
          }).join('')}
        </div>
        <p class="package-disclaimer">Note: Final price depends on page count, design level, content, product count, custom features, hosting, domain, payment gateway, admin panel requirements, and long-term support scope.</p>
      </div>
    </section>`;
}

function renderDeliveryPoints() {
  return deliveryPoints.map((item, index) => `
    <article class="process-step glass process-sequence-card delivery-sequence-card" style="--step-delay: ${index * 260}ms;">
      <span>${item.value}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>`).join('');
}

function homePage() {
  const body = `
    <section class="hero section-compact-top">
      <div class="page-grid hero-grid">
        <div class="hero-copy reveal is-visible">
          <span class="hero-badge">${icon('bolt')} ${site.tagline}</span>
          <h1>Professional IT, security, and software support for modern businesses.</h1>
          <p class="hero-lede">Yoonow Technologies helps businesses manage computers, networks, servers, firewalls, CCTV, printers, websites, mobile apps, and custom software through one reliable technology partner.</p>
          <div class="hero-actions">
            <a href="/quote" class="btn btn-primary">Request Quote ${icon('arrow')}</a>
            <a href="/services" class="btn btn-secondary">View Services</a>
            <a href="/contact" class="btn btn-ghost">Contact Us</a>
          </div>
        </div>
        ${heroVisual()}
      </div>
    </section>





    <section class="section-tight stats-section" id="stats">
      <div class="page-grid stats-band">
        ${homeStats.map((stat) => `
          <div class="stat-item reveal" data-stat-card>
            <strong data-count-to="${stat.target}" data-count-suffix="${stat.suffix}">1${stat.suffix}</strong>
            <span>${stat.label}</span>
          </div>`).join('')}
      </div>
    </section>


    <section class="logo-marquee-section section-tight" id="core-technologies">
      <div class="page-grid">
        ${sectionIntro({
          label: 'Core Technologies',
          title: 'Core technologies used across professional IT environments.',
          text: 'We support the real technology stack used by modern offices: business computers, servers, NAS storage, firewalls, Wi‑Fi, CCTV systems, printers, cloud tools, productivity platforms, websites, databases, and custom software environments.',
          centered: true,
        })}
        <div class="logo-marquee" aria-label="Supported technology logos">
          <div class="logo-track">
            ${[...technologies, ...technologies].map(techLogo).join('')}
          </div>
        </div>
      </div>
    </section>



    <section class="section-tight" id="technology-stack-preview">
      <div class="page-grid">
        ${sectionIntro({
          label: 'Technology Stack',
          title: 'Advanced technology planning behind every Yoonow project.',
          text: 'Our projects are not only designed visually. They are structured across frontend experience, backend workflow, deployment infrastructure, and security readiness so every website, software system, and support setup can grow professionally.',
          centered: true,
        })}
        <div class="home-stack-preview-grid advanced">
          ${technologyStack.map((group, index) => `
            <a href="/technology-stack" class="home-stack-card glass reveal" data-tilt style="--stack-delay:${index * 100}ms">
              <span class="home-stack-icon">${icon(group.icon)}</span>
              <span class="home-stack-kicker">Layer ${String(index + 1).padStart(2, '0')}</span>
              <strong>${group.shortCategory || group.category}</strong>
              <small>${group.summary}</small>
              <ul class="home-stack-mini-list">
                ${group.capabilities.slice(0, index === 0 ? 4 : 3).map((item) => `<li>${item}</li>`).join('')}
              </ul>
              <span class="home-stack-tools">${group.tools.slice(0, 14).join(' • ')}</span>
            </a>`).join('')}
        </div>
        <div class="stack-proof-strip glass reveal">
          <span>React / Next.js Ready</span>
          <span>Node / Supabase / Firebase</span>
          <span>Cloudflare / Vercel / AWS Ready</span>
          <span>Google Workspace / Microsoft 365</span>
          <span>FortiGate / QNAP / CCTV</span>
          <span>GA4 / Search Console / Security</span>
        </div>
        <div class="center-actions stack-preview-action"><a href="/technology-stack" class="btn btn-secondary">View Full Technology Stack ${icon('arrow')}</a></div>
      </div>
    </section>

    <section class="section-tight" id="services">
      <div class="page-grid">
        ${sectionIntro({
          label: 'Core Services',
          title: 'Complete IT and software services under one team.',
          text: 'Our service model combines daily IT support with infrastructure planning and software development, so your business can solve hardware, network, security, cloud, and application requirements through one professional team.',
          centered: true,
        })}
        <div class="service-grid">
          ${services.filter((service) => service.featured).map((service) => `
            <article class="service-card glass reveal" id="${service.id}" data-tilt>
              <span class="card-number">${service.number}</span>
              <div class="icon-wrap">${icon(service.icon)}</div>
              <h3>${service.title}</h3>
              <p>${service.text}</p>
            </article>`).join('')}
        </div>
        <div class="section-more">
          <a href="/services" class="btn btn-secondary">View All Services ${icon('arrow')}</a>
        </div>
      </div>
    </section>

    <section class="section-tight home-package-teaser" id="development-packages">
      <div class="page-grid">
        ${sectionIntro({
          label: 'Development Packages',
          title: 'Website and app package overview.',
          text: 'Home shows a short package preview. Full pricing and package details are available on the Services page to keep the launch page focused and easy to scroll.',
          centered: true,
        })}
        <div class="package-teaser-grid">
          ${Object.entries(developmentPackages).flatMap(([typeKey, group]) => group.plans.slice(0, 2).map((pkg) => ({ group: group.label || typeKey, ...pkg }))).slice(0, 4).map((pkg) => `
            <article class="package-teaser-card glass reveal" data-tilt>
              <span>${pkg.group}</span>
              <h3>${pkg.title}</h3>
              <strong>${pkg.price}</strong>
              <p>${pkg.desc}</p>
            </article>`).join('')}
        </div>
        <div class="center-actions stack-preview-action"><a href="/services#service-development-packages" class="btn btn-primary">View Full Packages ${icon('arrow')}</a></div>
      </div>
    </section>

    <section class="section-tight business-showcase-section" id="showcase">
      <div class="page-grid showcase-grid">
        <div class="showcase-copy reveal">
          ${sectionIntro({
            label: 'Business Showcase',
            title: 'A polished service story with media, proof, and clear actions.',
            text: 'See how Yoonow supports real businesses day to day with reliable IT support, secure infrastructure, website delivery, and custom software solutions under one professional service partner.',
            centered: false,
          })}
          <div class="showcase-points">
            <span>${icon('monitor')} Workstations</span>
            <span>${icon('network')} Networks</span>
            <span>${icon('camera')} CCTV</span>
            <span>${icon('code')} Software</span>
          </div>
          <div class="hero-actions showcase-actions">
            <a href="/quote" class="btn btn-primary">Request Quote ${icon('arrow')}</a>
            <a href="/services" class="btn btn-secondary">View Services</a>
          </div>
        </div>
        <figure class="video-panel showcase-video-card glass reveal" data-tilt>
          <video class="clean-showcase-video" autoplay muted loop playsinline preload="auto" aria-label="Yoonow Technologies service showcase video">
            <source src="${video.src}" type="video/mp4" />
            Your browser does not support embedded video.
          </video>
          <figcaption>
            <strong>${video.title}</strong>
            <span>${video.text}</span>
          </figcaption>
        </figure>
      </div>
    </section>


    <section class="section-tight delivery-roadmap-section" id="delivery-strength">
      <div class="page-grid">
        ${sectionIntro({
          label: 'Delivery Strength',
          title: 'A practical delivery flow from site check to long-term support.',
          text: "A clear, repeatable delivery process for every technology project, from requirement review and planning to setup, testing, handover, and long-term support.",
          centered: true,
        })}
        <div class="delivery-roadmap process-sequence" data-process-sequence>
          ${renderDeliveryPoints()}
        </div>
      </div>
    </section>


    <section class="section-tight why-different-section" id="why">
      <div class="page-grid why-different-grid">
        <div class="why-console glass reveal" data-tilt>
          <span class="console-label">Why Yoonow</span>
          <div class="console-ring">
            <i></i><i></i><i></i>
            <strong>360°</strong>
            <small>IT Coverage</small>
          </div>
          <div class="console-status-list">
            <span>${icon('check')} AMC Support</span>
            <span>${icon('check')} Network Security</span>
            <span>${icon('check')} Cloud Backup</span>
            <span>${icon('check')} Software Delivery</span>
            <span>${icon('check')} Workstation Setup</span>
            <span>${icon('check')} CCTV Monitoring</span>
            <span>${icon('check')} Firewall Protection</span>
            <span>${icon('check')} Website & App Support</span>
          </div>
        </div>
        <div>
          ${sectionIntro({
            label: 'Why Choose Yoonow',
            title: 'One accountable team for office technology, security, and software.',
            text: 'One accountable team for IT support, security, infrastructure, websites, and software, helping businesses avoid vendor confusion and keep technology work organised.',
            centered: false,
          })}
          <div class="why-feature-grid">
            <div class="why-feature-card glass reveal"><b>01</b><strong>One accountable partner</strong><small>Manage multiple technology needs without coordinating separate vendors.</small></div>
            <div class="why-feature-card glass reveal"><b>02</b><strong>Documented environment</strong><small>Devices, configurations, recurring issues, and support scope are recorded clearly.</small></div>
            <div class="why-feature-card glass reveal"><b>03</b><strong>Priority for AMC clients</strong><small>Maintenance clients receive planned support and faster scheduling based on scope.</small></div>
            <div class="why-feature-card glass reveal"><b>04</b><strong>Transparent quotations</strong><small>Each proposal separates included work, optional items, and extra project scope.</small></div>
          </div>
        </div>
      </div>
    </section>


    <section class="section-tight" id="amc">
      <div class="page-grid operations-grid">
        <div>
          ${sectionIntro({
            label: 'Proactive AMC Operations',
            title: 'Proactive AMC operations for stable daily business uptime.',
            text: 'A strong AMC setup gives your business planned checks, documented assets, faster support, and a clear escalation process. We focus on keeping essential devices, networks, security systems, backups, and business applications ready before problems affect daily operations.',
          })}
          <a href="/quote" class="btn btn-primary">Plan AMC Coverage ${icon('arrow')}</a>
        </div>
        <div class="ops-console glass reveal" data-tilt>
          <div class="radar-ring"></div>
          <div class="ops-screen">
            <span>System Health</span>
            <strong>Operational</strong>
            <small>Monitoring · Backup · Security · Support</small>
          </div>
        </div>
      </div>
      <div class="page-grid amc-grid process-sequence" data-process-sequence>
        ${amcPillars.map((item, index) => `
          <article class="amc-card glass process-sequence-card" style="--step-delay: ${index * 260}ms;">
            <strong>${item.value}</strong>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>`).join('')}
      </div>
    </section>


    <section class="section-tight" id="plans">
      <div class="page-grid">
        ${sectionIntro({
          label: 'AMC Plans',
          title: 'AMC coverage that scales with your office size and support needs.',
          text: 'Final pricing depends on device count, site size, response requirements, CCTV and network scope, backup responsibility, and the level of software or cloud support your team requires.',
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


    <section class="section-tight" id="process">
      <div class="page-grid">
        ${sectionIntro({
          label: 'How We Work',
          title: 'A clear process from assessment to ongoing support.',
          text: 'Every project starts with understanding your current setup and requirement. We then plan the right scope, install and configure the solution, test the result, document the setup, and continue supporting your team through AMC or on-demand service.',
          centered: true,
        })}
        <div class="process-track process-sequence" data-process-sequence>
          ${['Assess', 'Plan', 'Install', 'Support'].map((step, index) => `
            <article class="process-step glass process-sequence-card" style="--step-delay: ${index * 260}ms;">
              <span>${String(index + 1).padStart(2, '0')}</span>
              <h3>${step}</h3>
              <p>${[
                'Review devices, site, software, network, risks, and business priorities.',
                'Prepare the solution scope, quotation, timeline, and support option.',
                'Configure, test, secure, and document everything before handover.',
                'Maintain, troubleshoot, upgrade, and improve the setup when needed.',
              ][index]}</p>
            </article>`).join('')}
        </div>
      </div>
    </section>


    <section class="section-tight" id="industries">
      <div class="page-grid">
        ${sectionIntro({
          label: 'Industries Served',
          title: 'Technology support for practical business environments.',
          text: 'Our services are suitable for offices, shops, clinics, training centers, service teams, warehouses, showrooms, startups, and growing businesses that need stable daily technology operations with future-ready digital systems.',
          centered: true,
        })}
        <div class="industries-grid">
          ${industries.map((industry) => `<span class="industry-chip glass reveal">${industry}</span>`).join('')}
        </div>
      </div>
    </section>


    <section class="section-tight startup-ready-section" id="launch-readiness">
      <div class="page-grid">
        ${sectionIntro({
          label: 'Launch Readiness',
          title: 'A complete technology foundation for new and growing businesses.',
          text: 'A complete technology foundation for new and growing businesses, covering computers, network, CCTV, backup, website, email, and software workflow planning before daily operations begin.',
          centered: true,
        })}
        <div class="startup-ready-grid">
          <article class="startup-command-card glass reveal" data-tilt>
            <span class="startup-kicker">New Business Setup</span>
            <h3>Start with a clean, documented, and secure technology base.</h3>
            <p>We help you prepare computers, network, internet, CCTV, backup, email, website, and software workflow in one planned setup, so your team can start work without vendor confusion.</p>
            <div class="startup-build-flow" aria-label="New company setup flow">
              <span><b>01</b> Site & requirement check</span>
              <span><b>02</b> Device, network & security setup</span>
              <span><b>03</b> Website, email & software workflow</span>
              <span><b>04</b> Handover, documentation & support</span>
            </div>
            <div class="startup-mini-stats">
              <div><strong>1</strong><small>Technology partner</small></div>
              <div><strong>4</strong><small>Setup phases</small></div>
              <div><strong>360°</strong><small>Office coverage</small></div>
            </div>
          </article>

          <article class="startup-diagram-card glass reveal" data-tilt aria-label="New business technology setup diagram">
            <span class="startup-diagram-label">Setup Architecture</span>
            <div class="startup-orbit-diagram" aria-hidden="true">
              <div class="startup-orbit-ring ring-one"></div>
              <div class="startup-orbit-ring ring-two"></div>
              <div class="startup-orbit-line line-a"></div>
              <div class="startup-orbit-line line-b"></div>
              <div class="startup-orbit-line line-c"></div>
              <div class="startup-orbit-line line-d"></div>

              <div class="startup-hub-node">
                <strong>Yoonow<br>Technologies</strong>
                <span>One setup plan</span>
              </div>

              <div class="startup-diagram-node node-workstation">
                <b>01</b>
                <span>Workstations</span>
              </div>
              <div class="startup-diagram-node node-network">
                <b>02</b>
                <span>Network</span>
              </div>
              <div class="startup-diagram-node node-security">
                <b>03</b>
                <span>Security</span>
              </div>
              <div class="startup-diagram-node node-digital">
                <b>04</b>
                <span>Digital</span>
              </div>
            </div>

            <div class="startup-diagram-console">
              <div>
                <span>Device map</span>
                <b>Ready</b>
              </div>
              <div>
                <span>Network plan</span>
                <b>Secured</b>
              </div>
              <div>
                <span>Website + email</span>
                <b>Planned</b>
              </div>
            </div>

            <p class="startup-diagram-note">A single launch map connects your computers, internet, CCTV, backup, email, website, and software workflow before daily operations begin.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-compact-top" id="offer">
      <div class="page-grid promo-banner glass reveal">
        <span class="promo-tag">${icon('bolt')} ${promo.label}</span>
        <div class="promo-copy">
          <h3>${promo.title}</h3>
          <p>${promo.text}</p>
        </div>
        <a href="/quote" class="btn btn-primary">${promo.cta} ${icon('arrow')}</a>
      </div>
    </section>


    <section class="section-tight" id="cta">
      <div class="page-grid">
        <div class="cta-band glass reveal">
          <span class="section-label">Get Started</span>
          <h2>Ready to simplify your IT, CCTV, networking, and software support?</h2>
          <p>Share your requirement and we will recommend the right service scope, AMC option, or project plan for your business.</p>
          <div class="hero-actions center-actions">
            <a href="/quote" class="btn btn-primary">Request Quote ${icon('arrow')}</a>
            <a href="/contact" class="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>

  `;

  return renderPage({
    title: 'Yoonow Technologies | Software, Websites, IT Support & CCTV',
    description: site.description,
    path: '/',
    body,
  });
}

module.exports = { homePage, sectionIntro, techLogo, renderDevelopmentPackagesSection };