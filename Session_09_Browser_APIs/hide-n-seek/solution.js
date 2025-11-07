const btn = document.querySelector("button")
const img = document.querySelector("img")

btn.addEventListener("click", e => {
    if(img.classList.contains("hidden")){
        btn.textContent = "Hide"
    } else {
        btn.textContent = "Show"
    }
    img.classList.toggle("hidden")
})