var rot = 360;
const menuToggle = () => {
    var menu = document.getElementById("menu-bar");
    // var b = document.getElementById("menu-toggle")
    if (menu.style.width === "0px") {
        menu.style.width = "315px";
        menu.style.opacity = 1;
    } else {
        menu.style.width = "0px";
        menu.style.opacity = 0;
    }
    var icon = document.getElementById("menu-icon");
    icon.classList.toggle("fa-times");
    icon.style = 'transform: rotate(' + rot + 'deg)';
    rot += 360;
}
const filterToggle = () => {
    var filterwrap = document.getElementById('filter-wrap')
    filterwrap.style.display == '' || filterwrap.style.display == 'none'
        ? filterwrap.style.display = 'flex'
        : filterwrap.style.display = 'none'
}