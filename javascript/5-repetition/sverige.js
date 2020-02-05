/* Start */
const elementInput = document.querySelector("input")
const elementKnapp = document.querySelector("button")
const elementOutput = document.querySelector("textarea")
/* Läs av ålder */
elementKnapp.addEventListener("click", ålderskoll );

/* kolla upp åldergråns */
function ålderskoll() {
    /* Läs av ålder */
    var ålder = elementInput.value;
    console.log(ålder);

    /* kolla upp åldergråns */
    if (ålder == 18){
        /* skriv ut svaret */
        elementOutput.value = "Du blir mindig. Du får gifta sig"

    }

}

/* skriv ut svaret */