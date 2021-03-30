console.log('main.js beginning')

import { loadCommon } from './components/load-common.js'
import { hideNavbar } from './components/hide-navbar-onscroll.js';
import { hideCookieNotice } from './components/hide-cookie-notice.js';
// import { active } from './components/active-menu.js';
import { insertNews } from './components/insert-news.js';

loadCommon();
window.onscroll = hideNavbar;
hideCookieNotice();
// document.addEventListener('DOMContentLoaded', (e) => {
// });
insertNews();

// console.log('main.js before calling active()')
// active();
// console.log('main.js after calling active()')
