const state = {
    playerName: "Kasper",
    score: 1337,
    level: 5
}

localStorage.setItem("state", JSON.stringify(state))

const storedState = JSON.parse(localStorage.getItem("state"))

console.log(storedState.score)