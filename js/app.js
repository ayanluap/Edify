// variables

// edify
const edify = document.querySelector('#navbar .logo a');
// check box nav
const check = document.getElementById('check');

// navbar
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.links');

// skewed
const skewed = document.querySelector('.skewed');

// login
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const login = document.getElementById('login');
const loginContent = document.getElementById('loginContent');
const openLogin = document.getElementById('openLogin');

// slideshow
const slideshow = document.getElementById('slideshow');
const slideHead = document.querySelector('#slideshow h1');
const slidePara = document.querySelector('#slideshow p');
const slideBtn = document.querySelector('#slideshow button');

// home

const homeContent = document.querySelector('#home .homeContent');

// services item

const items = document.querySelectorAll('#services .card');

// EVENT LISTENERS

// navbar
links.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    check.checked = false;
  });
});

edify.addEventListener('click', () => {
  check.checked = false;
});

// edify.addEventListener('click', onLoad);
// nav cange on scroll listener

window.addEventListener('scroll', navChange);

// check.addEventListener('click', checkClick);

// login form event listener

signUpButton.addEventListener('click', () => {
  login.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  login.classList.remove('right-panel-active');
});

openLogin.addEventListener('click', loginOpen);

// listen for outside click of login form
window.addEventListener('click', loginClose);

// Homepage

// event listeners for slide in animation

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

// skew scroll effect
window.addEventListener('scroll', skewEffect);

// smooth scroll cross browser solution

window.addEventListener('load', onLoad);
