const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

const closeMenu = () => {
    navUl.classList.remove('open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
};

hamburger.addEventListener('click', () => {
    const isOpen = navUl.classList.toggle('open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    document.documentElement.style.overflow = isOpen ? 'hidden' : '';
});

navUl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

AOS.init({
    duration: 700,
    once: true,
    offset: 60,
});
AOS.refresh();