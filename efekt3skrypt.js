const form = document.getElementById('form');
const countryField = document.querySelector('[name="Kraj"]');
const countryErrorField = document.createElement('span');
const emailField = document.querySelector('[name="email"]');
const emailErrorField = document.createElement('span');
const passwordField = document.querySelector('[name="password"]');
const passwordErrorField = document.createElement('span');

emailField.addEventListener('input', (event) => {
    if(emailValidation(emailField)) {
        emailErrorField.innerHTML = "Wpisz poprawny email";
        emailField.after(emailErrorField); 
    }
    else {
        emailErrorField.remove();
    }
 });


 passwordField.addEventListener('input', (event) => {
    if(PasswordValidation(passwordField)) {
        passwordErrorField.innerHTML = "Hasło musi zawierać przynajmniej 8 znaków";
        passwordField.after(passwordErrorField); 
    }
    else {
        passwordErrorField.remove();
    }
 });


 countryField.addEventListener('input', (event) => {
    if(requiredValidation(countryField)) {
    countryErrorField.innerHTML = "Pole wymagane";
         countryField.after(countryErrorField); 
    }
    else {
     countryErrorField.remove();
    }
 });


const formError = document.getElementById('error');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(requiredValidation(countryField))
    {
        formError.innerHTML = 'Formularz zawiera błędy'
    }
    else {
        formError.innerHTML = '';
    }
});

function requiredValidation(field) {
    if (!field.value || field.value === '') {
        return true;
    }
    else {
        return false;
    }
}

function emailValidation(field) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
        return true;
    }
    else {
        return false;
    }
}

function PasswordValidation() {
    const passwordRegex = /^.{8,}$/;
    if (!passwordRegex.test(passwordField.value)) {
        return true
    } else {
        return false
    }
   }
