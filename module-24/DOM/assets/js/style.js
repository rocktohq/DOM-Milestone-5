// Styling an element
const sectionArticle = document.getElementById('article');

sectionArticle.style.backgroundColor = 'red';
sectionArticle.style.padding = '20px';
sectionArticle.style.borderRadius = '5px';
sectionArticle.style.color = 'white';


// Add or remove class
const sections = document.querySelectorAll('section');

for (const section of sections) {
    section.classList.add('bg-blue-100');
    section.classList.add("p-5");
    section.classList.remove("class-tobe-removed");
}

// Get and Set attribute
const sectionFruits = document.querySelector('#fruit-list h2');
sectionFruits.setAttribute("title", "Favorite Fruits");