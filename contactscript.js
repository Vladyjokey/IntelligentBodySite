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


let p = document.getElementById("p")

p.addEventListener("click", function (event) {
    if (event.target.nodeName === "SPAN") {
        copyToClipboard(event.target.innerText);
        let copiedText = document.getElementById("copiedText")
        copiedText.style.opacity = 1
        setTimeout(function () {
            copiedText.style.opacity = 0
        }, 1000)
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

function updateText()
{
    let home = document.getElementById("home")
    let services = document.getElementById("services")
    let forus = document.getElementById("for-us")
    let contact = document.getElementById("contact")
    let h1 = document.getElementById("h1")
    let p = document.getElementById("p")
    let h4 = document.getElementById("copiedText")

    if(localStorage.getItem("language") === "English")
    {
        home.textContent = "Home"
        services.textContent = "Services"
        forus.textContent = "For us"
        contact.textContent = "Contacts"
        h1.textContent = "Make an appoinment"
        p.innerHTML = "Make an appointment or contact us for more information on <span style='cursor: pointer;'>+359 88 952 0601</span>."
        h4.style.left = "40%"
    }else
    {
        home.textContent = "Начало"
        services.textContent = "Услуги"
        forus.textContent = "За нас"
        contact.textContent = "Контаки"
        h1.textContent = "Запишете час"
        p.innerHTML = "Запазете си час или се свържете за повече информация на номер <span style='cursor: pointer;'>088 952 0106</span>."
        h4.style.left = "45%"
    }
}