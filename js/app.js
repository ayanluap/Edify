// variables

// edify
const edify = document.querySelector('#navbar .logo a');
// check box nav
const check = document.getElementById('check');
// navbar
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.links');
// login
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const login = document.getElementById('login');
const loginContent = document.getElementById('loginContent');
const openLogin = document.getElementById('openLogin');

// slideshow
const slideshow = document.getElementById('slideshow');

// services item

// const items = document.querySelectorAll("")

// event listeners

// navbar

links.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    check.checked = false;
  });
});

edify.addEventListener('click', () => {
  check.checked = false;
});

// check.addEventListener('click', checkClick);

// login form event listener

signUpButton.addEventListener('click', () => {
  login.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  login.classList.remove('right-panel-active');
});

openLogin.addEventListener('click', loginOpen);

// listen for outside click

window.addEventListener('click', loginClose);

// event listeners for slide in animation

// window.addEventListener('load', run);
// window.addEventListener('resize', run);
// window.addEventListener('scroll', run);
