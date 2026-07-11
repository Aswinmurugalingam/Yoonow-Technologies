const { site, nav, seoKeywords, localSeoServices } = require('../data/siteData');

function navigation(currentPath = '/') {
  const links = nav
    .map((item) => {
      const isProjectLink = item.href === '/projects';
      const active = item.href === currentPath || (isProjectLink && currentPath.startsWith('/projects'));
      const activeClass = active ? ' class="is-active"' : '';
      return `<a href="${item.href}"${activeClass}>${item.label}</a>`;
    })
    .join('');

  return `
    <header class="site-header" data-header>
      <div class="page-grid header-grid">
        <a href="/" class="brand" aria-label="${site.name} home">
          <img src="/assets/icons/logo-D-shield-mark.svg" alt="" width="42" height="42" />
          <span class="brand-word"><span class="brand-name-gradient">Yoonow</span> Technologies</span>
        </a>
        <nav class="desktop-nav" aria-label="Primary">${links}</nav>
        <div class="header-actions">
          <a href="/quote" class="btn btn-primary btn-small">Request Quote</a>
          <button type="button" class="nav-toggle" data-nav-toggle aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <nav class="mobile-nav" data-mobile-nav aria-label="Mobile navigation">
      ${nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
      <a href="/quote" class="btn btn-primary">Request Quote</a>
    </nav>`;
}

function footer() {
  const phoneHref = `tel:${site.phone.replace(/\s+/g, '')}`;
  const whatsappMessage = encodeURIComponent('Hi Yoonow Technologies, I need support for my business technology setup. Please share details.');
  const whatsappHref = `${site.whatsapp}?text=${whatsappMessage}`;
  const emailHref = `mailto:${site.email}?subject=${encodeURIComponent('Service Enquiry - Yoonow Technologies')}`;

  return `
    <footer class="site-footer footer-pro">
      <div class="page-grid footer-grid footer-grid-filled">
        <div class="footer-card footer-brand-card footer-brand-card-equal">
          <a href="/" class="brand">
            <img src="/assets/icons/logo-D-shield-mark.svg" alt="" width="42" height="42" />
            <span class="brand-word"><span class="brand-name-gradient">Yoonow</span> Technologies</span>
          </a>
          <p><strong>Yoonow Technologies</strong> provides practical IT support, software licensing, websites, Android apps, networking, CCTV, business launch setup, and AMC follow-up for offices, startups, shops, and growing businesses. We plan, build, secure, document, and support business technology with clear handover and daily-use focus.</p>
          <div class="footer-chip-row footer-chip-row-six">
            <span>IT Support</span>
            <span>Licensing</span>
            <span>Website</span>
            <span>Android Apps</span>
            <span>Networking</span>
            <span>AMC</span>
          </div>
        </div>

        <div class="footer-card footer-link-card footer-equal-list-card">
          <h5>Main Pages</h5>
          <ul>${nav.map((item) => `<li><a href="${item.href}">${item.label}<span>→</span></a></li>`).join('')}</ul>
        </div>

        <div class="footer-card footer-link-card footer-equal-list-card">
          <h5>Core Services</h5>
          <ul>
            <li><a href="/services#computer-service">Computer Service <span>→</span></a></li>
            <li><a href="/services#networking">Networking <span>→</span></a></li>
            <li><a href="/services#cctv">CCTV Installation <span>→</span></a></li>
            <li><a href="/services#software">Software Development <span>→</span></a></li>
            <li><a href="/services#amc">AMC Support <span>→</span></a></li>
            <li><a href="/services#software-licensing">Software Licensing <span>→</span></a></li>
          </ul>
        </div>

        <div class="footer-card footer-contact-card footer-contact-balanced footer-contact-equal">
          <h5>Contact</h5>
          <ul>
            <li><a href="${phoneHref}" class="footer-contact-action"><strong>Phone</strong><span>${site.phone}</span></a></li>
            <li><a href="${whatsappHref}" target="_blank" rel="noopener" class="footer-contact-action"><strong>WhatsApp</strong><span>Chat with Yoonow Technologies</span></a></li>
            <li><a href="${emailHref}" class="footer-contact-action"><strong>Email</strong><span>${site.email}</span></a></li>
            <li><a href="/contact" class="footer-contact-link">Contact Us <span>→</span></a></li>
          </ul>
        </div>
      </div>

      <div class="page-grid footer-mini-grid">
        <div class="footer-mini-card"><strong>Office IT</strong><span>PCs, laptops, printers, users, email, backup, and daily support.</span></div>
        <div class="footer-mini-card"><strong>Security Setup</strong><span>CCTV, firewall, network protection, access points, and monitoring support.</span></div>
        <div class="footer-mini-card"><strong>Digital Build</strong><span>Websites, Android apps, dashboards, forms, and custom business software.</span></div>
      </div>

      <div class="page-grid footer-bottom">
        <span>&copy; <span data-year></span> ${site.name}. All rights reserved.</span>
        <span class="footer-legal-links"><a href="/faq">FAQ</a><a href="/privacy-policy">Privacy Policy</a><a href="/terms">Terms</a></span>
      </div>
    </footer>`;
}

function renderPage({ title, description, path = '/', body, image = '/assets/images/hero-office.webp', schema = null }) {
  return `<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description || site.description}" />
  <meta name="keywords" content="${(seoKeywords || []).join(', ')}" />
  <meta name="theme-color" content="#05070c" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${site.name}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description || site.description}" />
  <meta property="og:image" content="${image.startsWith('http') ? image : `${site.url}${image}`}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="${image.startsWith('http') ? image : `${site.url}${image}`}" />
  <link rel="canonical" href="${site.url}${path === '/' ? '' : path}" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg" />
  <link rel="icon" type="image/png" sizes="48x48" href="/assets/icons/favicon-48x48.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/favicon-96x96.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-W8M54BGB32"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-W8M54BGB32');
  </script>
  <link rel="stylesheet" href="/assets/css/styles.css?v=techstack-card-inner-v29" />
  <script>
    (function () {
      try {
        if (window.sessionStorage && sessionStorage.getItem('yoonowInternalNavigation') === '1') {
          document.documentElement.classList.add('internal-nav-arrival');
        }
      } catch (e) {}
    })();
  </script>
  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    areaServed: 'Global',
    knowsAbout: seoKeywords || [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Yoonow Technologies Services',
      itemListElement: (localSeoServices || []).map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.text,
          areaServed: 'Global'
        }
      }))
    },
  })}</script>
  ${schema ? (Array.isArray(schema) ? schema : [schema]).map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join('') : ''}
</head>
<body data-path="${path}">
  <div class="ambient-bg" aria-hidden="true"></div>
  <canvas id="networkCanvas" aria-hidden="true"></canvas>
  <div class="page-loader y-symbol-loader" data-page-loader aria-label="Loading">
    <div class="loader-y-mark" aria-hidden="true">
      <svg class="loader-y-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yoonow Y symbol">
        <defs>
          <linearGradient id="loaderYBlue" x1="20" y1="18" x2="75" y2="72" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#8fc4ff"/>
            <stop offset="0.55" stop-color="#3d8bff"/>
            <stop offset="1" stop-color="#1d67ff"/>
          </linearGradient>
          <linearGradient id="loaderYOrange" x1="58" y1="55" x2="66" y2="108" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#ff9a63"/>
            <stop offset="1" stop-color="#ff5f23"/>
          </linearGradient>
          <radialGradient id="loaderYCore" cx="50%" cy="50%" r="50%">
            <stop offset="0" stop-color="#ff9a63"/>
            <stop offset="1" stop-color="#ff5f23"/>
          </radialGradient>
          <filter id="loaderYGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4.5" result="blur"/>
            <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.23 0 0 0 0 0.52 0 0 0 0 1 0 0 0 .70 0" result="blueGlow"/>
            <feMerge>
              <feMergeNode in="blueGlow"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <g class="loader-y-symbol" filter="url(#loaderYGlow)">
          <path class="loader-y-arm loader-y-arm-left" d="M30 24 L61 63" stroke="url(#loaderYBlue)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
          <path class="loader-y-arm loader-y-arm-right" d="M91 24 L61 63" stroke="url(#loaderYBlue)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
          <path class="loader-y-stem" d="M61 63 L61 101" stroke="url(#loaderYOrange)" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
          <circle class="loader-y-core" cx="61" cy="63" r="8.5" fill="url(#loaderYCore)"/>
        </g>
      </svg>
    </div>
  </div>
  <a href="#main" class="sr-only">Skip to main content</a>
  ${navigation(path)}
  <main id="main">${body}</main>
  ${footer()}
  <script src="/assets/js/main.js?v=techstack-card-inner-v29" defer></script>
</body>
</html>`;
}

module.exports = { renderPage };
