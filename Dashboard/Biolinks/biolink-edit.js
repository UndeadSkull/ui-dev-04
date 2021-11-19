modalcontainer = document.getElementById('modal-container')
modal1 = document.getElementById('modal-1')
modal2 = document.getElementById('modal-2')
allmodal = document.querySelectorAll('.modal')
const toggleModal = (flag, num) => {
    if (flag) {
        modalcontainer.style.display = 'grid'
        modal1.style.display = 'none'
        modal2.style.display = 'none'
        if (num == 1)
            modal1.style.display = 'block'
        else if (num == 2) {
            modal2.style.display = 'block'
        }
    } else {
        modalcontainer.style.display = 'none'
        for (let i = 0; i < allmodal.length; i++) {
            allmodal[i].style.display = 'none'
        }
    }
}
const upload = (flag) => {
    document.getElementById('upload-btn').style.display = flag ? 'none' : 'block';
    document.getElementById('upload-wrap').style.display = flag ? 'flex' : 'none';
}
const widgetModal = (widget) => {
    document.getElementById('modal-container').style.display = 'grid'
    document.getElementById('modal-2').style.display = 'none'
    document.getElementById(widget).style.display = 'block'
}
imageWrap = document.getElementById('upload-image-wrap');
uploadBtn = document.getElementById('upload-image-btn')
deleteBtn = document.getElementById('delete-image-btn')
uploadBtn.addEventListener("click", () => {
    imageWrap.style.backgroundImage = 'url(https://hub.packtpub.com/wp-content/uploads/2018/03/308_Cover-Image.png)'
    uploadBtn.style.backgroundColor = '#ffffff55'
    uploadBtn.style.pointerEvents = 'none'
    deleteBtn.style.display = 'grid'
});
deleteBtn.addEventListener("click", () => {
    imageWrap.style.background = 'linear-gradient(130deg, #ccc, #eee,#ddd)'
    uploadBtn.style.backgroundColor = '#fff'
    uploadBtn.style.pointerEvents = 'auto'
    deleteBtn.style.display = 'none'
});