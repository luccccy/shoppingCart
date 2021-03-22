window.addEventListener('load', (event) => {
    this.sessionStorage.setItem("username", "lucywu");
    this.sessionStorage.setItem("password","lucyjunejack");
})

let input = document.getElementsByTagName("input");
console.log('@@@@@@@@@@@@@@')
console.log(input)
let login = document.getElementById("login");
console.log(')00000000000000000000')
console.log(login)
login.addEventListener("click", loginFunc)
let form = document.querySelector("form")
console.log('@5555555555^^^^^^^^^^^^^^^^^')
console.log(form)
form.onsubmit = () => {return false}


function  loginFunc() {
    if((input[0].value != "") && (input[1].value != "")){
        if((input[0].value === sessionStorage.getItem("username")) && (input[1].value === sessionStorage.getItem("password"))) {
            form.onsubmit = () => {return 1}
            document.cookie = "username" + input[0].value;
            document.cookie = "password" + input[1].value;
}
        else
        {
            if(input[0].value != sessionStorage.getItem("username")) {
                input[0].nextElementSibling.textContent = "Username is NOT match!"
                setTimeout(() => {
                    input[0].nextElementSibling.textContent = "";
                },2000)
            }
            if(input[1].value != sessionStorage.getItem("password")) {
                input[1].nextElementSibling.textContent = "Password is NOT match!"
                setTimeout(() => {
                    input[1].nextElementSibling.textContent = "";
                },2000)
            }
        }
    }
    else {
        if(input[0].value === "") {
            input[0].nextElementSibling.textContent = "Username is empty!"
            setTimeout(() => {
                input[0].nextElementSibling.textContent = "";
            },2000)
        }
        if(input[1].value === "") {
            input[1].nextElementSibling.textContent = "Password is empty!"
            setTimeout(() => {
                input[1].nextElementSibling.textContent = "";
            },2000)
        }
    }
}
