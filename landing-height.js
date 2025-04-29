function adjustLandingHeight() {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const landing = document.querySelector('#landing');
  const scrolling = document.querySelector('#scrolling'); // updated to wrap the scrolling-text section

  if (header && nav && landing && scrolling) {
    const headerHeight = header.offsetHeight;
    const navHeight = nav.offsetHeight;
    const scrollingHeight = scrolling.offsetHeight;

    const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    const landingHeight = Math.max(viewportHeight - headerHeight - navHeight - scrollingHeight, 200);
    landing.style.height = `${landingHeight}px`;
  }
}

window.addEventListener('load', adjustLandingHeight);
window.addEventListener('resize', adjustLandingHeight);