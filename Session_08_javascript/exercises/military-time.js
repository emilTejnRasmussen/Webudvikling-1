// console.log(timeOfDay(prompt("Input military time (0000 - 2359)")))

function timeOfDay(time) {
    time = Number(time)
    if(time <= 800) return "Morning"
    else if(time <= 1600) return "School"
    else return"Evening"
}

console.log(timeOfDay(700))
console.log(timeOfDay(1300))
console.log(timeOfDay(1800))
