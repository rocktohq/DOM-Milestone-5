// getElementsByTagName

const liList = document.getElementsByTagName("li");

let i = 1;
for (const li of liList) {

    // Some Conditionals
    if (li.innerText === "TagName") {
        li.innerText = "NewTagName";
    }

    if (li.innerText.length > 10) {
        li.innerText += " [Char: 10+]";
    } else {
        li.innerText += " [Char: 10-]";
    }

    if (li.innerText.toLowerCase().includes("Name".toLowerCase())) {
        console.log("=> " + li.innerText);
    }

    console.log(i++ + ". " + li.innerText);
}

console.log("");
console.log("Headings (H1)");

const headingList = document.getElementsByTagName("h1");
for (const heading of headingList) {
    if (heading.innerText.includes("Script")) {
        heading.innerHTML = "Title Changed by JS";
        console.log("=> " + heading.innerHTML);
    }
}



// getElementById
const article = document.getElementById('article');
let articleTitle = document.getElementById('article-title');
articleTitle.innerText = "New Title";

// getElementsByClassName
let items = document.getElementsByClassName('item');
let j = 1;
for (const item of items) {
    item.innerText = j++ + ". " + item.innerText;
}

// querySelector
let q = document.querySelector('#article-title');
q.innerText += " by JS";

// querySelectorAll
let fruits = document.querySelectorAll('.fruits li');
for (let fruit of fruits) {
    fruit.innerText = fruit.innerText.toUpperCase();
}