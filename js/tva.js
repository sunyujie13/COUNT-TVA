
var tauxTva = document.getElementById("tvaButton");
var changeButton = document.getElementsByClassName("ourButton");

for (i = 0;i < changeButton.length; i ++) {
    changeButton[i].addEventListener('click',myTva);
}
function myTva(){
    tauxTva.innerHTML = this.innerHTML;
}

function myFunction() {
    var myvar = parseFloat(tauxTva.innerHTML)/100
    var x = document.getElementById('montant').value;
    var y = parseFloat (x) * (myvar) + " €";
    document.getElementById('tva').value = y;
    var z = parseFloat(x) + parseFloat(y)+ " €" ;
    document.getElementById('ttc').value = z;
}
myFunction ();

