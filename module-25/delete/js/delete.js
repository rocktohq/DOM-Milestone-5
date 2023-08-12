// Disable or enable the delete button
document.getElementById("delete-confirm").addEventListener("keyup", function (event) {
    const text = event.target.value;
    const deleteBtn = document.getElementById("delete-btn");

    if (text === "delete") {
        deleteBtn.removeAttribute("disabled");
    } else {
        deleteBtn.setAttribute("disabled", true);
    }
});


// Click the delete button and hide the secret information
document.getElementById("delete-btn").addEventListener("click", function () {
    const secret = document.getElementById("secret-info");
    secret.style.display = "none";
});