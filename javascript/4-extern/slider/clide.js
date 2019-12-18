const elemetBild = document.querySelector("img")
var bildNr =1; 

function föreBild() {
    bildNr = bildNr - 1;
    if(bildNr == 0) {
       bildNr = 8;
    }
    elementbild.src = "./foton/foto" + bildNr + ".jpg";

}
function nästaBild() {
    bildNr = bildNr + 1;
    if(bildNr == 9){
       bildNr = 1;
    }
    elementbild.src = "./foton/foto" + bildNr + ".jpg";

   
}
function play(){
    setInterval(1000,nästaBild);
}