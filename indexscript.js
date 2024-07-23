let navLinks = document.getElementById("navLinks")
let fa = document.getElementById("faTimes")

// page loading animations
document.addEventListener("DOMContentLoaded", function() {
    // Navigation bar color on load
    const scrollPosition = window.scrollY;
    const maxScroll = 500; // Adjust this value based on when you want the color to be fully opaque

    if (scrollPosition > 0) {
        const opacity = Math.min(scrollPosition / maxScroll, 1); // Calculate opacity based on scroll position
        navLinks.style.background = `linear-gradient(to bottom, rgba(99, 158, 61, ${opacity}) 75%, rgba(99, 158, 61, ${opacity - 0.5}) 100%)`;
    } else {
        navLinks.style.backgroundColor = "rgba(99, 158, 61, 0)"; // Fully transparent
    }


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

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const maxScroll = 500; // Adjust this value based on when you want the color to be fully opaque

    if (scrollPosition > 0) {
        const opacity = Math.min(scrollPosition / maxScroll, 1);
        navLinks.style.background = `linear-gradient(to bottom, rgba(99, 158, 61, ${opacity}) 75%, rgba(99, 158, 61, ${opacity - 0.5}) 100%)`;
    } else {
        navLinks.style.background = "rgba(99, 158, 61, 0)";
    }
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

function showMenu(){
    navLinks.style.right = "0"
    fa.style.top = "0"
    fa.style.right = "0"
}

function hideMenu(){
    navLinks.style.right = "-200px"
    fa.style.top = "-8vh"
    fa.style.right = "-2vh"
}