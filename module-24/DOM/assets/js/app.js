console.log("List Items");

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
        console.log("=> " + heading.innerHTML);
    }
}
