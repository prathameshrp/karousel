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

    updateDot(currItem.getAttribute('index'));
}

function prev() {
    currItem.style.display = "none";
    if(currItem.previousElementSibling)
        currItem = currItem.previousElementSibling;
    else
        currItem = cover.lastElementChild;
    currItem.style.display = "block";

    updateDot(currItem.getAttribute('index'));

}


function updateDot(index)
{
    const dot = document.querySelector(`span[index="${index}"]`);
    dot.style.backgroundColor = "#000";
    console.log("current circle index: ", index);
    console.log("prev circle index: ", ((index-2+4)%4+1));
    console.log("next circle index", (parseInt(index))%4+1);
    console.log("LineBreak");
    document.querySelector(`span[index="${((index-2+4)%4+1)}"]`).style.backgroundColor = "#00000077";
    document.querySelector(`span[index="${(parseInt(index))%4+1}"]`).style.backgroundColor = "#00000077";
}
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
