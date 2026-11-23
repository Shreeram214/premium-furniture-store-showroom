/* ==========================================================================
   WOODORA LIVING — site interactions (vanilla JS, no dependencies)
   All products, prices, testimonials and contact details are DEMO content.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- 1. Business config (placeholders — replace for a live site) ---------- */
  const STORE = {
    name: 'WOODORA LIVING',
    whatsapp: '919876543210', // placeholder number in international format, no "+"
    city: 'Sangli, Maharashtra'
  };

  const img = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

  const CATEGORY_LABEL = {
    living: 'Living Room', bedroom: 'Bedroom', dining: 'Dining Room',
    office: 'Office', decor: 'Home Decor', outdoor: 'Outdoor'
  };

  /* ---------- 2. Product catalogue (fictional sample data) ---------- */
  const PRODUCTS = [
    {
      id: 'nordic-comfort-sofa', name: 'Nordic Comfort Sofa', category: 'living', price: 42999,
      material: 'Premium Fabric', extra: ['Style', 'Modern'], badge: 'best',
      image: '1555041469-a586c61ea9bc',
      dims: '84" W x 36" D x 33" H (3-seater)',
      colours: [['Forest Teal', '#2F5D5A'], ['Oat Beige', '#D8C8B2'], ['Charcoal', '#3B3936']],
      desc: 'A relaxed three-seater with soft, deep cushions and slim tapered legs. Clean Scandinavian lines make it easy to style in both compact apartments and larger living rooms.',
      features: ['Deep seat with plush back cushions', 'Solid tapered wooden legs', 'Removable cushion covers for easy cleaning', 'Also available as 2-seater (on request)']
    },
    {
      id: 'walnut-king-bed', name: 'Walnut King Bed', category: 'bedroom', price: 38999,
      material: 'Engineered Wood', extra: ['Size', 'King Size'], badge: 'best',
      image: '1617104678098-de229db51175',
      dims: '78" x 72" mattress size · 82" W x 86" L x 40" H',
      colours: [['Walnut', '#6A4A35'], ['Dark Wenge', '#3E2C22']],
      desc: 'A grounded king-size bed with a warm walnut finish and a padded headboard for comfortable reading. Designed to anchor the room without overwhelming it.',
      features: ['Padded upholstered headboard', 'Hydraulic under-bed storage option', 'Sturdy slatted base support', 'Matching bedside tables available']
    },
    {
      id: 'oakwood-dining-set', name: 'Oakwood Dining Set', category: 'dining', price: 32499,
      material: 'Solid Wood', extra: ['Seating', '6 Seater'], badge: 'new',
      image: '1577140917170-285929fb55b7',
      dims: 'Table: 72" L x 36" W x 30" H',
      colours: [['Natural Oak', '#B98F5F'], ['Honey Teak', '#9A6A3C']],
      desc: 'A six-seater dining set in a light oak tone, made for long family dinners and festive gatherings. Comfortable chairs with gently curved backrests.',
      features: ['Six chairs with curved backrests', 'Rounded table corners for safety', 'Easy-wipe finish for daily use', 'Bench seating option on request']
    },
    {
      id: 'luxe-recliner-chair', name: 'Luxe Recliner Chair', category: 'living', price: 19999,
      material: 'Premium Upholstery', extra: ['Type', 'Single Seater'], badge: 'best',
      image: '1506898667547-42e22a46e125',
      dims: '34" W x 38" D x 40" H',
      colours: [['Slate Blue', '#5C6F89'], ['Mocha', '#6E5644'], ['Stone Grey', '#8E8B86']],
      desc: 'Your favourite seat after a long day. Generous padding, supportive arms and a smooth recline make it perfect for reading, TV time or an afternoon nap.',
      features: ['Smooth manual recline mechanism', 'High-density foam seat', 'Supportive padded armrests', 'Fits neatly in compact corners']
    },
    {
      id: 'minimalist-wardrobe', name: 'Minimalist Wardrobe', category: 'bedroom', price: 29999,
      material: 'Engineered Wood', extra: ['Design', 'Sliding Door'], badge: 'new',
      image: '1558997519-83ea9252edf8',
      dims: '72" W x 24" D x 84" H',
      colours: [['Warm Teak', '#9B6B43'], ['Frosty White', '#EDEBE6'], ['Walnut', '#6A4A35']],
      desc: 'A sleek sliding-door wardrobe that saves floor space and keeps everything organised. Thoughtful interiors with hanging space, shelves and drawers.',
      features: ['Soft-glide sliding doors', 'Hanging rail plus adjustable shelves', 'Two internal drawers', 'Custom sizes available on request']
    },
    {
      id: 'executive-office-desk', name: 'Executive Office Desk', category: 'office', price: 15999,
      material: 'Wood Finish', extra: ['Style', 'Contemporary'],
      image: '1518455027359-f3f8164ba6bd',
      dims: '54" W x 26" D x 30" H',
      colours: [['Light Ash', '#CFC3B2'], ['Walnut', '#6A4A35']],
      desc: 'A clean, contemporary desk for home offices and cabins. Plenty of surface space with smart cable management for a tidy setup.',
      features: ['Built-in cable management', 'Side drawer unit', 'Scratch-resistant top', 'Pairs with ergonomic office chairs']
    },
    {
      id: 'modern-coffee-table', name: 'Modern Coffee Table', category: 'living', price: 8499,
      material: 'Wood and Metal', extra: ['Shape', 'Round, nesting'], badge: 'new',
      image: '1583847268964-b28dc8f51f92',
      dims: 'Large: 32" Dia x 17" H · Small: 22" Dia x 20" H',
      colours: [['Natural Wood', '#A97F57'], ['Black Metal', '#2B2A28']],
      desc: 'A pair of nesting round tables in warm wood with slim metal accents. Use them together or separately as side tables.',
      features: ['Set of two nesting tables', 'Rounded edges', 'Powder-coated metal details', 'Lightweight and easy to move']
    },
    {
      id: 'elegant-dressing-table', name: 'Elegant Dressing Table', category: 'bedroom', price: 12999,
      material: 'Engineered Wood', extra: ['Includes', 'Round Mirror'],
      image: '1556020685-ae41abfc9365',
      dims: '42" W x 16" D x 30" H (mirror 24" Dia)',
      colours: [['White & Oak', '#E9E3D9'], ['Walnut', '#6A4A35']],
      desc: 'A light, elegant dressing unit with a round mirror and generous drawer storage for everyday essentials.',
      features: ['Round wall-mount mirror', 'Three soft-close drawers', 'Open shelf for daily items', 'Compact footprint']
    },
    {
      id: 'cove-round-dining-table', name: 'Cove Round Dining Table', category: 'dining', price: 21999,
      material: 'Oak Finish & Moulded Seats', extra: ['Seating', '4 Seater'],
      image: '1519710164239-da123dc03ef4',
      dims: 'Table: 42" Dia x 30" H',
      colours: [['Oak & White', '#E9E3D9'], ['Walnut & Grey', '#6A4A35']],
      desc: 'A compact round dining set for apartments and breakfast corners. Four light, comfortable chairs tuck neatly under the table.',
      features: ['Space-saving round top', 'Four moulded chairs with wooden legs', 'Easy-wipe tabletop', 'Ideal for compact dining areas']
    },
    {
      id: 'ergoflex-office-chair', name: 'ErgoFlex Office Chair', category: 'office', price: 9499,
      material: 'Fabric & Metal Base', extra: ['Type', 'Swivel'], badge: 'new',
      image: '1580480055273-228ff5388ef8',
      dims: '25" W x 25" D x 36–40" H',
      colours: [['Stone Grey', '#B8B1A7'], ['Charcoal', '#3B3936']],
      desc: 'A calm, minimal swivel chair for home offices and cabins, with a supportive curved back and smooth height adjustment.',
      features: ['360° swivel with smooth castors', 'Gas-lift height adjustment', 'Curved supportive backrest', 'Breathable fabric upholstery']
    },
    {
      id: 'arc-bookshelf', name: 'Arc Open Bookshelf', category: 'decor', price: 14499,
      material: 'Engineered Wood', extra: ['Design', 'Open shelving'],
      image: '1594620302200-9a762244a156',
      dims: '48" W x 12" D x 78" H',
      colours: [['Natural Oak', '#B98F5F'], ['Walnut', '#6A4A35']],
      desc: 'A tall open bookshelf that doubles as a display unit for books, plants and decor. Modular sections can be extended on request.',
      features: ['Adjustable shelf heights', 'Wall-anchoring kit included', 'Extendable modular sections', 'Works as a room divider']
    },
    {
      id: 'solace-side-table', name: 'Solace Side Table', category: 'decor', price: 4999,
      material: 'Wood and Metal', extra: ['Use', 'Bedside / sofa side'],
      image: '1499933374294-4584851497cc',
      dims: '16" Dia x 22" H',
      colours: [['White & Oak', '#E9E3D9'], ['Black & Walnut', '#2B2A28']],
      desc: 'A compact round side table for coffee, books or a lamp. Easy to place beside sofas, beds and reading chairs.',
      features: ['Compact round top', 'Splayed wooden legs', 'Light and easy to move', 'Mix-and-match colours']
    },
    {
      id: 'terrace-lounge-chair', name: 'Terrace Lounge Chair', category: 'outdoor', price: 9999,
      material: 'Weather-treated Wood', extra: ['Use', 'Garden & balcony'], badge: 'new',
      image: '1506439773649-6e0eb8cfb237',
      dims: '24" W x 26" D x 36" H',
      colours: [['Teak Brown', '#9A6A3C'], ['Natural', '#C9A57A']],
      desc: 'A classic wooden chair for gardens, terraces and balconies. Pair it with an outdoor table for morning tea in the open.',
      features: ['Treated finish for outdoor use', 'Optional seat cushion', 'Stackable design', 'Matching outdoor table available']
    }
  ];

  /* ---------- 3. Testimonials & FAQ (demo content) ---------- */
  const TESTIMONIALS = [
    { name: 'Priya Kulkarni', place: 'Sangli', product: 'Nordic Comfort Sofa', rating: 5,
      text: 'We sat on almost every sofa in the showroom before choosing. The team was patient and helped us pick a size that fits our living room perfectly.' },
    { name: 'Rohan Patil', place: 'Miraj', product: 'Walnut King Bed & Wardrobe', rating: 5,
      text: 'The bedroom set looks even better at home than in the showroom. The walnut finish is warm and the wardrobe storage is really practical.' },
    { name: 'Sneha Deshmukh', place: 'Kolhapur', product: 'Oakwood Dining Set', rating: 4,
      text: 'Our family dinners finally have a proper table. The chairs are comfortable for long meals and the finish is easy to clean.' },
    { name: 'Amit Joshi', place: 'Sangli', product: 'Custom Wardrobe', rating: 5,
      text: 'We had an awkward wall in our bedroom. They helped us plan a custom wardrobe with the exact dimensions and finish we wanted.' }
  ];

  const FAQS = [
    ['Can I visit the showroom before purchasing?', 'Absolutely. We encourage it. Our Sangli showroom is set up as real room settings so you can see, touch and sit on the furniture before deciding. You can message us on WhatsApp to plan your visit.'],
    ['Do you offer custom furniture?', 'Yes. We help with custom sizes, materials and finishes for pieces like wardrobes, beds, TV units, sofas and modular storage. Use the “Request Custom Furniture” form or speak to our team at the showroom.'],
    ['Can I choose different colours and finishes?', 'Many of our products are available in multiple colours and finishes. Options vary by product, so please confirm the available choices with our showroom team.'],
    ['Do you provide home delivery?', 'Delivery options depend on your location and the product. Please share your area with our team, and they will confirm delivery availability and any charges.'],
    ['Can I enquire about furniture prices on WhatsApp?', 'Yes. Tap “Enquire Now” on any product and WhatsApp will open with the product details already filled in. Our team will reply with current pricing and availability.'],
    ['Do you offer furniture for offices?', 'Yes. We offer office desks, office chairs and storage units suitable for home offices, cabins and small commercial spaces.'],
    ['How can I request custom dimensions?', 'Open the “Request Custom Furniture” form, choose the furniture type and enter your preferred dimensions. Photos and measurements of your space help us suggest the right solution.'],
    ['Are all products available in the showroom?', 'Our showroom displays a wide selection, but not every product, size or finish may be on display at all times. Please check with us before your visit if you want to see a specific piece.']
  ];

  /* ---------- Helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const formatINR = (n) => '₹' + n.toLocaleString('en-IN');
  const waLink = (message) => `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(message)}`;

  const toastEl = $('#toast');
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3200);
  }

  function productMessage(p) {
    return `Hello ${STORE.name}, I'm interested in the ${p.name} (${CATEGORY_LABEL[p.category]}, ${formatINR(p.price)}, ${p.material}). ` +
      `Could you share availability, colour options and the best price?`;
  }

  /* ---------- 4. Header: sticky state, mobile menu, active link ---------- */
  const header = $('#siteHeader');
  const hamburger = $('#hamburger');
  const overlay = $('#navOverlay');
  const backToTop = $('#backToTop');

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    backToTop.classList.toggle('show', y > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    document.body.classList.toggle('no-scroll', open);
    overlay.classList.toggle('show', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  hamburger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  overlay.addEventListener('click', () => setMenu(false));
  $$('#mainNav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 1080) setMenu(false); });

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Active navigation state based on the section in view
  const navLinks = $$('.main-nav .nav-link');
  const sectionMap = {
    home: 'home', about: 'about', categories: 'collection', collection: 'collection', 'new-arrivals': 'collection',
    living: 'living', bedroom: 'bedroom', custom: 'bedroom', why: 'about', materials: 'about', showroom: 'about',
    testimonials: 'about', faq: 'contact', enquiry: 'contact', contact: 'contact'
  };
  let currentFilter = 'all';
  function setActiveNav(target) {
    navLinks.forEach((l) => {
      const href = l.getAttribute('href').slice(1);
      let match = href === target;
      if (target === 'collection' && href === 'collection') {
        const f = l.dataset.filterLink;
        match = f === currentFilter || (f === 'all' && !['dining', 'office'].includes(currentFilter));
      }
      l.classList.toggle('active', match);
    });
  }
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && sectionMap[e.target.id]) setActiveNav(sectionMap[e.target.id]);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(sectionMap).forEach((id) => { const s = document.getElementById(id); if (s) sectionObserver.observe(s); });

  /* ---------- 5. Product grid & filtering ---------- */
  const grid = $('#productGrid');
  const countEl = $('#resultCount');
  const filterBtns = $$('.filter-btn');

  function cardHTML(p, i) {
    const badge = p.badge === 'new' ? '<span class="badge badge-new">New Arrival</span>'
      : p.badge === 'best' ? '<span class="badge badge-best">Bestseller</span>' : '';
    return `
      <article class="product-card" style="animation-delay:${i * 60}ms">
        <div class="pc-media" data-view="${p.id}" role="button" tabindex="0" aria-label="View details of ${p.name}">
          <img loading="lazy" decoding="async" src="${img(p.image, 640)}" alt="${p.name}, ${p.material.toLowerCase()}" width="640" height="640">
          ${badge}
        </div>
        <div class="pc-body">
          <span class="pc-cat">${CATEGORY_LABEL[p.category]}</span>
          <h3>${p.name}</h3>
          <p class="pc-material"><i class="fa-solid fa-layer-group" aria-hidden="true"></i> ${p.material} · ${p.extra[1]}</p>
          <p class="pc-price">${formatINR(p.price)} <small>onwards</small></p>
          <div class="pc-actions">
            <button type="button" class="btn btn-outline" data-view="${p.id}">View Details</button>
            <a class="btn btn-primary" href="${waLink(productMessage(p))}" target="_blank" rel="noopener">Enquire Now</a>
          </div>
        </div>
      </article>`;
  }

  function renderProducts(filter) {
    currentFilter = filter;
    const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
    grid.innerHTML = list.length
      ? list.map(cardHTML).join('')
      : `<div class="empty-state"><h3>More pieces in the showroom</h3><p>Ask us about the full range in this category.</p>
         <a class="btn btn-primary btn-sm" href="${waLink(`Hello ${STORE.name}, I'd like to see your ${CATEGORY_LABEL[filter]} furniture.`)}" target="_blank" rel="noopener">Ask on WhatsApp</a></div>`;
    countEl.textContent = `Showing ${list.length} ${list.length === 1 ? 'piece' : 'pieces'}` +
      (filter === 'all' ? ' across all categories' : ` in ${CATEGORY_LABEL[filter]}`);
    filterBtns.forEach((b) => {
      const on = b.dataset.filter === filter;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', String(on));
    });
  }
  filterBtns.forEach((b) => b.addEventListener('click', () => renderProducts(b.dataset.filter)));
  renderProducts('all');

  // Category cards / buttons elsewhere: filter and scroll to the catalogue
  function filterAndScroll(filter) {
    renderProducts(filter);
    $('#collection').scrollIntoView({ behavior: 'smooth' });
    setActiveNav('collection');
  }
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter-btn]');
    if (btn) { filterAndScroll(btn.dataset.filterBtn); return; }
    const link = e.target.closest('[data-filter-link]');
    if (link) { renderProducts(link.dataset.filterLink); }
  });

  /* ---------- 6. Modals (product details + custom furniture) ---------- */
  let lastFocus = null;
  function openModal(modal) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('no-scroll');
    const dialog = $('.modal-dialog', modal);
    dialog.scrollTop = 0;
    dialog.focus();
  }
  function closeModal(modal) {
    modal.hidden = true;
    if (!$$('.modal').some((m) => !m.hidden) && !document.body.classList.contains('menu-open')) {
      document.body.classList.remove('no-scroll');
    }
    if (lastFocus) lastFocus.focus();
  }
  $$('.modal').forEach((modal) => {
    modal.addEventListener('click', (e) => { if (e.target.closest('[data-close-modal]')) closeModal(modal); });
  });
  document.addEventListener('keydown', (e) => {
    const open = $$('.modal').find((m) => !m.hidden);
    if (!open) return;
    if (e.key === 'Escape') closeModal(open);
    if (e.key === 'Tab') { // keep focus inside the dialog
      const f = $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', open)
        .filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  const productModal = $('#productModal');
  let activeProduct = null;
  function showProduct(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    activeProduct = p;
    $('#pmImage').src = img(p.image, 1100);
    $('#pmImage').alt = `${p.name} in ${p.colours[0][0].toLowerCase()}`;
    $('#pmCategory').textContent = CATEGORY_LABEL[p.category];
    $('#pmName').textContent = p.name;
    $('#pmPrice').textContent = formatINR(p.price);
    $('#pmDesc').textContent = p.desc;
    $('#pmCat2').textContent = CATEGORY_LABEL[p.category];
    $('#pmMaterial').textContent = p.material;
    $('#pmDims').textContent = p.dims;
    $('#pmExtraLabel').textContent = p.extra[0];
    $('#pmExtra').textContent = p.extra[1];
    $('#pmColours').innerHTML = p.colours.map(([n, c]) => `<span class="swatch"><i style="background:${c}"></i>${n}</span>`).join('');
    $('#pmFeatures').innerHTML = p.features.map((f) => `<li>${f}</li>`).join('');
    $('#pmWhatsapp').href = waLink(productMessage(p));
    openModal(productModal);
  }
  grid.addEventListener('click', (e) => {
    const v = e.target.closest('[data-view]');
    if (v) showProduct(v.dataset.view);
  });
  grid.addEventListener('keydown', (e) => {
    const v = e.target.closest('.pc-media[data-view]');
    if (v && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); showProduct(v.dataset.view); }
  });
  // "Send Enquiry Form" from the modal: prefill the main enquiry form
  $('#pmEnquire').addEventListener('click', () => {
    if (!activeProduct) return;
    closeModal(productModal);
    prefillEnquiry(CATEGORY_LABEL[activeProduct.category], activeProduct.name);
  });

  const customModal = $('#customModal');
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-open-modal]');
    if (!t) return;
    e.preventDefault();
    resetForm($('#customForm'), $('#customSuccess'));
    openModal(document.getElementById(t.dataset.openModal));
  });

  /* ---------- 7. WhatsApp buttons ---------- */
  const WA_MESSAGES = {
    general: `Hello ${STORE.name}, I'd like to know more about your furniture collection.`,
    showroom: `Hello ${STORE.name}, I'd like to visit your showroom in ${STORE.city}. Please share the address and a convenient time.`
  };
  $$('[data-wa]').forEach((a) => {
    a.href = waLink(WA_MESSAGES[a.dataset.wa] || WA_MESSAGES.general);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // Social links are placeholders on the demo
  $$('[data-placeholder-link]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    toast('Social media links will be added for the live website.');
  }));

  /* ---------- 8. Testimonial carousel ---------- */
  const track = $('#carouselTrack');
  const dots = $('#carouselDots');
  track.innerHTML = TESTIMONIALS.map((t, i) => {
    const initials = t.name.split(' ').map((w) => w[0]).join('');
    const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
    return `<div class="slide" role="group" aria-roledescription="slide" aria-label="${i + 1} of ${TESTIMONIALS.length}">
      <div class="t-card">
        <div class="t-stars" aria-label="${t.rating} out of 5 stars">${stars}</div>
        <p class="t-quote">“${t.text}”</p>
        <div class="t-person"><span class="t-avatar" aria-hidden="true">${initials}</span>
          <div><strong>${t.name}</strong><span>${t.product} · ${t.place}</span></div></div>
      </div></div>`;
  }).join('');
  dots.innerHTML = TESTIMONIALS.map((_, i) => `<button type="button" role="tab" aria-label="Show testimonial ${i + 1}" aria-selected="false"></button>`).join('');

  let slide = 0, autoTimer;
  function goTo(i) {
    slide = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    track.style.transform = `translateX(-${slide * 100}%)`;
    $$('button', dots).forEach((d, j) => d.setAttribute('aria-selected', String(j === slide)));
    $$('.slide', track).forEach((s, j) => s.setAttribute('aria-hidden', String(j !== slide)));
  }
  function startAuto() { stopAuto(); autoTimer = setInterval(() => goTo(slide + 1), 6000); }
  function stopAuto() { clearInterval(autoTimer); }
  $('#prevSlide').addEventListener('click', () => { goTo(slide - 1); startAuto(); });
  $('#nextSlide').addEventListener('click', () => { goTo(slide + 1); startAuto(); });
  $$('button', dots).forEach((d, i) => d.addEventListener('click', () => { goTo(i); startAuto(); }));
  const carousel = $('#testimonialCarousel');
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);
  // Touch swipe
  let touchX = null;
  carousel.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; stopAuto(); }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) goTo(slide + (dx < 0 ? 1 : -1));
    touchX = null; startAuto();
  });
  goTo(0); startAuto();

  /* ---------- 9. FAQ accordion ---------- */
  const faqList = $('#faqList');
  faqList.innerHTML = FAQS.map(([q, a], i) => `
    <div class="faq-item">
      <h3 style="margin:0;font:inherit"><button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}" id="faq-q-${i}">
        ${q}<i class="fa-solid fa-plus" aria-hidden="true"></i></button></h3>
      <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><div><p>${a}</p></div></div>
    </div>`).join('');
  faqList.addEventListener('click', (e) => {
    const q = e.target.closest('.faq-q');
    if (!q) return;
    const item = q.closest('.faq-item');
    const willOpen = !item.classList.contains('open');
    $$('.faq-item', faqList).forEach((it) => { it.classList.remove('open'); $('.faq-q', it).setAttribute('aria-expanded', 'false'); });
    if (willOpen) { item.classList.add('open'); q.setAttribute('aria-expanded', 'true'); }
  });

  /* ---------- 10. Form validation (frontend demo, nothing is sent) ---------- */
  const RULES = {
    name: (v) => v.trim().length >= 2 || 'Please enter your name.',
    phone: (v) => /^(?:\+?91[\s-]?|0)?[6-9]\d{9}$/.test(v.replace(/[\s-]/g, '')) || 'Enter a valid 10-digit Indian mobile number (starting 6–9).',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid email address.',
    required: (v) => v.trim() !== '' || 'Please select an option.'
  };
  function validateField(el) {
    const field = el.closest('.field');
    const err = $('.error', field);
    let result = true;
    if (el.required) {
      if (el.name === 'name') result = RULES.name(el.value);
      else if (el.name === 'phone') result = RULES.phone(el.value);
      else if (el.name === 'email') result = RULES.email(el.value);
      else result = RULES.required(el.value);
    }
    const ok = result === true;
    field.classList.toggle('invalid', !ok);
    el.setAttribute('aria-invalid', String(!ok));
    if (err) err.textContent = ok ? '' : result;
    return ok;
  }
  function validateForm(form) {
    const fields = $$('[required]', form);
    const results = fields.map(validateField);
    const firstBad = fields[results.indexOf(false)];
    if (firstBad) firstBad.focus();
    return !firstBad;
  }
  function resetForm(form, success) {
    form.reset();
    form.hidden = false;
    $$('.field', form).forEach((f) => f.classList.remove('invalid'));
    $$('.error', form).forEach((e) => { e.textContent = ''; });
    success.hidden = true;
  }
  $$('form').forEach((form) => {
    form.addEventListener('blur', (e) => { if (e.target.required && e.target.value) validateField(e.target); }, true);
    form.addEventListener('input', (e) => { if (e.target.closest('.field.invalid')) validateField(e.target); });
  });

  // Main enquiry form
  const enquiryForm = $('#enquiryForm');
  const enquirySuccess = $('#enquirySuccess');
  enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(enquiryForm)) return;
    const d = Object.fromEntries(new FormData(enquiryForm));
    const msg = `Hello ${STORE.name}, I'm ${d.name}. I'm interested in ${d.category}` +
      (d.product ? ` (${d.product})` : '') + (d.budget ? `, budget ${d.budget}` : '') + '.' +
      (d.message ? ` ${d.message}` : '');
    $('#enquiryWa').href = waLink(msg);
    $('#enquiryWa').target = '_blank';
    $('#enquiryWa').rel = 'noopener';
    enquirySuccess.hidden = false;
    $('h3', enquirySuccess).focus?.();
  });
  $('#enquiryReset').addEventListener('click', () => resetForm(enquiryForm, enquirySuccess));

  function prefillEnquiry(category, product) {
    resetForm(enquiryForm, enquirySuccess);
    const sel = $('#eqCategory');
    const opt = Array.from(sel.options).find((o) => o.text.startsWith(category.split(' ')[0]));
    if (opt) sel.value = opt.value || opt.text;
    if (product) $('#eqProduct').value = product;
    $('#enquiry').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => $('#eqName').focus({ preventScroll: true }), 700);
  }
  $$('[data-category-prefill]').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    prefillEnquiry(a.dataset.categoryPrefill);
  }));

  // Custom furniture form
  const customForm = $('#customForm');
  const customSuccess = $('#customSuccess');
  customForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(customForm)) return;
    customForm.hidden = true;
    customSuccess.hidden = false;
    $('button', customSuccess).focus();
  });

  /* ---------- 11. Map placeholder (loads a city-level map on request) ---------- */
  $('#loadMap').addEventListener('click', () => {
    const box = $('#mapBox');
    box.innerHTML = '<iframe title="Map of Sangli, Maharashtra (showroom pin placeholder)" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ' +
      'src="https://www.google.com/maps?q=Sangli,+Maharashtra&z=13&output=embed"></iframe>';
  });

  /* ---------- 12. Scroll reveal ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el) => revealObserver.observe(el));
})();
