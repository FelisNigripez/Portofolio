//toggle class active
const navbarNav = document.querySelector('.navbar-nav1');
//ketika humberger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
navbarNav.classList.toggle('active');
};


const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})



var darkmode = localStorage.getItem('.darkmode')
const themeSwitch = document.getElementById('darkmode-toggle')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
