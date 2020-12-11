/* ===========DARK-LIGHT Theme======================== */
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('#theme-switch-toggle');
addBodyTheme();
switchRef.addEventListener('change', toggleBodyTheme);

function addBodyTheme() {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', Theme.LIGHT);
    }
    if (localStorage.getItem('theme') === Theme.DARK) {
        switchRef.setAttribute('checked', true);
    }
    bodyRef.classList.add(localStorage.getItem('theme'));
}
function toggleBodyTheme() {
    bodyRef.classList.toggle(Theme.LIGHT);
    bodyRef.classList.toggle(Theme.DARK);
    localStorage.setItem('theme', bodyRef.classList.value);
    switchRef.hasAttribute('checked') ?
        switchRef.removeAttribute('checked') :
        switchRef.setAttribute('checked', true);
}
/* ===========End of DARK-LIGHT Theme======================== */
/* ===========Handlebar======================== */
import jsonMenu from '../menu.json';
import dishesTemplate from '../template/dishes.hbs';

const markUp = dishesTemplate(jsonMenu);
const ulRef = document.querySelector('.js-menu');
ulRef.insertAdjacentHTML('beforeend', markUp);