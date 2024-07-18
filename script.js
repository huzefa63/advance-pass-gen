let input = document.querySelector("input");
let button = document.querySelector("button");
let copyImg = document.getElementById("copy");
let range = document.querySelector(".range");
let counting = document.querySelector(".counting");
let check = document.getElementById("check");

let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%^&*";
let numbers = "1234567890";
let allChar = lowerCaseChar + upperCaseChar + symbols + numbers;
let generatedPassword = "";

button.addEventListener("click" , generatePassword);

function generatePassword() {
     let allPass = "";
     for (let i = 0; i < range.value; i++) {
       allPass += allChar.charAt(Math.floor(Math.random() * allChar.length));
     }

     generatedPassword = allPass;
     input.value = generatedPassword;
}

copyImg.addEventListener("click" , () => {
    if(input.value.length > 0 ) {
        copyText();
        copyImg.style.display = "none";
        check.style.display = "flex";
        check.style.color = "blue";
        check.title = "copied";
        setTimeout(() => {
            copyImg.style.display = "flex";
            check.style.display = "none";
            copyImg.title = "copy";

        }, 4000);
    }
    else{
        alert("Please Generate password to copy");
    }

})

function copyText() {
    navigator.clipboard.writeText(input.value);
}

range.addEventListener("input" , () => {
    counting.innerText = range.value;
    generatePassword();
})


