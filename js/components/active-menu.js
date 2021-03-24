function active() {
  const nav = document.getElementById('navList')
  if (typeof nav !== null) {
    nav.addEventListener('click', function(event) {
  
      var activeLi = nav.querySelectorAll('.active');
      console.log(activeLi);
      if (activeLi !== null) {
        activeLi.classList.remove('active');
      }
      event.target.className = "active";
    })
  }
}

export { active };