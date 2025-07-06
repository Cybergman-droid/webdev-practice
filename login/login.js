let username = document.getElementById('username');
let password = document.getElementById('password');
let loginButton = document.getElementById('login-btn');

let loginData = new Map();

loginButton.addEventListener('click', function() {
    loginData.set(username.value, password.value);
    console.log(loginData);
});