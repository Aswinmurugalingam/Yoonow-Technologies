const { renderPage } = require('./layout');
const { icon } = require('./icons');
const { completedProjects } = require('../data/siteData');

function projectFilterTags(project) {
  const explicit = Array.isArray(project.filters) ? project.filters.filter(Boolean) : [];
  return [...new Set(['all', ...explicit])];
}

function slugToProject(slug) {
  return completedProjects.find((project) => project.slug === slug) || null;
}

function projectStatusClass(status = '') {
  const normalized = String(status).toLowerCase();
  if (normalized.includes('completed')) return 'project-status-completed';
  if (normalized.includes('ongoing')) return 'project-status-ongoing';
  return 'project-status-default';
}

function projectCard(project) {
  return `
    <article class="project-card project-card-${project.slug} ${project.imageFit === 'contain' ? 'project-card-contain' : ''} glass reveal" data-project-slug="${project.slug}" data-tilt data-project-tags="${projectFilterTags(project).join(' ')}">
      <a href="/projects/${project.slug}" class="project-card-link" aria-label="View ${project.title} details">
        <div class="project-image-wrap">
          <img src="${project.image}" alt="${project.title} project preview" loading="lazy" />
          <span class="project-priority">${project.priority}</span>
          <span class="project-category">${project.category}</span>
        </div>
        <div class="project-card-body">
          <span class="project-status ${projectStatusClass(project.status)}">${project.status}</span>
          <h3>${project.title}</h3>
          <p>${project.subtitle}</p>
          <span class="project-open">View project details ${icon('arrow')}</span>
        </div>
      </a>
    </article>`;
}

function projectsPage() {
  const categories = [
    { label: 'All Projects', filter: 'all' },
    { label: 'Software', filter: 'software' },
    { label: 'Websites', filter: 'websites' },
    { label: 'IT Infrastructure', filter: 'infrastructure' },
    { label: 'Tools / Platforms', filter: 'tools-platforms' },
    { label: 'Android', filter: 'android' },
    { label: 'Network', filter: 'network' },
    { label: 'NAS', filter: 'nas' },
    { label: 'CCTV', filter: 'cctv' },
    { label: 'Drone', filter: 'drone' },
    { label: 'Ongoing', filter: 'ongoing' },
  ];

  return renderPage({
    title: 'Projects and Technical Portfolio | Yoonow Technologies',
    description:
      'Explore Yoonow Technologies projects across business software, websites, AI tools, mapping platforms, office infrastructure, networks, NAS, CCTV, and drone visualization workflows.',
    path: '/projects',
    body: `
      <style>
        .project-filter-row span { cursor: pointer; user-select: none; transition: transform .22s var(--ease), background .22s var(--ease), color .22s var(--ease), border-color .22s var(--ease); }
        .project-filter-row span:hover,
        .project-filter-row span.is-active { transform: translateY(-2px); color: #eef6ff; border-color: rgba(99, 160, 255, .55); background: linear-gradient(135deg, rgba(61, 139, 255, .30), rgba(255, 107, 44, .12)); box-shadow: 0 12px 34px rgba(61, 139, 255, .12); }
        .project-card.is-hidden { display: none; }
        .projects-hero-single { padding-bottom: 42px; }
        .projects-hero-single .project-filter-row { margin-top: 28px; margin-bottom: 32px; }
        .project-filter-tabs { flex-wrap: wrap; overflow: visible; justify-content: center; scrollbar-width: none; }
        .project-filter-tabs::-webkit-scrollbar { display: none; }
        .project-filter-tabs span { flex: 0 0 auto; }
        .projects-hero-single .page-grid.narrow { text-align: center; }
        .projects-hero-single .page-grid.narrow > p { text-align: center; max-width: 940px; margin-left: auto; margin-right: auto; }
        @media (max-width: 760px) {
          .project-filter-tabs { display: grid !important; grid-template-columns: repeat(2, minmax(0, 1fr)); width: 100%; max-width: 520px; gap: 9px; }
          .project-filter-tabs span { width: 100%; min-height: 46px; white-space: normal; text-align: center; }
        }
        @media (max-width: 360px) {
          .project-filter-tabs { grid-template-columns: 1fr; }
        }
      </style>

      <section class="page-hero projects-hero projects-hero-single section-tight">
        <div class="page-grid narrow">
          <span class="section-label">Projects Portfolio</span>
          <h1>Projects and technical portfolio.</h1>
          <p>Explore a professional collection of completed and ongoing Yoonow Technologies projects across business software, websites, AI tools, mapping platforms, office infrastructure, networking, NAS, CCTV and drone visualization workflows.</p>
          <div class="project-filter-row project-filter-tabs" aria-label="Project categories">
            ${categories.map((category, index) => `<span role="button" tabindex="0" data-project-filter="${category.filter}" class="${index === 0 ? 'is-active' : ''}">${category.label}</span>`).join('')}
          </div>
        </div>
        <div class="page-grid">
          <div class="projects-grid" data-projects-grid>
            ${completedProjects.map(projectCard).join('')}
          </div>
        </div>
      </section>

      <script>
        (() => {
          const filters = document.querySelectorAll('[data-project-filter]');
          const cards = document.querySelectorAll('[data-project-tags]');

          const applyFilter = (filter) => {
            filters.forEach((item) => item.classList.toggle('is-active', item.dataset.projectFilter === filter));
            cards.forEach((card) => {
              const tags = (card.dataset.projectTags || '').split(' ');
              card.classList.toggle('is-hidden', filter !== 'all' && !tags.includes(filter));
            });
          };

          filters.forEach((item) => {
            item.addEventListener('click', () => applyFilter(item.dataset.projectFilter));
            item.addEventListener('keydown', (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                applyFilter(item.dataset.projectFilter);
              }
            });
          });

          applyFilter('all');
        })();
      </script>
    `,
  });
}

function listItems(items) {
  return (items || []).map((item) => `<li>${icon('check')}<span>${item}</span></li>`).join('');
}

function stepTitle(index) {
  return ['Session Verification', 'Role Routing', 'Site Data Upload', 'Pending Approval', 'Admin Review', 'Notifications', 'Daily Analysis', 'Data & Reports'][index] || `Step ${index + 1}`;
}

function trustTitle(index) {
  return ['Workflow Thinking', 'Backend Control', 'Real Office Use', 'Technology Confidence'][index] || `Trust Point ${index + 1}`;
}

function renderProjectAccess(project) {
  const isInternalPopup = project.accessType === 'internalPopup';
  if (!project.liveUrl && !isInternalPopup) return '';

  if (isInternalPopup) {
    return `
      <div class="project-live-access glass project-internal-access">
        <div>
          <span class="project-live-kicker">Live Project Access</span>
          <p>${project.liveNote || 'This project is available only through the internal office network.'}</p>
        </div>
        <button type="button" class="project-live-button" data-internal-project-access>
          ${project.liveLabel || 'Click here to view the project page'} ${icon('arrow')}
        </button>
      </div>
      <div class="project-access-modal" data-internal-access-modal hidden>
        <div class="project-access-modal-backdrop" data-internal-access-close></div>
        <div class="project-access-modal-card glass" role="dialog" aria-modal="true" aria-labelledby="projectAccessTitle">
          <button type="button" class="project-access-modal-close" data-internal-access-close aria-label="Close internal access message">×</button>
          <span class="project-live-kicker">Restricted Access</span>
          <h2 id="projectAccessTitle">${project.internalTitle || 'Internal Office System'}</h2>
          <p>${project.internalMessage || 'This project is restricted to the internal office network for data security.'}</p>
          <div class="project-access-modal-points">
            ${(project.internalBullets || ['Internal network only', 'Protected business data', 'Private demo available']).map((item) => `<span>${item}</span>`).join('')}
          </div>
        </div>
      </div>`;
  }

  return `
    <div class="project-live-access glass">
      <div>
        <span class="project-live-kicker">Live Project Access</span>
        <p>${project.liveNote || 'Open the live project page in a new browser tab.'}</p>
      </div>
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-live-button">
        ${project.liveLabel || 'Click here to view the project page'} ${icon('arrow')}
      </a>
    </div>`;
}

function projectDetailPage(slug) {
  const project = slugToProject(slug);
  if (!project) return projectsPage();

  const galleryImages = project.gallery || [project.image, '/assets/images/hero-office.jpg', '/assets/images/team-planning.jpg'];
  const workflowTitles = project.howItWorksTitles || [];
  const trustNoteTitles = project.trustTitles || [];
  const hasRealAnalysis = Boolean(project.businessProblem || project.solution || project.modules);
  const heroPoints = project.modules ? project.modules.slice(0, 4) : (project.howItWorks || []).slice(0, 4);
  const visualStructure = project.visualStructure || [
    'Main dashboard or landing screen presents the project purpose clearly.',
    'User workflow screens guide visitors through the core business process.',
    'Admin or management area controls data, status, and operational decisions.',
    'Reporting and documentation sections support follow-up and business trust.',
  ];
  const projectHeroVideo = project.heroVideo || project.visualVideo || '';
  const projectVideoPoster = project.videoPoster || project.image || '';
  const trustNotes = project.trustNotes || [
    'Shows practical thinking from UI to workflow and business output.',
    'Project page will be updated with real screenshots and source structure after analysis.',
    'Clear documentation helps clients understand the value of the completed work.',
    'Technical content is written safely without exposing private client data.',
  ];

  return renderPage({
    title: `${project.title} | Yoonow Technologies Project`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    body: `
      <div class="project-detail-page project-detail-page-${project.slug}">
      <section class="page-hero project-detail-hero section-tight">
        <div class="page-grid project-back-row">
          <a href="/projects" class="project-back-link">← Back to Projects</a>
        </div>
        <div class="page-grid project-detail-hero-grid">
          <div class="project-detail-intro">
            <span class="section-label">${project.category}</span>
            <h1>${project.title}</h1>
            <div class="project-hero-note glass">
              ${(project.introHighlights || [project.subtitle, 'Detailed workflow, technical stack and visual structure are presented below for client trust.', 'Sensitive internal data is converted into safe public portfolio wording.']).map((item) => `
                <p>${item}</p>`).join('')}
            </div>
          </div>
          <figure class="project-detail-main-image ${project.imageFit === 'contain' ? 'project-image-contain' : ''} ${projectHeroVideo ? 'project-detail-video-card' : ''} glass reveal">
            ${projectHeroVideo ? `
            <video class="project-detail-video" autoplay muted loop playsinline preload="metadata" poster="${projectVideoPoster}">
              <source src="${projectHeroVideo}" type="video/mp4" />
              Your browser does not support the video tag.
            </video>` : `<img src="${project.image}" alt="${project.title} main project preview" loading="lazy" />`}
            <figcaption>${projectHeroVideo ? 'Private demo video' : project.category}</figcaption>
          </figure>
        </div>
      </section>

      <section class="section-tight project-detail-section-up">
        <div class="page-grid project-detail-layout project-equal-pair">
          <article class="project-detail-panel glass reveal project-fill-panel">
            <span class="section-label">Project Summary</span>
            <h2>What this project is about.</h2>
            <p>${project.summary}</p>
            ${project.summaryPoints ? `
            <ul class="project-summary-note-list">
              ${project.summaryPoints.map((item) => `<li><span>${item}</span></li>`).join('')}
            </ul>` : ''}
          </article>
          <aside class="project-stack-panel glass reveal project-fill-panel">
            <span class="section-label">Work Scope</span>
            <h2>Technology and implementation scope.</h2>
            <div class="project-stack-list">
              ${project.stack.map((item) => `<span>${item}</span>`).join('')}
            </div>
            ${project.scopePoints ? `
            <ul class="project-scope-note-list">
              ${listItems(project.scopePoints)}
            </ul>` : ''}
          </aside>
        </div>
      </section>

      ${hasRealAnalysis ? `
      <section class="section-tight project-detail-section-up">
        <div class="page-grid project-detail-layout project-equal-pair">
          <article class="project-detail-panel glass reveal project-fill-panel">
            <span class="section-label">Business Problem</span>
            <h2>Why this system was needed.</h2>
            <p>${project.businessProblem}</p>
          </article>
          <article class="project-detail-panel glass reveal project-fill-panel">
            <span class="section-label">Solution Provided</span>
            <h2>How the project solves it.</h2>
            <p>${project.solution}</p>
          </article>
        </div>
      </section>
      ` : ''}

      <section class="section-tight project-detail-section-up">
        <div class="page-grid">
          <div class="section-head centered project-section-head-tight">
            <span class="section-label">How It Works</span>
            <h2>Workflow and business use explained clearly.</h2>
            <p>${project.workflowNote || (hasRealAnalysis ? 'This workflow is prepared from the uploaded project folder analysis and real project screenshots.' : 'This section will become more exact after checking the original project folder, screenshots, database structure, and deployment files.')}</p>
          </div>
          <div class="project-detail-grid project-workflow-grid process-sequence" data-project-sequence>
            ${project.howItWorks.map((item, index) => `
              <article class="project-step-card process-step process-sequence-card glass reveal" style="--step-delay:${index * 130}ms">
                <span>${String(index + 1).padStart(2, '0')}</span>
                <h3>${workflowTitles[index] || stepTitle(index)}</h3>
                <p>${item}</p>
              </article>`).join('')}
          </div>
        </div>
      </section>

      <section class="section-tight project-detail-section-up">
        <div class="page-grid project-detail-layout project-equal-pair project-modules-technical-row">
          <article class="project-detail-panel glass reveal project-fill-panel">
            <span class="section-label">Project Modules</span>
            <h2>Main modules included in the system.</h2>
            <ul class="project-technical-list compact-list">
              ${listItems(project.modules || project.howItWorks)}
            </ul>
          </article>
          <article class="project-detail-panel glass reveal project-fill-panel">
            <span class="section-label">Technical Mind</span>
            <h2>What was developed and configured technically.</h2>
            <ul class="project-technical-list compact-list">
              ${listItems(project.technical)}
            </ul>
          </article>
        </div>
      </section>

      <section class="section-tight project-detail-section-up">
        <div class="page-grid">
          <div class="section-head centered project-section-head-tight">
            <span class="section-label">Project Visual Structure</span>
            <h2>Real interface views and working screens.</h2>
            <p>Only the most relevant real screenshots are shown here so the portfolio stays clean, focused and easy to review.</p>
          </div>
          <div class="project-gallery-full glass reveal ${project.visualVideo ? 'project-video-gallery-full' : ''}">
            ${project.visualVideo ? `
              <figure class="project-visual-video-card">
                <video class="project-visual-video" autoplay muted loop playsinline preload="metadata" poster="${project.videoPoster || project.image}">
                  <source src="${project.visualVideo}" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <figcaption>${visualStructure[0] || 'Project demo video'}</figcaption>
              </figure>
            ` : `
            <div class="project-gallery-grid project-gallery-grid-large ${galleryImages.length === 1 ? 'project-gallery-single' : ''} ${galleryImages.length === 2 ? 'project-gallery-two' : ''}">
              ${galleryImages.map((image, index) => `
                <figure>
                  <img src="${image}" alt="${project.title} visual ${index + 1}" loading="lazy" />
                  <figcaption>${visualStructure[index] || `Project screen ${index + 1}`}</figcaption>
                </figure>`).join('')}
            </div>`}
          </div>
        </div>
      </section>

      ${(project.liveUrl || project.accessType === 'internalPopup') ? `
      <section class="section-tight project-detail-section-up project-live-access-section">
        <div class="page-grid">
          ${renderProjectAccess(project)}
        </div>
      </section>
      ` : ''}

      <section class="section-tight project-detail-section-up">
        <div class="page-grid">
          <div class="section-head centered project-section-head-tight">
            <span class="section-label">Client Trust Note</span>
            <h2>Why this project builds client confidence.</h2>
          </div>
          <div class="project-detail-grid trust-note-grid process-sequence" data-project-sequence>
            ${trustNotes.map((item, index) => `
              <article class="project-trust-card process-step process-sequence-card glass reveal" style="--step-delay:${index * 150}ms">
                <span>${String(index + 1).padStart(2, '0')}</span>
                <h3>${trustNoteTitles[index] || trustTitle(index)}</h3>
                <p>${item}</p>
              </article>`).join('')}
          </div>
        </div>
      </section>
      <section class="section-tight project-detail-section-up project-need-section">
        <div class="page-grid">
          <article class="project-need-card glass reveal">
            <div class="project-need-copy">
              <span class="section-label">${project.needLabel || 'Need Similar Software?'}</span>
              <h2>${project.needTitle || `Do you need ${project.title} or similar software like this?`}</h2>
              <p>${project.needText || 'Yoonow Technologies can plan, design and build a custom solution with your company workflow, branding, user roles, reports, security and deployment requirements.'}</p>
            </div>
            <a href="/quote?project=${encodeURIComponent(project.title)}" class="project-need-button">
              Get Quote ${icon('arrow')}
            </a>
          </article>
        </div>
      </section>

      <script>
        (() => {
          const sequences = document.querySelectorAll('[data-project-sequence]');
          if (sequences.length) {
            const play = (el) => el.classList.add('is-playing');
            if (!('IntersectionObserver' in window)) {
              sequences.forEach(play);
            } else {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    play(entry.target);
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
              sequences.forEach((el) => observer.observe(el));
            }
          }

          const accessButton = document.querySelector('[data-internal-project-access]');
          const modal = document.querySelector('[data-internal-access-modal]');
          if (!accessButton || !modal) return;

          const closeItems = modal.querySelectorAll('[data-internal-access-close]');
          const openModal = () => {
            modal.hidden = false;
            document.body.classList.add('project-access-modal-open');
            window.setTimeout(() => modal.classList.add('is-open'), 10);
          };
          const closeModal = () => {
            modal.classList.remove('is-open');
            document.body.classList.remove('project-access-modal-open');
            window.setTimeout(() => { modal.hidden = true; }, 220);
          };

          accessButton.addEventListener('click', openModal);
          closeItems.forEach((item) => item.addEventListener('click', closeModal));
          document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !modal.hidden) closeModal();
          });
        })();
      </script>
    `,
  });
}

module.exports = { projectsPage, projectDetailPage };
