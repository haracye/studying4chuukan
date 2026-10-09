// Everything here runs once the page has loaded.
const button = document.getElementById('cta');
let clicks = 0;

button.addEventListener('click', () => {
    clicks += 1;
    button.textContent = clicks === 1 ? 'Clicked once' : `Clicked ${clicks} times`;
});

console.log('script.js loaded — open the DevTools console to see this.');