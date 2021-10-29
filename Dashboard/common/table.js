var checkboxes = document.querySelectorAll('input[name="select-row"]');
var selectAll = document.getElementById('select-all');
var deleteBtn = document.getElementById('delete-btn');
function toggleDelete(flag){
    if (flag) {
        deleteBtn.style.opacity = '0';
        deleteBtn.style.marginLeft = '-85px';
    } else {
        deleteBtn.style.opacity = '1';
        deleteBtn.style.marginLeft = '0';
    }
}
selectAll.addEventListener('change', () => {
    if (selectAll.checked) toggleDelete(false)
    else toggleDelete(true)
})

checkboxes.forEach(item => {
    item.addEventListener('change', () => {
        if (item.checked == false) selectAll.checked = false;
        var flag = false;
        for (var i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked){
                flag=true;
            }
        }
        toggleDelete(!flag)
    })
})

function toggle(source) {
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}