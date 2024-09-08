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
    const prevDot = document.querySelector(`span[index="${((index-2+4)%4+1)}"]`);
    const nextDot = document.querySelector(`span[index="${(parseInt(index))%4+1}"]`);

    dot.setAttribute('style', 'background-color: #000; border-color: #000;');
   
    [prevDot, nextDot].forEach(dot => 
        dot.setAttribute('style', 'background-color: transparent; border-color: #00000077;')
    );


}

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

const circleBtns = document.querySelectorAll('.circle');

circleBtns.forEach(circBtn => {
    circBtn.addEventListener("click", ()=>{
        const btnIndex = circBtn.getAttribute('index');

        while(currItem.getAttribute('index') != btnIndex)
            next();
    });
});

const runApp = (function initiate() {
    setInterval(next, 2000);
})();