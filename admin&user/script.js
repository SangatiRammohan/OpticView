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


let buybtn = document.getElementById("buy")
let sellbtn = document.getElementById("sell")

buybtn.addEventListener("click",()=>{
  window.location.href="../buyingpage/buy.html"
})
sellbtn.addEventListener("click",()=>{
  window.location.assign("../sellingpage/sell.html")
})