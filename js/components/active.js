const active = function() {
  const nav = document.getElementById('navList')
  nav.addEventListener('click', function(event) {

    var activeLi = nav.querySelectorAll('.active');
    console.log(activeLi);
    if (activeLi !== null) {
      activeLi.classList.remove('active');
    }
    event.target.className = "active";
  })
}

export { active };