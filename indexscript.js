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
    let p1 = document.getElementById("p1")
    let serviceBtn = document.getElementById("serviceBtn")
    let map = document.getElementById("map")

    if(localStorage.getItem("language") === "English")
    {
        home.textContent = "Home"
        services.textContent = "Services"
        forus.textContent = "For us"
        contact.textContent = "Contacts"
        h1.textContent = "Cabinet"
        p1.textContent = "Cabinet for kinesitherapy and physiotherapy in Sofia"
        serviceBtn.textContent = "Make an appointment"
        map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d738.5974016355874!2d23.371639100686753!3d42.679694505758754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85dd145810c5%3A0x5536d7abd983caba!2sElectronic%20scales%20-%20Profinans%20D%20Ltd.!5e0!3m2!1sen!2sbg!4v1692901397333!5m2!1sen!2sbg")
    }else
    {
        home.textContent = "Начало"
        services.textContent = "Услуги"
        forus.textContent = "За нас"
        contact.textContent = "Контаки"
        h1.textContent = "Кабинет"
        p1.textContent = "Кабинет за кинезитерапия и физиотерапия в София"
        serviceBtn.textContent = "Запишете час"
        map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d937.3184522840976!2d23.371785276187822!3d42.679643406120505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85dd145810c5%3A0x5536d7abd983caba!2z0JXQu9C10LrRgtGA0L7QvdC90Lgg0LLQtdC30L3QuCAtINCi0YrRgNCz0L7QstGB0LrQuCDQutCw0L3RgtCw0YDQuCAtINCf0YDQvtGE0LjQvdCw0L3RgSDQlCDQldCe0J7QlA!5e0!3m2!1sbg!2sbg!4v1692805310034!5m2!1sbg!2sbg")
    }
}