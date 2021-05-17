// console.log('main.js beginning')


// load common

const navPlaceholder = document.getElementById('navbar-placeholder');
const footPlaceholder = document.getElementById('footer-placeholder');

function loadCommon() {
  fetch('common/navbar.html')
    .then(res => res.text())
    .then(text => {
      if (navPlaceholder) {
        navPlaceholder.insertAdjacentHTML('afterbegin', text);
      }
    });
  fetch('common/footer.html')
    .then(res => res.text())
    .then(text => {
      if (footPlaceholder) {
      footPlaceholder.insertAdjacentHTML('afterbegin', text);
      }
    });
}

loadCommon();

// hide navbar on scroll

const menu = document.getElementById("menu");

function handleScrollUp() {
  // console.log("UP");
  menu.style.top = "0";
}

function handleScrollDown() {
  // console.log("DOWN");
  menu.style.top = "-64px";
}
// DESKTOP

document.addEventListener("wheel", handleScroll);

function handleScroll(event) {
  if ((event.wheelDelta && event.wheelDelta > 0) || event.deltaY < 0) {
    handleScrollUp();
  } else {
    handleScrollDown();
  }
}

// MOBILE

document.addEventListener("touchmove", handleMove);

var tsy = 0
var te
var tey
function handleMove(e) {
  
  if(e.type == 'touchmove') {
    te = e.changedTouches[0];
    tey = te.screenY;
    // console.log('tsy: ', tsy);
    // console.log('tey: ', tey);
    if(tey >= tsy) {
      // console.log('if');
      handleScrollUp();
    } else {
      // console.log('else');
      handleScrollDown();
    }
  }
  tsy = tey;
  // console.log('tsy2: ', tsy);
}

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

// console.log('active-menu.js beginning');
// const nav = document.getElementById('navList');
// var activeLi = nav.querySelectorAll('.active');
// console.log("activeLi: ", activeLi);
// function active() {
//   // console.log('active-menu.js active(){} beginning');
//   console.log("nav: ", nav);
//   // console.log('active-menu.js active(){} after initializing nav');
//   if (nav !== null) {
//     // console.log('active-menu.js active(){} inside the if statement');
//     nav.addEventListener('click', function(event) {
//       // console.log('active-menu.js active(){} inside the if statement in the eventlistener');
//       if (activeLi !== null) {
//         console.log("activeLi 0: ", activeLi[0]);
//         activeLi[0].classList.remove("active");
//         console.log(nav);
//       }
//       event.target.className = "active";
//       console.log("nav: ", nav);
//     })
//     console.log("nav: ", nav);
//   }
//   // console.log('active-menu.js active(){} end');
// }

// active();
// console.log("nav: ", nav);
// // console.log('active-menu.js active(){} after');


// console.log('main.js end');