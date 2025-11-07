const inc_btn = document.querySelector("#inc")
const dec_btn = document.querySelector("#dec")
const counter_label = document.querySelector("#counter")

let count = 0

inc_btn.addEventListener("click", () => {
    console.log("Increment")
    count++
    displayCount()
})

dec_btn.addEventListener("click", () => {
    console.log("Decrement")
    if(count <= 0){
        count = 0
        return
    }
    count--
    displayCount()

})

function displayCount(){
    counter_label.textContent = "Antal passagerer: " + count
}