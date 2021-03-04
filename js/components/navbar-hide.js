var prevScollPos = window.pageYOffset;
let hideNavbar = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScollPos > currentScrollPos) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-64px";
  }
  prevScollPos = currentScrollPos;
}


export { hideNavbar };
