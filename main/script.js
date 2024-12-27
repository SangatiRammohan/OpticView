//  =============================== cart count ======================
// Get cart items from localStorage
let cartItems1 = JSON.parse(localStorage.getItem("cartItems")) || [];
let count =document.getElementById("count")
count.innerHTML=`${cartItems1.length}`




// ================================ search bar ===============================
let searchInput = document.getElementById("search-input")
let searchIcon = document.querySelector(".bx-search")
let click = 0
searchInput.style.visibility = "hidden"
searchIcon.addEventListener("click", () => {
  if (click == 0) {
    searchInput.style.visibility = "visible"
    click = 1
  } else {
    searchInput.style.visibility = "hidden"
    click = 0
  }
})


// ======================= side bar list of products =====================================

let allProducts = document.querySelector(".side-middle-2")
let plusIcon = document.querySelector(".sidebar-middle-1")
let sumicon = document.querySelector("#plus")
let push = 0
allProducts.style.display = "none"
plusIcon.addEventListener("click", (e) => {
  e.preventDefault()
  if (push == 0) {
    allProducts.style.display = "block"
    push = 1
    sumicon.className = "bx bx-minus"
  }
  else {
    allProducts.style.display = "none"
    push = 0
    sumicon.className = "bx bx-plus"
  }
})





// ================================================side bar ====================================
let menuIcon = document.querySelector("#menu")
let closeIcon = document.querySelector("#close")
let sideBar = document.querySelector("#sidebar")
sideBar.style.left = "-350px"
menuIcon.addEventListener("click", (e) => {
  e.preventDefault()
  e.stopPropagation()
  // e.stopPropagation()
  sideBar.style.left = "0"
})
closeIcon.addEventListener("click", (e) => {
  e.stopPropagation()
  e.preventDefault
  sideBar.style.left = "-350px"
})


// ======================== clsoing all main page activites when clicked ====================================
document.addEventListener('click', (event) => {
  const isClickInside = sideBar.contains(event.target) || menuIcon.contains(event.target);
  if (!isClickInside) {
    sideBar.style.left = "-350px"

  }
});


// =============================================== curosal automatic ========================================
document.addEventListener('DOMContentLoaded', () => {
  const frames = document.querySelector('.curosal-frames');
  const items = document.querySelectorAll('.curosal');
  const itemWidth = items[0].offsetWidth + 10;
  let index = 0;


  frames.innerHTML += frames.innerHTML;
  const totalItems = items.length * 2;

  function autoScroll() {
    index++;
    const scrollLeft = index * itemWidth;

    // Smoothly scroll to the next item
    frames.scrollTo({ left: scrollLeft, behavior: 'smooth' });

    // Reset scroll position if at the end of the original items
    if (index >= totalItems / 2) {
      index = 0;
      setTimeout(() => {
        frames.scrollTo({ left: 0, behavior: 'auto' }); // Jump back to the start
      }, 500);
    }
  }

  setInterval(autoScroll, 4500); // Scroll every 3 seconds
});


// =========================== top button =====================

let topBtn = document.querySelector(".Top");
console.log(topBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
});




// ============================ pre loader ==============================
let loader = document.querySelector(".load")
window.addEventListener("load", () => {
  loader.style.display = "none"

})











//  =============================================login && sign up ==============================
let btnIn= document.getElementById("btnIn")
let btnUp = document.getElementById("btnUp")
console.log(btnIn,btnUp)

btnIn.addEventListener("click",(e)=>{
    e.preventDefault()
     frontCard.style.transform="rotateX(180deg)"
            backCard.style.transform="rotateX(0)"
})
btnUp.addEventListener("click",(e)=>{
    e.preventDefault()
     frontCard.style.transform="rotateX(0)"
            backCard.style.transform="rotateX(180deg)"
})




let swipeDiv = document.getElementById("font-back")
let frontCard = swipeDiv.querySelector("#form1")
let backCard = swipeDiv.querySelector("#form2")
let userName1 = document.getElementById("signUpUsername")
let userEmail1 = document.getElementById("signUPUseremail")
let userPswrd1 = document.getElementById("signUPpswrd")
let cnfrmPswrd = document.getElementById("cnfrmPswrd")
console.log(userName1, userEmail1, userPswrd1, cnfrmPswrd, swipeDiv, frontCard, backCard)

let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", (e) => {
    e.preventDefault()
    let userNameValue = userName1.value.trim()
    let useremailValue = userEmail1.value.trim()
    let userPswrdValue = userPswrd1.value.trim()
    let cnfrmPswrdValue = cnfrmPswrd.value.trim()
    if (userPswrdValue == cnfrmPswrdValue) {
        if (userNameValue != "" && useremailValue != "" && userPswrdValue != "") {
            let userInputData = JSON.parse(localStorage.getItem("userInputDta")) || []
            userInputData.push({
                UserName: userNameValue,
                Userpswrd: userPswrdValue,
                UserEmail: useremailValue
            })
            localStorage.setItem("userInputDta", JSON.stringify(userInputData))
            frontCard.style.transform="rotateX(180deg)"
            backCard.style.transform="rotateX(0)"
            // window.location.href="./main/index.html"

        } else {
            Swal.fire({
                text: "Fill all the fields ",
                icon: "error"
            });
        }
    } else {
        Swal.fire("Match the password");
    }


})

let helloName = document.getElementById("helloName")
let loginUserEmail = document.getElementById("loginUseremail")
let loginPswrd = document.getElementById("loginPswrd")
let loginBtn = document.getElementById("btn2")
loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    e.stopPropagation()
    let loginUserEmailValue = loginUserEmail.value.trim()
    let loginPswrdValue = loginPswrd.value.trim()
    console.log(loginUserEmailValue,loginPswrdValue)
    let usersdata = JSON.parse(localStorage.getItem("userInputDta")) || []
    let localData = usersdata.find(x => x.UserEmail === loginUserEmailValue && x.Userpswrd === loginPswrdValue)

    if (localData) {
        localStorage.setItem("isloggedin", JSON.stringify(localData))
        localStorage.setItem("isloggedin", "true");
        // localStorage.setItem("isloggedin");
        helloName.innerText=`${localData.UserName}`
        // window.location.href="../main/index.html"
         swipeDiv.style.visibility="hidden"
         document.body.style.overflow = "auto";

    } else {
        Swal.fire({
                text: "Invalid username or password. Please try again",
                icon: "error"
            });
    }
})



// ================================ login & sign up closing =====================================
let closeIcon0 =document.querySelectorAll("#closeIcon0")
console.log(closeIcon)
closeIcon0.forEach(icon=>{
    icon.addEventListener("click",(e)=>{
      e.preventDefault()
    console.log("click")
    swipeDiv.style.visibility="hidden"
    document.body.style.overflow = "auto";
})
    
})



let userIcon = document.getElementById("userIcon")
console.log(userIcon)
let userClick = 0
userIcon.addEventListener("click",(e)=>{
  e.preventDefault()
  if (userClick == 0) {
    swipeDiv.style.visibility = "visible"
    // document.style.filter="blur(5px)"
    document.body.style.overflow = "hidden";
    userClick = 1
  } else {
    swipeDiv.style.visibility = "hidden"
    // document.body.classList.remove("blur-effect");
    document.body.style.overflow = "auto";
    userClick = 0
  }
})









