export function switchHeader() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const body = document.body;

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('expanded');

      body.style.overflow = menu.classList.contains('expanded') ? 'hidden' : '';
    });
  }
}