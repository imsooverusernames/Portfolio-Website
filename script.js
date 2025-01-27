// darkmode code
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    darkmode = 'active';
}
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    darkmode = null;
}

if (darkmode === 'active') {
    enableDarkMode();
}

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
});

// Navbar Code
const navLinks = document.querySelectorAll('.nav-link');
const slidingIndicator = document.getElementById('sliding-indicator');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY;

  navLinks.forEach((link, index) => {
    const section = document.querySelector(link.getAttribute('href'));

    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      const linkRect = link.getBoundingClientRect();
      const navRect = link.closest('nav').getBoundingClientRect();

      slidingIndicator.style.width = `${linkRect.width + 30}px`;
      slidingIndicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;

      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

window.dispatchEvent(new Event('scroll'));

// Isometric text code
var text = document.getElementById('isometric');
var shadow = '';
for (var i = 0; i < 10; i++) {
    shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #222222';
}

text.style.textShadow = shadow;

function applyIsometricShadow(element, color = '#222222', layers = 15) {
    let shadow = '';
    for (let i = 0; i < layers; i++) {
        shadow += (shadow ? ',' : '') + -i + 'px ' + i + 'px 0 ' + color;
    }
    element.style.boxShadow = shadow;
}

document.querySelectorAll('.isometric-container').forEach(container => {
    applyIsometricShadow(container);
});

// Toast code
let toastBox = document.getElementById('toast-container');
const svgCheckCircle = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`;
let emailMsg =  `<div class="toast-icon">${svgCheckCircle}</div> Email address copied to clipboard`;


function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}
