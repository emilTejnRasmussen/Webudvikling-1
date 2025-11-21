fetch("nav.html")
        .then(response => response.text())
        .then(html => {
            const nav = document.querySelector("#navContainer")
            nav.innerHTML = html

            const currentPage = window.location.pathname.split("/").pop() || "index.html"

            const links = nav.querySelectorAll("nav a")

            for (const link of links) {
                if(link.getAttribute("href") === currentPage){
                    link.classList.add("active")
                }
            }
        })

