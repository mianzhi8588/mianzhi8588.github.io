/* Small, dependency-free controls for the academic portfolio. */
(() => {
  const html = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  const themeButton = document.querySelector('.academic-nav__theme');
  const storedTheme = () => {
    try { return localStorage.getItem('theme'); } catch (_) { return null; }
  };
  const setTheme = (theme) => {
    if (theme === 'dark') html.setAttribute('data-theme', 'dark');
    else html.removeAttribute('data-theme');
    themeButton?.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  };
  const followPreference = () => {
    const stored = storedTheme();
    setTheme(stored === 'dark' || stored === 'light' ? stored : preference.matches ? 'dark' : 'light');
  };
  followPreference();
  preference.addEventListener('change', followPreference);
  themeButton?.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', theme); } catch (_) { /* Session-only theme remains available. */ }
    setTheme(theme);
  });
  const nav = document.querySelector('.academic-nav');
  const menuButton = nav?.querySelector('.academic-nav__toggle');
  const setMenu = (open) => {
    nav?.classList.toggle('is-open', open);
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  nav?.querySelectorAll('.academic-nav__links a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
      setMenu(false); menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (nav && !nav.contains(event.target)) setMenu(false);
  });
  window.matchMedia('(min-width: 701px)').addEventListener('change', () => setMenu(false));
  const contactButton = document.querySelector('.author__urls-wrapper button');
  const contactList = document.querySelector('.author__urls');
  if (contactButton && contactList) {
    contactList.id = 'profile-contact-links';
    contactButton.setAttribute('aria-controls', contactList.id);
    contactButton.setAttribute('aria-expanded', 'false');
    contactButton.addEventListener('click', () => {
      const open = contactButton.getAttribute('aria-expanded') !== 'true';
      contactList.classList.toggle('is-open', open);
      contactButton.setAttribute('aria-expanded', String(open));
    });
  }
})();
