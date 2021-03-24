const displayCookieNotice = function(event) {
  const cookieNotice = document.getElementById('cookie-notice')
  const cookieButton = document.getElementById('cookie-button')
  if (cookieNotice !== null && cookieButton !== null) {
    cookieNotice.style.bottom = "0";
    cookieButton.addEventListener('click', function() {
      cookieNotice.style.bottom = "-64px";
    });
  }
}

export { displayCookieNotice };