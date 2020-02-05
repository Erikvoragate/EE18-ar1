/* 1967 Louis Armstrong sjunger in den blivande klassikern What a wonderful world */
/* 1940 Chaplin gör ett nidporträtt av Hitler i sin film Diktatorn */
/* 1928 Alexander Fleming upptäcker penicillinet av en slump */
/* 1952 Motorjournalisten Harald Nielsen förenar orden motor och pedal. Nyordet moped sprider sig till flera språk */
/* 1963 AB svensk bilprovning bildas */
/* 2001 Sverige fösta internanella kasino öppnas i Sundsvall */



/* Globala variabler */
var frågor = ["Louis Armstrong sjunger in den blivande klassikern What a wonderful world",
    "Chaplin gör ett nidporträtt av Hitler i sin film Diktatorn",
    "Alexander Fleming upptäcker penicillinet av en slump",
    "Motorjournalisten Harald Nielsen förenar orden motor och pedal. Nyordet moped sprider sig till flera språk", "AB svensk bilprovning bildas", "Sverige fösta internanella kasino öppnas i Sundsvall"
];
var årtal = [
    1967,1940,1928,1952,1963,2001
];
var slumptal;
varv = 10;
const elementFårgaRuta = document.querySelector("textarea");
const elementÅrtalRuta = document.querySelector("input");
const elementKnappSkickar = document.querySelector("button");



console.log(frågor[0]);
console.log(frågor[5]);

function nyFråga() {
    slumptal = Math.floor(Math.random() * 6)
    console.log(frågor[slumptal]);
    elementFårgaRuta.value = frågor[slumptal];

    elementTummenUpp.style.display = "none";
    elementTummenNed.style.display = "none";
}
nyFråga();


elementKnappSkickar.addEventListener("click",kollaSvaret);

function kollaSvaret() {
    var svar = elementÅrtalRuta.value;
    console.log(svar);

    var årtalet = årtal[slumptal];    

    if (svaret == årtalet ) {
        console.log("Yipee");
        elementTummenUpp.style.display = "block";
        elementTummenNed.style.display = "none";
        
        
    } else {
        console.log("LoL");
        elementTummenNed.style.display = "block";
        elementTummenUpp.style.display = "none";
    }
}
/* Poänger */
