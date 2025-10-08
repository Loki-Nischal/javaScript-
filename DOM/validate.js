const loginForm = document.getElementById("login_form")

loginForm.addEventListener("submit",function(e){
    e.preventDefault()//prevent default page reload after form is submit

    const email = document.getElementById("email").value//.value help to access data of password and email
    const password = document.getElementById("password").value

    const emailError = document.getElementById("emailError")
    const passwordError = document.getElementById("passwordError")

    let isValid = true
    
    if(email === ""){
       emailError.innerHTML = "Email is required"
       isValid = false  // yesle yo bhanda tala jana didaina // properly validate nabhaya samma tala naja bhaneko
    }

    if(password ===""){
        passwordError.innerHTML = "password is required"
        isValid = false
    } else if(password.length < 8){
        passwordError.innerHTML = "password should be atleast 8 charecter"
        isValid = false
    }

    
    if(isValid){
        console.log("Login Successfull")
        emailError.innerHTML =""
        passwordError.innerHTML =""
        loginForm.reset()// reset form


    }


})