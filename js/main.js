console.log('main.js beginning')

import { hideNavbar } from './components/hide-navbar-onscroll.js';
// import { displayCookieNotice } from './components/hide-cookie-notice.js';
// import { active } from './components/active-menu.js';
// import { insertNews } from './components/insert-news.js';

window.onscroll = hideNavbar;
// displayCookieNotice();

// console.log('main.js before calling active()')
// active();
// console.log('main.js after calling active()')

// insertNews();