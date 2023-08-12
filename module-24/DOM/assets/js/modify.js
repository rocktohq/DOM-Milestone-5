// Add or Delete elements
const main = document.getElementById("main");

const favPlaces = document.createElement("section");
main.appendChild(favPlaces)

const favPlaceList = `
    <h2 class="text-xl font-bold">Places will Visit</h2>
    <ul>
        <li>Mecca</li>
        <li>Madina</li>
        <li>Nepal</li>
        <li>Kashmir</li>
        <li>Bhutan</li>
    </ul>
`;

favPlaces.innerHTML = favPlaceList;