const clickSound = new Audio("resources/sounds/button-press.mp3");
clickSound.volume = 0.4

export function playClick() {
    console.log("CLICK SOUND CALLED");
    clickSound.currentTime = 0;
    clickSound.play();
}