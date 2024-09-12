// page loading animations
document.addEventListener("DOMContentLoaded", function() {
    let infoBox = document.querySelector(".infoBox")
    infoBox.classList.add("animate")
    let description = document.querySelector(".description")
    description.classList.add("animate")

    let sBoxes = document.querySelectorAll(".sBoxes");

    sBoxes.forEach(sBox => {
        sBox.addEventListener("click", function (event) {
            if(event.currentTarget.classList.contains("flip")) {
                event.currentTarget.classList.remove("flip")
            } else {
                event.currentTarget.classList.add("flip");
            }

            console.log('lol', event.currentTarget.classList);
        })
    });
    
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 }); // Adjust the threshold value as needed

    sBoxes.forEach(function(sBox) {
        observer.observe(sBox);
    });
});

let p = document.getElementById("contactBox")
let isCurrentlyCopied = false

p.addEventListener("click", function (event) {
    if (event.target.classList.contains("copyable") && !isCurrentlyCopied) {
        copyToClipboard(event.target.innerText)

        let copiedTooltip = document.getElementById("copiedTooltip")
        let rect = event.target.getBoundingClientRect()
        
        copiedTooltip.style.top = `${rect.top - copiedTooltip.offsetHeight - 10 + window.scrollY}px`
        copiedTooltip.style.left = `${rect.left + (rect.width / 2) - (copiedTooltip.offsetWidth / 2)}px`
        
        copiedTooltip.classList.add("show-tooltip")

        isCurrentlyCopied = true

        setTimeout(function () {
            copiedTooltip.classList.remove("show-tooltip")
            isCurrentlyCopied = false
        }, 2000);
    }
});

function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}