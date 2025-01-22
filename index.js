const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('loginForm'); 

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailValue = email.value; 
    const passwordValue = password.value;

    if (emailValue === 'admin' && passwordValue === 'admin123') {
        window.location.href = 'mainpage.html';
    } else {
        alert("Invalid email or password");
    }
});
