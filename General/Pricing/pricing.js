var bars = document.querySelectorAll('.section-bar')
var section = document.querySelectorAll('section')
const sectionSwitch = (next) => {
    for (const i of [0, 1, 2]) {
        bars[i].classList.remove('current')
        section[i].style.display = 'none'
    }
    bars[next - 1].classList.add('current')
    section[next - 1].style.display = 'flex'
}
sectionSwitch(3)