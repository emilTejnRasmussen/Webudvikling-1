const text_area = document.querySelector("textarea")
const counter = document.querySelector("#counter")

text_area.addEventListener("input", () => {
    counter.textContent = text_area.value.length
})