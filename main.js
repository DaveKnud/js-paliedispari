const container = document.getElementById("container");

//Chiedere a utente una parola
const parolaUtente = prompt("inserisci parola polindroma");
console.log(parolaUtente);

//Reverse parola utente
let reversed = parolaUtente.split("").reverse().join("");
console.log(reversed);

//Creare una funzione per capire se la parola inserita è palindroma
if (parolaUtente === reversed) {
    container.innerHTML += `<h1> La tua parola e' palindroma </h1>`;
    console.log("La tua parola e' palindroma");
}

else{
    container.innerHTML += `<h1> La tua parola NON e' palindroma </h1>`;
}




