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

export { hideNavbar };
