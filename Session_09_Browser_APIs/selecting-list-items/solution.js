const listItem = document.querySelectorAll("li")

let lastCurrentActive

for(let li of listItem){
    li.addEventListener("click", () => {
        if(lastCurrentActive != null){
            lastCurrentActive.classList.remove("active")
        }
        li.classList.add("active")
        lastCurrentActive = li
    })
}
