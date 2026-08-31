/* ==========================================================================
   SINA — Freelance Web Designer & Developer
   جاوااسکریپت اصلی سایت: داده‌ها، رندر، تعاملات
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     لینک‌های تماس — این آبجکت را برای تغییر لینک‌ها ویرایش کنید
     ------------------------------------------------------------------------ */
  const contactLinks = {
    linkedin: "https://www.linkedin.com/in/sina-atapour",
    instagram: "https://www.instagram.com/30._.pv",
    telegram: "https://t.me/sinamata",
    email: "mailto:sinaata11k@gmail.com"
  };

  /* ------------------------------------------------------------------------
     داده‌های پروژه‌ها (پروژه‌های مفهومی — نه کلاینت واقعی)
     ------------------------------------------------------------------------ */
  const projects = [
    {
      num: "01",
      name: "ZD Shoes",
      category: "E-commerce / Fashion",
      concept: true,
      desc: "A premium sneaker store concept built around bold product photography and a fast checkout flow.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "assets/projects/zdshose.png",
      overview: "ZD Shoes is a concept e-commerce experience for a sneaker brand that wanted its product photography to do the talking, without a cluttered layout getting in the way.",
      challenge: "Sneaker shoppers browse fast and compare often. The layout needed to keep large, high-quality product imagery front and center while still surfacing filtering and quick specs without extra clicks.",
      solution: "A grid-based catalog with generous imagery, a sticky filter rail, and a streamlined product page that keeps size selection and checkout within a single scroll.",
      features: ["Editorial product grid", "Sticky filters and quick-view", "Simplified single-scroll checkout", "Fully responsive product gallery"]
    },
    {
      num: "02",
      name: "ProFix",
      category: "Services / Technology",
      concept: true,
      desc: "A modern mobile repair service platform focused on clear pricing and fast booking.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "assets/projects/profix.png",
      overview: "ProFix is a concept platform for a mobile and tablet repair business, designed to make pricing and booking transparent from the first screen.",
      challenge: "Repair services often lose customers to confusing pricing pages and multi-step contact forms. The site needed to answer 'how much, how long, how do I book' immediately.",
      solution: "A device-first pricing table, a three-step booking flow, and a status-driven layout that mirrors how a repair shop actually operates.",
      features: ["Device-based pricing lookup", "Three-step booking flow", "Service status indicators", "Mobile-first layout"]
    },
    {
      num: "03",
      name: "BeautyShop",
      category: "E-commerce / Beauty",
      concept: true,
      desc: "A premium cosmetics e-commerce concept with a soft, editorial visual language.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "assets/projects/beautyshop.png",
      overview: "BeautyShop is a concept storefront for a cosmetics brand, built around a softer editorial tone that still performs like a modern e-commerce site.",
      challenge: "Beauty products sell on texture, tone, and trust. The design needed warmth and softness without sacrificing the speed and clarity a store needs to convert.",
      solution: "A muted, editorial palette, close-up product photography treatment, and a simplified cart and checkout to keep friction low.",
      features: ["Editorial product storytelling", "Shade and variant selector", "Lightweight cart drawer", "Optimized image loading"]
    },
    {
      num: "04",
      name: "AirFlow Industrial",
      category: "B2B / Industrial",
      concept: true,
      desc: "A professional industrial company website built for credibility and technical clarity.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "assets/projects/air.png",
      overview: "AirFlow Industrial is a concept website for a B2B industrial equipment company whose buyers need technical confidence, not marketing flourish.",
      challenge: "Industrial buyers research thoroughly before contacting sales. The site had to present technical specifications and capabilities clearly, while still feeling like a modern, trustworthy company.",
      solution: "A structured, document-like layout with clear specification tables, a capabilities overview, and a direct path to request a quote.",
      features: ["Structured specification tables", "Capabilities overview", "Request-a-quote flow", "Print-friendly technical pages"]
    },
    {
      num: "05",
      name: "Maison",
      category: "Hospitality / Restaurant",
      concept: true,
      desc: "A premium restaurant website concept centered on atmosphere and reservations.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "assets/projects/maison.jpg",
      overview: "Maison is a concept website for a restaurant that wanted its site to feel like an extension of the dining room — warm, considered, and unhurried.",
      challenge: "Restaurant sites often bury the two things people actually want: the menu and a way to book a table. The design needed atmosphere without hiding either.",
      solution: "A full-bleed imagery-led homepage, an easy-to-scan menu layout, and a reservation section placed within one scroll of landing.",
      features: ["Full-bleed atmospheric imagery", "Scannable menu layout", "Inline reservation section", "Location and hours at a glance"]
    },
    {
      num: "06",
      name: "Estate",
      category: "Real Estate / Property",
      concept: true,
      desc: "A modern real estate platform concept built around fast property discovery.",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "assets/projects/estate.jpg",
      overview: "Estate is a concept real estate platform designed for buyers who want to filter, compare, and shortlist properties quickly.",
      challenge: "Property listings live or die on how easily someone can filter down to what matters to them and get a real sense of the space.", 
      solution: "A map-adjacent listing grid, clear filtering by price and type, and a detail page that leads with photography and key facts.",
      features: ["Filterable listing grid", "Map-adjacent browsing", "Detail-first property pages", "Saved listings pattern"]
    }
  ];

  /* ------------------------------------------------------------------------
     داده‌های سرویس‌ها
     ------------------------------------------------------------------------ */
  const services = [
    {
      num: "01",
      title: "Web Design",
      desc: "Custom visual systems and modern website experiences.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><circle cx="6.5" cy="6.5" r="0.6"/></svg>`
    },
    {
      num: "02",
      title: "Frontend Development",
      desc: "Fast, responsive and maintainable interfaces.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12"/></svg>`
    },
    {
      num: "03",
      title: "E-commerce",
      desc: "Modern online stores designed around conversion.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M2 3h2l2.6 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H5.2"/></svg>`
    },
    {
      num: "04",
      title: "Landing Pages",
      desc: "High-converting landing pages for products and campaigns.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4h16v6H4zM4 14h10v6H4zM17 14h3v6h-3z"/></svg>`
    },
    {
      num: "05",
      title: "UI/UX Design",
      desc: "User-centered interfaces that balance usability and aesthetics.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`
    },
    {
      num: "06",
      title: "Website Redesign",
      desc: "Transforming outdated websites into modern digital experiences.",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 12a9 9 0 1 1 3 6.7"/><path d="M3 21v-5h5"/></svg>`
    }
  ];

  /* ------------------------------------------------------------------------
     رندر پروژه‌ها
     ------------------------------------------------------------------------ */
  const workGrid = document.getElementById('workGrid');
  workGrid.innerHTML = projects.map((p, i) => `
    <article class="work-card reveal" data-index="${i}" tabindex="0" role="button"
      aria-label="View ${p.name} project details">
      <div class="work-card__top">
        <span class="work-card__num">${p.num}</span>
        <span class="work-card__concept">Concept Project</span>
      </div>
      <div class="work-card__media">
        <img src="${p.img}" alt="${p.name} — ${p.category} concept mockup" loading="lazy" width="640" height="480">
      </div>
      <p class="work-card__cat">${p.category}</p>
      <h3 class="work-card__title">${p.name} <span class="arrow" aria-hidden="true">↗</span></h3>
      <p class="work-card__desc">${p.desc}</p>
      <div class="work-card__tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
    </article>
  `).join('');

  /* ------------------------------------------------------------------------
     رندر سرویس‌ها
     ------------------------------------------------------------------------ */
  const servicesGrid = document.getElementById('servicesGrid');
  servicesGrid.innerHTML = services.map(s => `
    <div class="service-card reveal">
      <div class="service-card__top">
        <span class="service-card__num">${s.num}</span>
        <span class="service-card__icon">${s.icon}</span>
      </div>
      <h3 class="service-card__title">${s.title}</h3>
      <p class="service-card__desc">${s.desc}</p>
    </div>
  `).join('');

  /* ------------------------------------------------------------------------
     آیکون‌های شبکه‌های اجتماعی (SVG داخلی — بدون وابستگی به فایل خارجی)
     ------------------------------------------------------------------------ */
  const socialIcons = {
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 8.5v9M6.5 5.2a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM10.7 17.5v-5.2c0-1.9 1.2-3 2.9-3 1.6 0 2.9 1 2.9 3v5.2M10.7 17.5v-5.9"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4.5 7l7.5 6 7.5-6"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 4.5 3 11.2l5.4 1.9M20.5 4.5 17.8 19 8.4 13.1M20.5 4.5 8.4 13.1M8.4 13.1v5.1l3-3.1"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none"/></svg>`
  };

  /* ------------------------------------------------------------------------
     رندر لینک‌های تماس مستقیم و فوتر
     ------------------------------------------------------------------------ */
  const directLabels = { linkedin: "LinkedIn", email: "Email", telegram: "Telegram", instagram: "Instagram" };

  const contactDirect = document.getElementById('contactDirect');
  contactDirect.innerHTML = Object.entries(contactLinks).map(([key, url]) => `
    <a class="contact__link" href="${url}" target="${key === 'email' ? '_self' : '_blank'}" rel="noopener">
      <span class="contact__link-label">
        <span class="contact__link-icon" aria-hidden="true">${socialIcons[key]}</span>
        ${directLabels[key]}
      </span>
      <span class="arrow" aria-hidden="true">↗</span>
    </a>
  `).join('');

  const footerSocial = document.getElementById('footerSocial');
  footerSocial.innerHTML = Object.entries(contactLinks).map(([key, url]) => `
    <a href="${url}" target="${key === 'email' ? '_self' : '_blank'}" rel="noopener" aria-label="${directLabels[key]}">
      <span aria-hidden="true">${socialIcons[key]}</span>
    </a>
  `).join('');

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------------
     مودال جزئیات پروژه
     ------------------------------------------------------------------------ */
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');
  let lastFocusedEl = null;

  function openModal(index) {
    const p = projects[index];
    modalBody.innerHTML = `
      <div class="modal__media">
        <img src="${p.img}" alt="${p.name} project preview" loading="lazy">
      </div>
      <p class="modal__cat">${p.category} · Concept Project</p>
      <h3 class="modal__title" id="modalTitle">${p.name}</h3>

      <div class="modal__section">
        <h4>Overview</h4>
        <p>${p.overview}</p>
      </div>
      <div class="modal__section">
        <h4>Challenge</h4>
        <p>${p.challenge}</p>
      </div>
      <div class="modal__section">
        <h4>Solution</h4>
        <p>${p.solution}</p>
      </div>
      <div class="modal__section">
        <h4>Key Features</h4>
        <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      <div class="modal__section">
        <h4>Tech Stack</h4>
        <div class="modal__tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
      </div>

      <div class="modal__footer">
        ${p.name === "Maison" ? `<a class="modal__demo-note" href="https://sonaatapour-coder.github.io/restaurant-demo/#story" target="_blank" rel="noopener noreferrer">View Live Demo</a>` : p.name === "ProFix" ? `<a class="modal__demo-note" href="https://sonaatapour-coder.github.io/proofix-demo/" target="_blank" rel="noopener noreferrer">View Live Demo</a>` : `<span class="modal__demo-note">Demo coming soon</span>`}
      </div>
    `;
    lastFocusedEl = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  workGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.work-card');
    if (card) openModal(Number(card.dataset.index));
  });
  workGrid.addEventListener('keydown', (e) => {
    const card = e.target.closest('.work-card');
    if (card && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openModal(Number(card.dataset.index));
    }
  });

  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  /* ------------------------------------------------------------------------
     ناوبری: تغییر حالت هنگام اسکرول + منوی موبایل + لینک فعال
     ------------------------------------------------------------------------ */
  const siteNav = document.getElementById('siteNav');
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav__links a, .mobile-menu a');

  function toggleMenu(force) {
    const isOpen = force !== undefined ? force : !mobileMenu.classList.contains('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  }

  navToggle.addEventListener('click', () => toggleMenu());
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  /* ------------------------------------------------------------------------
     پیشرفت اسکرول + وضعیت ناوبری + دکمه بازگشت به بالا + بخش فعال
     ------------------------------------------------------------------------ */
  const scrollProgress = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');
  const sections = document.querySelectorAll('main section[id]');

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';

    siteNav.classList.toggle('is-scrolled', scrollTop > 12);

    backToTop.hidden = scrollTop < 480;
    backToTop.classList.toggle('is-visible', scrollTop >= 480);

    let current = '';
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ------------------------------------------------------------------------
     انیمیشن آشکارسازی هنگام اسکرول
     ------------------------------------------------------------------------ */
  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealItems.forEach(el => revealObserver.observe(el));

  /* ------------------------------------------------------------------------
     مکان‌نمای سفارشی (فقط دسکتاپ با ماوس)
     ------------------------------------------------------------------------ */
  const cursorDot = document.getElementById('cursorDot');
  const isCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  if (!isCoarsePointer) {
    window.addEventListener('mousemove', (e) => {
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
      cursorDot.classList.add('is-active');
    });
    document.addEventListener('mouseleave', () => cursorDot.classList.remove('is-active'));

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, .work-card')) {
        cursorDot.classList.add('is-hovering');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button, .work-card')) {
        cursorDot.classList.remove('is-hovering');
      }
    });
  }

  /* ------------------------------------------------------------------------
     اعتبارسنجی فرم تماس (سمت کاربر — سایت استاتیک است)
     ------------------------------------------------------------------------ */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  function setError(fieldId, message) {
    const row = document.getElementById(fieldId).closest('.form__row');
    const errorEl = document.getElementById('err-' + fieldId);
    row.classList.toggle('has-error', Boolean(message));
    if (errorEl) errorEl.textContent = message || '';
  }

  function validateForm(data) {
    let valid = true;

    if (!data.name.trim()) { setError('name', 'Please enter your name.'); valid = false; }
    else setError('name', '');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) { setError('email', 'Please enter a valid email address.'); valid = false; }
    else setError('email', '');

    if (!data.projectType) { setError('projectType', 'Please select a project type.'); valid = false; }
    else setError('projectType', '');

    if (!data.details.trim() || data.details.trim().length < 10) {
      setError('details', 'Please add a few details about your project.');
      valid = false;
    } else setError('details', '');

    return valid;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      name: form.name.value,
      email: form.email.value,
      projectType: form.projectType.value,
      details: form.details.value
    };

    if (!validateForm(data)) {
      formSuccess.classList.remove('is-visible');
      return;
    }

    // این یک سایت کاملاً استاتیک است — فرم پیامی ارسال نمی‌کند،
    // فقط پیام موفقیت را نمایش می‌دهد.
    formSuccess.textContent = `Thanks, ${data.name.split(' ')[0]}. Your message is ready — since this is a static site demo, please reach out directly via one of the links to the left to actually send it.`;
    formSuccess.classList.add('is-visible');
    form.reset();
  });

})();