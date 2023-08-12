// Comment Box: Comment System

document.getElementById("addComment").addEventListener("click", function () {
    const inputField = document.getElementById("newComment");
    const inputValue = inputField.value;

    if (inputValue === "") {
        alert("Please enter some message!")
    } else {
        // Create new comment
        const comments = document.getElementById("comments");
        const p = document.createElement("p");
        p.innerText = inputValue;
        comments.appendChild(p);
        inputField.value = "";
    }
});