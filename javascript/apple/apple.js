const elementAntal = document.querySelector("#antal")
const elementFrukt = document.querySelector("#frukt")
const elementSkickar = document.querySelector("#skicka")
const elementRadera = document.querySelector("#radera")
const elementOutput = document.querySelector("#output")
const elementFel = document.querySelector("#fel")

/* Skickar */
elementSkickar.addEventListener('click', skickar);

function skickar() {
    var antal = elementAntal.value;
    var frukt = elementFrukt.value;

    //ränsa listan
    elementFel.textContent = "";

    if (antal == "") {
        elementFel.innerHTML = "Du har inte valde antal<br>";

    }
    if (frukt == "") {
        elementFel.innerHTML += "Du har inte valde frukt<br>";

    }
    if (antal == 1) {
        antal = "ett";
    }
    if (antal == 2) {
        antal = "två";
    }
    if (antal < 1) {
        antal = "ett";
    }
    if (antal > 2) {
        antal = "två";
    }

    if (frukt != "äpple") {
        elementFel.innerHTML = "välj äpplen istället för " + frukt;
    }
    
    if (frukt == "äpple") {
        elementOutput.innerHTML = "Docktor säger " + antal + " " + frukt +" " + "om dag håller docktor borta!";
    }




}