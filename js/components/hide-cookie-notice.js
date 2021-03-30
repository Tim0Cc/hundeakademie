
console.log('hide-cookie-notice.js');
function hideCookieNotice(event) {
  console.log('const hideCookieNotice')
  // if (document.getElementById('cookie-notice-placeholder') !== null) {
  //   console.log('if statement');
    const cookieNotice = document.getElementById('cookie-notice')
    const cookieButton = document.getElementById('cookie-button')
    console.log(cookieNotice + ' ' + cookieButton);
    if (cookieNotice !== null && cookieButton !== null) {
      console.log('2nd if statement');
      cookieNotice.style.bottom = "0";
      cookieButton.addEventListener('click', function() {
        cookieNotice.style.bottom = "-64px";
      });
    }
  // };
  console.log('const end');
}
console.log('js end');

export { hideCookieNotice };