const cover = document.querySelector(".spotlight-cover")
let currItem = cover.firstElementChild;
function next()
{
    currItem.style.display = "none";
    if(currItem.nextElementSibling)
        currItem = currItem.nextElementSibling;
    else
        currItem = cover.firstElementChild;
    currItem.style.display = "block";
}

function prev() {
    currItem.style.display = "none";
    if(currItem.previousElementSibling)
        currItem = currItem.previousElementSibling;
    else
        currItem = cover.lastElementChild;
    currItem.style.display = "block";
}