
const hideCookieNotice = function(event) {
  if (document.getElementById('cookie-notice-placeholder') !== null) {
    const cookieNotice = document.getElementById('cookie-notice')
    const cookieButton = document.getElementById('cookie-button')
    if (cookieNotice !== null && cookieButton !== null) {
      cookieNotice.style.bottom = "0";
      cookieButton.addEventListener('click', function() {
        cookieNotice.style.bottom = "-64px";
      });
    }
  };
}

export { hideCookieNotice };