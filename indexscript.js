let navLinks = document.getElementById("navLinks")
let fa = document.getElementById("faTimes")

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const maxScroll = 500; // Adjust this value based on when you want the color to be fully opaque

    if (scrollPosition > 0) {
        const opacity = Math.min(scrollPosition / maxScroll, 1); // Calculate opacity based on scroll position
        navLinks.style.backgroundColor = `rgba(99, 158, 61, ${opacity})`; // Apply opacity to the background color
    } else {
        navLinks.style.backgroundColor = "rgba(99, 158, 61, 0)"; // Fully transparent
    }
});


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