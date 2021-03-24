console.log('active-menu.js beginning')
function active() {
  console.log('active-menu.js active(){} beginning')
  const nav = document.getElementById('navList')
  console.log('active-menu.js active(){} after initializing nav')
  if (nav !== null) {
    console.log('active-menu.js active(){} inside the if statement')
    nav.addEventListener('click', function(event) {
      console.log('active-menu.js active(){} inside the if statement in the eventlistener')
      
      var activeLi = nav.querySelectorAll('.active');
      console.log(activeLi);
      if (activeLi !== null) {
        activeLi.classList.remove('active');
      }
      event.target.className = "active";
    })
  }
  console.log('active-menu.js active(){} end')
}
console.log('active-menu.js active(){} after')

export { active };