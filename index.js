const Email = admin;
const Password = admin123;

const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submitBTN');

submit.addEventListener("click", function(event) {
    event.preventDefault();

    const userEmail = Email.value;
    const userPassword = Password.value;

    if (userEmail === Email && userPassword === Password) {
        window.location.href = "mainpage.html";
    } else {
        alert("Invalid email and password")
    }
});