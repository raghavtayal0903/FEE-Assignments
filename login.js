let form = document.getElementById('loginForm');
let passwordInput = document.getElementById('password');
let errorMessage = document.getElementById('passwordError');
let specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

form.onsubmit = function (event) {
    let password = passwordInput.value;
    let hasSpecialCharacter = false;

    for (let i = 0; i < password.length; i++) {
        if (specialCharacters.includes(password[i])) {
            hasSpecialCharacter = true;
        }
    }

    if (password.length < 8) {
        event.preventDefault();
        errorMessage.textContent = 'Password must be at least 8 characters.';
    } else if (hasSpecialCharacter === false) {
        event.preventDefault();
        errorMessage.textContent = 'Password does not contain a special character.';
    } else {
        errorMessage.textContent = '';
    }
};
