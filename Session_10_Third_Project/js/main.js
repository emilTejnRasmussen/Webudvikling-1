import { power, autoBuildPower, handleButtonPress } from "./game.js";
import { renderUpgrades } from "./dom.js";
import { playClick } from "./sound.js";

const mainBtn = document.querySelector("#main-btn");

mainBtn.addEventListener("click", () => {
    for(let i = 0; i < power; i++){
        onButtonPressed()
    }
})

document.addEventListener("keydown", (e) => {
    if(e.code === "Space"){
        e.preventDefault()
        mainBtn.classList.add("button-active")
        onButtonPressed()
    }
})

document.addEventListener("keyup", (e) => {
    if(e.code === "Space"){
        mainBtn.classList.remove("button-active")
    }
})

function onButtonPressed() {
    playClick()
    for(let i = 0; i < power; i++){
        mainBtn.set
        handleButtonPress()
    }
}

renderUpgrades()


setInterval(() => {
    for (let i = 0; i < autoBuildPower; i++){
        handleButtonPress()
    }
}, 1000)