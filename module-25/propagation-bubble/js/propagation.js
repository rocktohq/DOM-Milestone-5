// li# language-3
document.getElementById('language-3').addEventListener('click', function (event) {
    console.log("Language 3 Clicked");
    // event.stopPropagation();
    event.stopImmediatePropagation();

});

document.getElementById('language-3').addEventListener('click', function () {
    console.log("Language 3 Clicked - 2");
});

document.getElementById('language-3').addEventListener('click', function () {
    console.log("Language 3 Clicked - 3");
});

// ul# top-languages
document.getElementById('top-languages').addEventListener('click', function () {
    console.log("Ul Clicked");
});

// section# languages-container
document.getElementById('languages-container').addEventListener('click', function () {
    console.log("Section Clicked");
});

document.getElementById('body').addEventListener('click', function () {
    console.log("Body Clickd");
});