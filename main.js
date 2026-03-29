let titleMobile = document.querySelector('.title-mobile');
let navUl = document.querySelector('nav ul');
let navTitleMobileSpan = document.querySelector('nav .title-mobile span');

titleMobile.addEventListener('click', () => {
    navUl.classList.toggle('open');
    navTitleMobileSpan.classList.toggle('open');
});