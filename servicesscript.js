let navLinks = document.getElementById("navLinks")
let fa = document.getElementById("faTimes")
let language = document.getElementById("language")
let wantedLan = null

updateText()

window.addEventListener("load", function(){
    let lanButton = document.getElementById("lanButton")

    if(localStorage.getItem("language") != null)
    {
        Array.from(lanButton.children).forEach(child => {
            if(child.tagName == "LABEL"){
                child.textContent = localStorage.getItem("language")
            }
        })
    }else
    {
        localStorage.setItem("langauge", "Български")
    }
})

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 1) {
        navLinks.style.backgroundColor = "#639E3D";
    } else {
        navLinks.style.background = "transparent";
    }
  });


language.addEventListener("click", function(event){
    let target = event.target

    wantedLan = target.text

    if(wantedLan != null)
    {
        let lanButton = document.getElementById("lanButton")

        Array.from(lanButton.children).forEach(child => {
            if(child.tagName == "LABEL"){
                child.textContent = wantedLan
                localStorage.setItem("language", wantedLan)
            }
        })

        updateText()
    }
})

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

function updateText()
{
    let home = document.getElementById("home")
    let services = document.getElementById("services")
    let forus = document.getElementById("for-us")
    let contact = document.getElementById("contact")
    let h1 = document.getElementById("h1")
    let h2 = document.getElementById("h2")
    let h3 = document.getElementById("h3")
    let p = document.getElementsByTagName("p")

    if(localStorage.getItem("language") === "English")
    {
        home.textContent = "Home"
        services.textContent = "Services"
        forus.textContent = "For us"
        contact.textContent = "Contacts"
        h1.textContent = "Services"
        h2.textContent = "Kinesitherapy"
        h3.textContent = "Therapeutic massages and manual therapy"
        for (let i = 0; i < p.length; i++) {
            if(p[i].id == "sp")
                p[i].textContent = "See more →"
        }
    }else
    {
        home.textContent = "Начало"
        services.textContent = "Услуги"
        forus.textContent = "За нас"
        contact.textContent = "Контаки"
        h1.textContent = "Услуги"
        h2.textContent = "Кинезитерапия"
        h3.textContent = "Лечебни масажи и мануална терапия"
        for (let i = 0; i < p.length; i++) {
            if(p[i].id == "sp")
                p[i].textContent = "Вижте повече →"
        }
    }
}