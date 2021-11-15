var myNav = document.getElementById('navbar');
window.onscroll = () => {
    "use strict";
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1)
        myNav.classList.add("scrolled")
    else
        myNav.classList.remove("scrolled")
};