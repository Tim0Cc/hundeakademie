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
  // fetch('common/cookie-notice.html')
  //   .then(res => res.text())
  //   .then(text => {
  //     var cookNotPlaceholder = document.getElementById('cookie-notice-placeholder');
  //     cookNotPlaceholder.insertAdjacentHTML('afterbegin', text);
  //     // hideCookieNotice();
  //   });
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

// console.log('hide-cookie-notice.js');
function hideCookieNotice(event) {
  // console.log('const hideCookieNotice')
  // if (document.getElementById('cookie-notice-placeholder') !== null) {
  //   console.log('if statement');
    const cookieNotice = document.getElementById('cookie-notice')
    const cookieButton = document.getElementById('cookie-button')
    // console.log(cookieNotice + ' ' + cookieButton);
    if (cookieNotice !== null && cookieButton !== null) {
      console.log('2nd if statement');
      cookieNotice.style.bottom = "0";
      cookieButton.addEventListener('click', function() {
        cookieNotice.style.bottom = "-64px";
      });
    }
  // };
  // console.log('const end');
}
// console.log('js end');

hideCookieNotice();

// insert news

function insertNews() {
  if (window.location.pathname === '/') {
    document.getElementById('news-header').innerHTML = "Corona- Zeiten";
    document.getElementById('news-p').innerHTML = "Ich Liebe Hundebesitzer und Hundebesitzerinnen, Liebe Kunden <br>um weiterhin die Versorgung Ihrer Tiere zu gewährleisten, bleibt meine Praxis geöffnet.<br>Bitte kontaktieren Sie mich telefonisch oder per Email, damit wir die Termine sicher und unter Beachtung der gebotenen Maßnahmen vereinbaren können.<br>Ich wünsche Ihnen starke Nerven für diese schwere Zeit<br>Bleiben Sie und Ihre Tiere gesund<br>Nina Bayer"
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