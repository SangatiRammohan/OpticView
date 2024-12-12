let loginUserName =document.getElementById("loginuserName")
let loginPswrd =document.getElementById("loginpassword")
let loginBtn = document.getElementById("loginbtn")

loginBtn.addEventListener("submit",(e)=>{
    e.preventDefault()
    let loginUserNameValue =loginUserName.value.trim()
    let loginPswrdValue = loginPswrd.value.trim()
    let usersdata= JSON.parse(localStorage.getItem("userInputDta")) || []
    let userdata = usersdata.find(x=>x.UserName === loginUserNameValue && x.Userpswrd === loginPswrdValue)
    console.log(usersdata)

    if(userdata){
        localStorage.setItem("isloggedin",JSON.stringify(userdata))
        window.location.href="../admin&user/index.html"
    }else{
        alert(" Enter valid details")
    }
})

let userName = document.getElementById("loginuserName")
let userpswrd = document.getElementById("loginpassword")
let icon = document.getElementById("icon")

 icon.addEventListener("click",()=>{
    if(userpswrd.type === "password"){
        userpswrd.type="text"
        icon.name="lock-open"
    }else{
         userpswrd.type="password"
        icon.name ="lock-closed-outline"
    }
})