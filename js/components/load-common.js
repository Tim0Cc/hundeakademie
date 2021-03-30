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

export { loadCommon };