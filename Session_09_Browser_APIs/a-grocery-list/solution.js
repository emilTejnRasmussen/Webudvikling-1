
const input = document.querySelector("input")
const add_btn = document.querySelector("button")
const list = document.querySelector("ul")

add_btn.addEventListener("click", () => {

    if(isValidInput(input.value)){
        const listItem = document.createElement("li")
        listItem.textContent = input.value
        list.append(listItem)
        input.value = ""
    }
})

function isValidInput(value){
    return !(value == null || value === "")
}