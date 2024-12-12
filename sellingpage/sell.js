const navbarToggle = document.getElementById('navbar-toggle');
const navbarNav = document.querySelector('.navbar-nav');
let isopened=false;

navbarToggle.addEventListener('click', () => {
  if(!isopened){
    navbarNav.style.display="block"
    isopened=true
  }else{
    navbarNav.style.display="none"
    isopened=false
  }

});


let curosoul = document.querySelector(".curosual")

curosoul.addEventListener("wheel", (e) => {
    e.preventDefault();
    curosoul.scrollLeft += e.deltaX;
    curosoul.style.scrollBehavior = "auto"

});