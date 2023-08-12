var i = 1;
function handlerOnClick() {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "Text changed by hander and clicked: [" + i+" time(s)]";
    i++
}

document.getElementById("changeMsg").addEventListener("click", function () {
    const handerMsg = document.getElementById("handler-msg");
    handerMsg.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, temporibus laboriosam culpa quas sint iusto exercitationem perferendis cum eaque iste.";
});

// DoubleClick
function doubleClick() {
    alert("DoubleClick event triggered");
}