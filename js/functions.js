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
  DataTransferItemList.forEach((item) => {
    item.classList.add('show');
  });
};
