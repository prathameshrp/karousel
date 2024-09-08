const cover = document.querySelector(".spotlight-cover")
let currItem = cover.firstElementChild;
function next()
{
    currItem.style.display = "none";
    currItem = currItem.nextElementSibling;
    currItem.style.display = "block";
}