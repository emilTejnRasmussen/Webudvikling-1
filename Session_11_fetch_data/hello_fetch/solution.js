fetch("message.txt")
    .then(response => response.text())
    .then(msg => {
        const p = document.querySelector("#messageContainer")
        p.textContent = msg
    })
