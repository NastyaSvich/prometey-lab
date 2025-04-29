document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('expanded');

    if (menu.classList.contains('expanded')) {
      body.style.overflow = 'hidden'; 
    } else {
      body.style.overflow = '';
    }
  });
});