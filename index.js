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

slideIn.forEach(slideIn => {
    appearOnScroll.observe(slideIn);
});

slideUp.forEach(slideUp => {
    appearOnScroll.observe(slideUp);
});