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

