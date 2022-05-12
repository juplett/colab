'use strict';

const login = document.getElementById('login');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const locStr = document.getElementById('rememberMe')
const accEmail = "judah@gmail.com";
const accPsw = 'password'; 


localStorage.setItem("logEmail", accEmail);
localStorage.setItem("logPsw", accPsw);

login.addEventListener("click", () => {

    let checkEmail = localStorage.getItem("logEmail");
    let checkPsw = localStorage.getItem("logPsw");

    if (checkEmail === email.value && checkPsw === psw.value) {
          location.replace("http://127.0.0.1:5500/home.html");
    } else {
        alert("Please input valid email & password");
    }
});

if(localStorage.checkbox && localStorage.checkbox && localStorage.checkbox !== "") {
    locStr.setAttribute("checked", "checked", "checked");
    email.value = localStorage.useremail;
    psw.value = localStorage.userpsw;
} else {
    locStr.removeAttribute("checked", "checked");
    email.value = "";
}

login.addEventListener("click", () => {
    if(locStr.checked && email.value != "" && psw.value != "") {
        localStorage.useremail = email.value;
        localStorage.userpsw = psw.value;
        localStorage.checkbox = locStr.value;
    } else {
        localStorage.useremail = "";
        localStorage.userpsw = "";
        localStorage.checkbox = "";
    }
});




