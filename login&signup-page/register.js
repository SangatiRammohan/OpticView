let userName = document.getElementById("userName")
let userpswrd = document.getElementById("userPswrd")
let cnfrmpswrd = document.getElementById("cnfrmPswrd")
let useremail = document.getElementById("userEmail")

let registerbtn = document.getElementById("registerBtn")
let icon1 =document.getElementById("icon1")
let icon2 = document.getElementById("icon2")

 icon1.addEventListener("click",()=>{
    if(userpswrd.type === "password"){
        userpswrd.type="text"
        icon1.name="eye"
    }else{
         userpswrd.type="password"
        icon1.name ="eye-off"
    }
})

icon2.addEventListener("click",()=>{
    if(cnfrmpswrd.type==="password"){
        cnfrmpswrd.type="text"
        icon2.name="eye"
    }else{
        cnfrmpswrd.type="password"
        icon2.name ="eye-off"
    }
})
let msg =document.getElementById("ptag")
function check(x) {
    if (x.key === "Enter") {
        if (userpswrd.value.length < 8) {
            msg.textContent = "Weak Password";
            msg.style.color="red"
        }else if(userpswrd.value.length >= 8 && userpswrd.value.length <= 10){
            msg.textContent = "Good Passowrd"
            msg.style.color="Orange"
        }else{
            msg.textContent="Strong Password"
            msg.style.color="green"
        }
    

    }}

registerbtn.addEventListener("click", (e) => {
    e.preventDefault()
    
let userNameValue = userName.value.trim()
let useremailValue = useremail.value.trim()
let userPswrdValue = userpswrd.value.trim()
let cnfrmPswrdValue = cnfrmpswrd.value.trim()
if(userPswrdValue == cnfrmPswrdValue){
    if (userNameValue != "" && useremailValue != "" && userPswrdValue != "") {
        let userInputData = JSON.parse(localStorage.getItem("userInputData")) || []
        userInputData.push({
            UserName: userNameValue,
            Userpswrd: userPswrdValue,
            UserEmail: useremailValue
        })
        localStorage.setItem("userInputDta", JSON.stringify(userInputData))
        window.location.href = "login.html"
    } else {
        window.location.href = "register.html"
        alert("Enter valid details")
    }
}else{
    alert("Match the Password")
}
})