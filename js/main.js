import { active } from './components/active.js';
import { dsiplayCookieNotcie } from './components/cookie-notice.js';
import { hideNavbar } from './components/navbar-hide.js';
import { insertNews } from './components/news.js';

active();
window.onscroll = hideNavbar;
insertNews();
dsiplayCookieNotcie();