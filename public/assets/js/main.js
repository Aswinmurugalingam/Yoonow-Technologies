(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');


  var pageLoader = document.querySelector('[data-page-loader]');
  var internalNavigationKey = 'yoonowInternalNavigation';
  var loaderMinimumTime = 850;
  var isInternalNavArrival = false;

  try {
    isInternalNavArrival = sessionStorage.getItem(internalNavigationKey) === '1';
    if (isInternalNavArrival) sessionStorage.removeItem(internalNavigationKey);
  } catch (e) {
    isInternalNavArrival = false;
  }

  var loaderStart = Date.now();

  if (isInternalNavArrival && pageLoader) {
    pageLoader.classList.add('is-hidden');
    pageLoader.classList.remove('is-transitioning');
    document.body.classList.remove('page-exiting');
    window.requestAnimationFrame(function () {
      document.documentElement.classList.remove('internal-nav-arrival');
    });
  }

  function hidePageLoader(force) {
    if (!pageLoader) return;
    var minimumVisible = force || isInternalNavArrival ? 0 : loaderMinimumTime;
    var wait = Math.max(0, minimumVisible - (Date.now() - loaderStart));
    window.setTimeout(function () {
      pageLoader.classList.add('is-hidden');
      pageLoader.classList.remove('is-transitioning');
      pageLoader.classList.remove('is-fast-transition');
      document.body.classList.remove('page-exiting');
      document.documentElement.classList.remove('internal-nav-arrival');
    }, wait);
  }

  if (!isInternalNavArrival) {
    window.addEventListener('load', function () { hidePageLoader(false); });
    window.setTimeout(function () { hidePageLoader(true); }, 2800);
  } else {
    hidePageLoader(true);
  }

  window.addEventListener('pageshow', function (event) {
    if (event.persisted) hidePageLoader(true);
  });

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link || !pageLoader) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) return;
    if (link.target && link.target !== '_self') return;
    if (link.hasAttribute('download')) return;

    var href = link.getAttribute('href') || '';
    if (!href || href.indexOf('#') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 || href.indexOf('javascript:') === 0) return;

    var url;
    try { url = new URL(href, window.location.href); } catch (e) { return; }
    if (url.origin !== window.location.origin) return;
    if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return;

    event.preventDefault();
    try { sessionStorage.setItem(internalNavigationKey, '1'); } catch (e) {}
    document.body.classList.add('page-exiting');
    pageLoader.classList.remove('is-hidden');
    pageLoader.classList.remove('is-fast-transition');
    pageLoader.classList.add('is-transitioning');
    window.setTimeout(function () {
      window.location.href = url.href;
    }, loaderMinimumTime);
  });

  var header = document.querySelector('[data-header]');
  function updateHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  var toggle = document.querySelector('[data-nav-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('nav-locked', isOpen);
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        document.body.classList.remove('nav-locked');
      });
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('.tech-chip img').forEach(function (img) {
    img.addEventListener('error', function () {
      var chip = img.closest('.tech-chip');
      var fallback = img.getAttribute('data-fallback-src');
      var simple = img.getAttribute('data-simple-src');
      var triedFallback = img.dataset.triedFallback === 'true';
      var triedSimple = img.dataset.triedSimple === 'true';

      if (fallback && !triedFallback && img.src !== fallback) {
        img.dataset.triedFallback = 'true';
        img.src = fallback;
        return;
      }

      if (simple && !triedSimple && img.src !== simple) {
        img.dataset.triedSimple = 'true';
        img.src = simple;
        return;
      }

      if (chip) chip.classList.add('logo-missing');
    });
    img.addEventListener('load', function () {
      var chip = img.closest('.tech-chip');
      if (chip) chip.classList.remove('logo-missing');
    });
  });


  var countEls = document.querySelectorAll('[data-count-to]');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animateCount(el) {
    if (!el || el.dataset.countDone === 'true') return;

    var target = parseInt(el.getAttribute('data-count-to') || '0', 10);
    var suffix = el.getAttribute('data-count-suffix') || '';
    var parent = el.closest('.stat-item');
    var duration = reducedMotion ? 1 : 1800;
    var startTime = null;

    el.dataset.countDone = 'true';
    el.textContent = '1' + suffix;
    if (parent) parent.classList.add('is-counting');

    function easeOutQuart(progress) {
      return 1 - Math.pow(1 - progress, 4);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var value = Math.max(1, Math.round(target * easeOutQuart(progress)));
      el.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
        if (parent) {
          parent.classList.remove('is-counting');
          parent.classList.add('count-complete');
        }
      }
    }

    requestAnimationFrame(step);
  }

  if (countEls.length && !('IntersectionObserver' in window)) {
    countEls.forEach(function (el) { animateCount(el); });
  } else if (countEls.length) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.45, rootMargin: '0px 0px -20px 0px' });
    countEls.forEach(function (el) { countObserver.observe(el); });
  }


  var processSequences = document.querySelectorAll('[data-process-sequence]');
  if (processSequences.length) {
    if (reducedMotion || !('IntersectionObserver' in window)) {
      processSequences.forEach(function (sequence) {
        sequence.classList.add('is-playing');
      });
    } else {
      var processObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-playing');
            processObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.35, rootMargin: '0px 0px -80px 0px' });
      processSequences.forEach(function (sequence) {
        processObserver.observe(sequence);
      });
    }
  }

  var revealEls = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    document.documentElement.classList.add('no-observer');
  } else if (revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
    setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add('is-visible'); });
    }, 2600);
  }

  var supportsHover = window.matchMedia('(hover: hover)').matches;
  if (supportsHover) {
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      el.addEventListener('mousemove', function (event) {
        var rect = el.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width - 0.5;
        var y = (event.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = 'perspective(900px) rotateX(' + (y * -8).toFixed(2) + 'deg) rotateY(' + (x * 8).toFixed(2) + 'deg) translateZ(7px)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      });
    });

    var stage = document.querySelector('[data-hero-stage]');
    if (stage) {
      window.addEventListener('mousemove', function (event) {
        var x = event.clientX / window.innerWidth - 0.5;
        var y = event.clientY / window.innerHeight - 0.5;
        stage.style.transform = 'rotateX(' + (y * -5).toFixed(2) + 'deg) rotateY(' + (x * 8).toFixed(2) + 'deg)';
      }, { passive: true });
    }
  }

  document.querySelectorAll('[data-lead-form]').forEach(function (form) {
    var note = form.querySelector('.form-note');
    var submitButton = form.querySelector('button[type="submit"]');
    var originalButtonText = submitButton ? submitButton.innerHTML : '';

    function showFormMessage(message, isError) {
      if (!note) return;
      note.classList.add('is-visible');
      note.classList.toggle('is-error', Boolean(isError));
      note.textContent = message;
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var formData = new FormData();
      Array.prototype.forEach.call(form.elements, function (field) {
        if (!field || !field.name || field.disabled) return;

        if (field.type === 'file') {
          Array.prototype.forEach.call(field.files || [], function (file) {
            if (file && file.size > 0) {
              formData.append(field.name || 'attachments', file, file.name);
            }
          });
          return;
        }

        if ((field.type === 'checkbox' || field.type === 'radio') && !field.checked) return;
        formData.append(field.name, field.value || '');
      });

      var honeypot = String(formData.get('website') || '').trim();

      if (honeypot) {
        form.reset();
        return;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
      }
      showFormMessage('Sending your enquiry and attachments to Yoonow Technologies...', false);

      fetch('/api/leads', {
        method: 'POST',
        body: formData
      })
        .then(function (response) {
          return response.json().catch(function () { return {}; }).then(function (data) {
            if (!response.ok || data.ok === false) {
              throw new Error(data.message || 'Unable to submit enquiry right now.');
            }
            return data;
          });
        })
        .then(function () {
          showFormMessage('Thank you. Your enquiry and attached files have been sent to info@yoonowtech.com. We will contact you soon.', false);
          form.reset();
        })
        .catch(function (error) {
          showFormMessage(error.message || 'Form submission is not available right now. Please contact us on WhatsApp at +91 86105 07446 or email info@yoonowtech.com.', true);
        })
        .finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
          }
        });
    });
  });

  var canvas = document.getElementById('networkCanvas');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var width;
    var height;
    var points;
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function buildPoints() {
      var count = Math.min(64, Math.floor((width * height) / 24000));
      points = [];
      for (var i = 0; i < count; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          orange: Math.random() < 0.15
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      points.forEach(function (point) {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > width) point.vx *= -1;
        if (point.y < 0 || point.y > height) point.vy *= -1;
      });

      for (var a = 0; a < points.length; a++) {
        for (var b = a + 1; b < points.length; b++) {
          var dx = points[a].x - points[b].x;
          var dy = points[a].y - points[b].y;
          var distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 136) {
            ctx.strokeStyle = 'rgba(61, 139, 255, ' + ((1 - distance / 136) * 0.18).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[a].x, points[a].y);
            ctx.lineTo(points[b].x, points[b].y);
            ctx.stroke();
          }
        }
      }

      points.forEach(function (point) {
        ctx.fillStyle = point.orange ? 'rgba(255, 107, 44, 0.72)' : 'rgba(61, 139, 255, 0.58)';
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.orange ? 2.2 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduced) requestAnimationFrame(draw);
    }

    resizeCanvas();
    buildPoints();
    draw();

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resizeCanvas();
        buildPoints();
      }, 180);
    });
  }

  document.querySelectorAll('[data-package-switcher]').forEach(function (switcher) {
    var tabs = switcher.querySelectorAll('[data-package-tab]');
    var panels = switcher.querySelectorAll('[data-package-panel]');
    if (!tabs.length || !panels.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var target = tab.getAttribute('data-package-tab');
        if (!target || tab.classList.contains('is-active')) return;

        tabs.forEach(function (item) {
          var active = item === tab;
          item.classList.toggle('is-active', active);
          item.setAttribute('aria-selected', active ? 'true' : 'false');
        });

        panels.forEach(function (panel) {
          var active = panel.getAttribute('data-package-panel') === target;
          panel.classList.toggle('is-active', active);
          if (active) {
            panel.style.animation = 'none';
            panel.offsetHeight;
            panel.style.animation = '';
            panel.querySelectorAll('.dev-package-card').forEach(function (card, index) {
              card.style.animation = 'none';
              card.offsetHeight;
              card.style.setProperty('--package-delay', (index * 90) + 'ms');
              card.style.animation = '';
            });
          }
        });
      });
    });
  });

})();
