let button = document.querySelector('button');
let passwordInput = document.querySelector('#password');

button.addEventListener('click', () => {
    let passwordType = passwordInput.type; // fixed here
    console.log(passwordType);
    passwordInput.type = passwordType === 'password' ? 'text' : 'password';
    console.log(passwordInput.type);
});
