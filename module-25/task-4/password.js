document.getElementById("show-hide").addEventListener("click", function (e) {
    const passwordField = document.getElementById("password");
    const showHide = document.getElementById("show-hide");

    const passAttribute = passwordField.getAttribute("type");
    if (passAttribute === "password") {
        passwordField.setAttribute("type", "text");
        showHide.innerText = "‿";
    } else {
        passwordField.setAttribute("type", "password");
        showHide.innerText = "👁";
    }
});