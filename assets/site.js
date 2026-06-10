const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('[data-current-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  const status = contactForm.querySelector('[data-form-status]');

  if (new URLSearchParams(window.location.search).get('sent') === '1') {
    status.textContent = 'Thank you. Your message has been sent to RideStory support.';
    status.classList.add('is-success');
  }

  contactForm.addEventListener('submit', () => {
    status.textContent = 'Sending your message…';
  });
}
