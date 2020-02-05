/* Start */
/* Element vi använder */
const elementRum = document.querySelectorAll('input[name="rum"]');
const elementAntalNätter = document.querySelector('select');
const elementTillägg = document.querySelectorAll('input[name="till"]');
const elementKampanjKod = document.querySelector('#kampanjkod')
const elementKnapp = document.querySelector('button')
const elementP = document.querySelector('p')


/* Läser av bokningen */
elementKnapp.addEventListener("click", räknaut)

/* Räkna ut kostnaden */
function räknaut(){
    var kostnad = 0,rumpris = 0;
    /* Läser av bokningen */

    /* Val av rum */

    if(elementRum[0].checked == true) {
        rumpris = kostnad + 500;
    }
    if(elementRum[1].checked == true) {
        rumpris = kostnad + 800;
    }
    if(elementRum[2].checked == true) {
        rumpris = kostnad + 1000;
    }

    var antalNätter = elementAntalNätter.value;
    kostnad = rumpris * antalNätter;
    console.log(kostnad);
    

    var kampanjkod  = elementKampanjKod.value;

    
    console.log(antalNätter, kampanjkod);

    if (elementTillägg[0].checked == true) {
        kostnad = kostnad + 50;

    }
    if (elementTillägg[1].checked == true) {
        kostnad = kostnad + 200;

    }
    if (elementTillägg[2].checked == true) {
        kostnad = kostnad + 100;

    }
    if (elementTillägg[3].checked == true) {
        kostnad = kostnad + 50;

    }

    var kampanjkod = elementKampanjKod.value;
    if(kampanjkod == "sommarlov"){
        kostnad = kostnad * 0.8;
    }

    console.log(kostnad);
    
    elementP.textContent = " Dina val ger en Kostnad på" +
}


[]
/* Visa kostnaden */