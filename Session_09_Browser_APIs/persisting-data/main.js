const inc_btn = document.querySelector("#inc")
const dec_btn = document.querySelector("#dec")
const counter_label = document.querySelector("#counter")



if(localStorage.getItem("count") == null){
    localStorage.setItem("count", "0")
}

let count = Number(localStorage.getItem("count"))
displayCount()

inc_btn.addEventListener("click", () => {
    console.log("Increment")
    count++
    displayCount()
})

dec_btn.addEventListener("click", () => {
    console.log("Decrement")
    if(count > 0){
        count--
        displayCount()
    }
})

function displayCount(){
    localStorage.setItem("count", count)
    counter_label.textContent = "Antal passagerer: " + count
}