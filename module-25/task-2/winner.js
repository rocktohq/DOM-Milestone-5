// Get the button first
const dance = document.getElementById("dance");
dance.addEventListener("click", function () {
    // Hide the button
    dance.style.display = "none";

    // Display the GIF
    const div = document.querySelector("div");
    const gif = document.createElement("img");
    gif.src = "resources/dance.gif";

    div.appendChild(gif);

    // Play the audio
    const audio = new Audio("resources/euphoric-electric-groove-160306.mp3");
    audio.play();
});