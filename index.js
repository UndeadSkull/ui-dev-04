// Toggle Popover display
const popoverToggle = (ele) => {
    let popoverwrap = ele.nextElementSibling;
    if (popoverwrap.classList.contains("appear")) {
        document.removeEventListener('click', popoverEvent, true)
        popoverwrap.classList.remove("appear")
    } else {
        document.addEventListener('click', popoverEvent, true)
        popoverwrap.classList.add("appear")
    }
}
const popoverEvent = (e) => {
    var appear = document.getElementsByClassName('appear')
    if (e.target !== appear[0]) {
        document.removeEventListener('click', popoverEvent, true)
        appear[0].classList.remove("appear")
        e.stopPropagation();
    }
}

// Header Appearance
var myNav = document.getElementById('navbar');
window.onscroll = () => {
    "use strict";
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1)
        myNav.classList.add("scrolled")
    else
        myNav.classList.remove("scrolled")
};

// Function First Section Display
var biolink = document.getElementById('biolink');
var urlshort = document.getElementById('url-short');
const sectionSwitch = (section) => {
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

// Automated Section Switch
let sectionflag = true;
setInterval(() => {
    if (sectionflag) {
        sectionSwitch('url')
        sectionflag = false
    } else {
        sectionSwitch('bio')
        sectionflag = true
    }
}, 4000);


//================ Slide Animations====================//

const slideUp = document.querySelectorAll(".slideup");
const slideIn = document.querySelectorAll(".slidein");

const appearOptions = {
    // threshold: 1,
    rootMargin: "-50px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
    appearOptions);

slideIn.forEach(slideIn => appearOnScroll.observe(slideIn));

slideUp.forEach(slideUp => appearOnScroll.observe(slideUp));