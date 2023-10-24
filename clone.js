
const audio = document.querySelector("audio");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});
