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

// Get the container element
const navList = document.getElementById('navList');
// console.log(navList);

// Get all buttons with class="btn" inside the container
var navListItems = navList.querySelectorAll('li');
// console.log(navListItems);

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navListItems.length; i++) {
  navListItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    // console.log('current[0].className: ', current[0].className);
    current[0].className = current[0].className.replace("active", "");
    // console.log('current[0].className: ', current[0].className);
    this.className += " active";
  });
}

// console.log('main.js end');