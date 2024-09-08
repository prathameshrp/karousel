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