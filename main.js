/*Selector*/
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function() {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('active', windowPosition)
})

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const form = document.querySelector('#form1');

form.addEventListener('submit', function (e){
    let isNameValid = checkname();

    let isFormValid = isNameValid;

    // prevent form submit by default
    if(!isFormValid) {
        e.preventDefault();
    }
});

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailvalid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const showError = (input, message) => {
    const inputgroup = input.parentElement;
    inputgroup.classList.remove('success');
    inputgroup.classList.add('error');

    const error = inputgroup.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const inputgroup = input.parentElement;
    inputgroup.classList.remove('error');
    inputgroup.classList.add('success');

    const error = inputgroup.querySelector('small');
    error.textContent = '';
};

const checkname = () => {
    let valid = false;
    const min = 3, max = 25;
    const name = name.value.trim();
    if(!isRequired(name)) {
        showError(name, 'Please provide your name');
    } else if(!isBetween(name.length, min, max)) {
        showError(name, 'Name must be between ${min} and ${max} characters')
    }else {
        showSuccess(name);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const email = email.value.trim();
    if(!isRequired(email)) {
        showError(email, 'Please provide your email');
    }else if(!isEmailvalid(email)) {
        showError(email, 'Email is not valid.');
    }else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};