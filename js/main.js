import { hideNavbar } from './components/navbar-hide.js';
import { insertNews } from './components/news.js';

window.onscroll = hideNavbar;
insertNews();