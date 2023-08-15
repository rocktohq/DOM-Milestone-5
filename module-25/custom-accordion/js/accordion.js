// Logic Board

const accordionItems = document.querySelectorAll(".accordion-item");
for (const accordionItem of accordionItems) {
    accordionItem.addEventListener("click", (event) => {

        const p = document.querySelector("p");
        if (event.target.textContent === "-") {
            event.target.textContent = "+";
            p.classList.add("hidden");
        } else {
            event.target.textContent = "-";
            p.classList.remove("hidden");
        }
    });
}