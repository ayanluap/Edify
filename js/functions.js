// login form open
function loginOpen() {
  loginContent.style.display = 'block';
}

function loginClose(e) {
  if (e.target == loginContent) {
    loginContent.style.display = 'none';
  }
}

// slide in animation

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () => {
  // DataTransferItemList.forEach((item) => {
  //   item.classList.add('show');
  // });
  items.forEach((item) => {
    item.classList.add('show');
  });
};

// skew scroll effect

function skewEffect() {
  var value = -10 + window.scrollY / 50;
  skewed.style.transform = 'skewY(' + value + 'deg)';
}

// nav chnage func
function navChange() {
  if (window.pageYOffset > 180) {
    navbar.classList.add('navColored');
    navbar.classList.remove('navTransparent');
  } else {
    navbar.classList.remove('navColored');
    navbar.classList.add('navTransparent');
  }
}

// animations on load
function onLoad() {
  slideshow.style.transform = 'translateY(0)';
  slideHead.style.transform = 'translateX(0)';
  slidePara.style.transform = 'translateX(0)';
  slideBtn.style.transform = 'translateX(0)';
}

// animation on Home

// smooth scroll
