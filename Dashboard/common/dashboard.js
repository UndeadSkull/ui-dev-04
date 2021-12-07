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
    if (e.target === appear[0])
        return
    else if (e.target !== appear[0].previousElementSibling) {
        document.removeEventListener('click', popoverEvent, true)
        appear[0].classList.remove("appear")
    }
    else if (e.target === appear[0].previousElementSibling) {
        document.removeEventListener('click', popoverEvent, true)
        appear[0].classList.remove("appear")
        e.stopImmediatePropagation();
    }
}

var rot = 360;
const menuToggle = () => {
    var menu = document.getElementById("menu-bar");
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
const toggleDeleteModal = (flag) => {
    document.getElementById('modal-container').style.display = flag ? 'grid' : 'none'
    document.getElementById('delete-modal').style.display = flag ? 'flex' : 'none'
}
document.getElementById('modal-container').addEventListener('click', (e) => {
    if (e.target.id == 'modal-container')
        document.getElementById('delete-modal').style.display == 'flex'
            ? toggleDeleteModal(false)
            : toggleModal(false)
})