(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.bar');
  const nav = header?.querySelector('nav');
  if (header && nav) {
    const links = [...nav.querySelectorAll('a')];
    const contact = links.find(a => a.hash === '#contact');
    if (contact) {
      const quick = contact.cloneNode(true);
      quick.className = 'mobile-contact';
      quick.textContent = 'Contact ↗';
      header.append(quick);
    }
    const phone = document.querySelector('#contact a[href^="tel:"]');
    if (phone && !header.querySelector('.bar-tel')) {
      const copy = phone.cloneNode(true);
      copy.className = 'header-phone';
      header.insertBefore(copy, nav);
    }
    const menu = document.createElement('details');
    menu.className = 'mobile-menu';
    const summary = document.createElement('summary');
    summary.textContent = 'Menu';
    summary.setAttribute('aria-label', 'Open navigation');
    const panel = document.createElement('div');
    panel.className = 'mobile-links';
    links.forEach(a => { const copy = a.cloneNode(true); copy.className = ''; panel.append(copy); });
    if (phone) { const copy = phone.cloneNode(true); copy.className = ''; panel.append(copy); }
    panel.addEventListener('click', e => { if (e.target.closest('a')) menu.open = false; });
    menu.addEventListener('toggle', () => summary.setAttribute('aria-label', menu.open ? 'Close navigation' : 'Open navigation'));
    menu.addEventListener('keydown', e => { if (e.key === 'Escape') { menu.open = false; summary.focus(); } });
    document.addEventListener('click', e => { if (!menu.contains(e.target)) menu.open = false; });
    menu.append(summary, panel);
    header.append(menu);
  }

  // Real image previews: the hover invitation also works with keyboard and touch.
  const dialog = document.createElement('dialog');
  dialog.className = 'project-viewer';
  dialog.setAttribute('aria-label', 'Project image preview');
  const close = document.createElement('button'); close.type = 'button'; close.className = 'viewer-close'; close.textContent = 'Close ×';
  const picture = document.createElement('img');
  const caption = document.createElement('p');
  dialog.append(close, picture, caption); document.body.append(dialog);
  let opener;
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => opener?.focus({preventScroll:true}));
  document.querySelectorAll('.proj figure, .grid figure, .tiles figure, .band figure, .duo figure, .hero-side figure, .boothe-image, .peck-image').forEach(figure => {
    const img = figure.querySelector('img'); if (!img || img.closest('a,button')) return;
    const button = document.createElement('button'); button.type = 'button'; button.className = 'gallery-open';
    button.setAttribute('aria-label', 'View image: ' + img.alt);
    img.before(button); button.append(img);
    button.addEventListener('click', () => { opener = button; picture.src = img.currentSrc || img.src; picture.alt = img.alt; caption.textContent = img.alt; dialog.showModal(); });
  });

  // Animate on entry without hiding content before JS or waiting for a timed intro.
  if (!reduced.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.animate([{transform:'translateY(22px)',opacity:.65},{transform:'translateY(0)',opacity:1}], {duration:700,easing:'cubic-bezier(.2,.7,.1,1)'});
      observer.unobserve(entry.target);
    }), {threshold:.12});
    document.querySelectorAll('.statement > .big, .sec .lead, .about h2, .contact h2, .focus .big, .why-grid article, .services h2').forEach(el => observer.observe(el));
  }
})();
