// Make Blue BG
function makeBlack() {
    document.body.style.backgroundColor = "black";
    const mainHeader = document.getElementById('main-header');
    mainHeader.style.color = "white";
}

// 
document.getElementById('makeCyan').addEventListener('click', function () {
    document.body.style.backgroundColor = "cyan";
});


// 
const makeGreenBtn = document.getElementById('makeGreen');
makeGreenBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = "green";
});


