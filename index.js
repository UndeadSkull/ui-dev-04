var myNav = document.getElementById('navbar');
window.onscroll = () => {
    "use strict";
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1)
        myNav.classList.add("scrolled")
    else
        myNav.classList.remove("scrolled")
};
const switchSection = (section) => {
    var biolink = document.getElementById('biolink');
    var urlshort = document.getElementById('url-short');
    if (section == 'url') {
        biolink.style.opacity = 0;
        biolink.style.pointerEvents = 'none';
        urlshort.style.opacity = 1;
        urlshort.style.pointerEvents = 'auto';
    }
    else {
        biolink.style.opacity = 1;
        biolink.style.pointerEvents = 'auto';
        urlshort.style.opacity = 0;
        urlshort.style.pointerEvents = 'none';

    }
}