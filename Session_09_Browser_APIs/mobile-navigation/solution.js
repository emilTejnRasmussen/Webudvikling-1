const menu_btn = document.querySelector("#menu-button")
const nav = document.querySelector("nav")




menu_btn.addEventListener("click", () => {
    nav.classList.toggle("active")
    if(nav.classList.contains("active")){
        menu_btn.textContent = "✖"
    } else {
        menu_btn.textContent = "☰"
    }
})

document.addEventListener("scroll", () => {
    nav.classList.remove("active")
    menu_btn.textContent = "☰"
})