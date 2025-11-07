const clock = document.querySelector("#clock")

function updateClock(){
    clock.textContent = new Date().toLocaleTimeString()
}

setInterval(updateClock, 1000)