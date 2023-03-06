// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hmabuurger Menu di Click

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click di luar Side-bar untuk menghilangkan nav 

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})