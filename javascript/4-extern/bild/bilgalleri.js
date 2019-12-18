/* kod som körs vid start */
/* välja ut element vi ska jobba med */
const elementBildruta = document.querySelector("#bildruta");

/* kod som körs efter start, när man klickar på minatur */
function visaBild(nr){
    elementBildruta.innerHTML = "<img src=<\"./bild/foto"+ nr +".jpg\" alt=\"foto\">"
}