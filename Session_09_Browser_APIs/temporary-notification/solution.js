const text_area = document.querySelector("textarea")
const status_field = document.querySelector("#status")

let timerID = null

text_area.addEventListener("input", () => {
    clearTimeout(timerID)
    timerID = setTimeout(saveChanges, 2000)
})

function saveChanges() {
    localStorage.setItem("post", text_area.value)
    status_field.textContent = "Draft saved!"
    setTimeout(()=> {
        status_field.textContent = ""
    }, 1000)
}