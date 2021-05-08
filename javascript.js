console.log('main.js beginning')


// load common

function loadCommon() {
  fetch('common/navbar.html')
    .then(res => res.text())
    .then(text => {
      var navPlaceholder = document.getElementById('navbar-placeholder');
      navPlaceholder.insertAdjacentHTML('afterbegin', text);
    });
  fetch('common/footer.html')
    .then(res => res.text())
    .then(text => {
      var footPlaceholder = document.getElementById('footer-placeholder');
      footPlaceholder.insertAdjacentHTML('afterbegin', text);
    });
}

loadCommon();

// hide navbar on scroll

var prevScrollPos = window.pageYOffset;
let hideNavbar = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-64px";
  }
  prevScrollPos = currentScrollPos;
}

window.onscroll = hideNavbar;


// hide cookie notice

const cookieNotice = document.getElementById('cookie-notice');
const cookieButton = document.getElementById('cookie-button');
function hideCookieNotice() {
    // console.log(cookieButton, cookieNotice);
    if (cookieNotice !== null && cookieButton !== null) {
      // console.log('2nd if statement');
      cookieNotice.style.bottom = "0";
      cookieButton.addEventListener('click', function() {
        cookieNotice.style.bottom = "-64px";
      });
    }
}

hideCookieNotice();

// insert news

function insertNews() {
  if (window.location.pathname === '/') {
    document.getElementById('news-header').innerHTML = "Willkommen !";
    document.getElementById('news-p').innerHTML = "Liebe Hundebesitzer und Hundebesitzerinnen,<br><br>ich freue mich Sie auf meiner neuen Seite begrüßen zu dürfen. <br><br> Hier können Sie sich demnächst über anstehende Workshops und Vorlesungen informieren. <br><br> Ihre Veterinärmedizinerin, <br>  Nina Bayer"
  }
}

insertNews();

// active menu

console.log('active-menu.js beginning');
const nav = document.getElementById('navList');
function active() {
  console.log('active-menu.js active(){} beginning');
  console.log(nav);
  console.log('active-menu.js active(){} after initializing nav');
  if (nav !== null) {
    console.log('active-menu.js active(){} inside the if statement');
    nav.addEventListener('click', function(event) {
      console.log('active-menu.js active(){} inside the if statement in the eventlistener');
      
      var activeLi = nav.querySelectorAll('.active');
      console.log(activeLi);
      if (activeLi !== null) {
        activeLi.classList.remove('active');
      }
      event.target.className = "active";
    })
  }
  console.log('active-menu.js active(){} end');
}
console.log('active-menu.js active(){} after');

active();