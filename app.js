// Simple client-only navigation; no tracking, accounts, or backend.
const pages = [...document.querySelectorAll('.page')];
const navButtons = [...document.querySelectorAll('.nav-item')];
function navigate(route) {
  if (!document.getElementById(route)) route = 'home';
  pages.forEach(page => page.classList.toggle('active', page.id === route));
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.route === route));
  if (route !== 'home') document.querySelector('.hero').hidden = true;
  else document.querySelector('.hero').hidden = false;
  document.title = `${route === 'home' ? 'Home' : route[0].toUpperCase() + route.slice(1)} | Eagles 3700`;
  window.scrollTo({top: 0, behavior: 'instant'});
}
document.addEventListener('click', event => {
  const button = event.target.closest('[data-route]');
  if (!button) return;
  const route = button.dataset.route;
  if (route) window.location.hash = route;
});
window.addEventListener('hashchange', () => navigate(decodeURIComponent(location.hash.slice(1)) || 'home'));
navigate(decodeURIComponent(location.hash.slice(1)) || 'home');
const showInstall = document.getElementById('showInstall');
showInstall.addEventListener('click', () => {
  const panel = document.getElementById('installInstructions');
  panel.hidden = !panel.hidden;
});
let deferredPrompt;
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault(); deferredPrompt = event;
  const button = document.getElementById('installButton'); button.hidden = false;
  button.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); await deferredPrompt.userChoice;
    deferredPrompt = null; button.hidden = true;
  }, {once: true});
});
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(console.warn));
}
