var rot = 360;
const menuToggle = () => {
    var x = document.getElementById("menu-bar");
    // var b = document.getElementById("menu-toggle")
    if (x.style.width === "0px") {
        x.style.width = "315px";
        x.style.opacity = 1;
    } else {
        x.style.width = "0px";
        x.style.opacity = 0;
    }
    var icon = document.getElementById("menu-icon");
    icon.classList.toggle("fa-times");
    icon.style = 'transform: rotate(' + rot + 'deg)';
    rot += 360;
}
