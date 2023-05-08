//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const container = document.getElementById("container");
console.log(container);

//Chiedi pari o dispari utente
const sceltaPariDispariUtente = prompt("Scrivi 'pari' o 'dispari'");
console.log(sceltaPariDispariUtente);
container.innerHTML += `<h4> Hai scelto </h4>` + sceltaPariDispariUtente;

//Chiedi un numero da 1 a 5 utente.
const numeroUtente = parseInt (prompt("Hei utente ,inserisci un numero da 1 a 5"));
console.log(numeroUtente);
container.innerHTML += `<h4> Il tuo numero e' </h4>` + numeroUtente;

//Genera numero random da 1 a 5 PC
const numeroPC = generaNumeroRandom (1 , 5);
console.log(numeroPC);
container.innerHTML += `<h4> Il numero del tuo avversario e' </h4>`  + numeroPC;

//Somma i due numeri 
const risultato = (numeroUtente + numeroPC );
console.log( "La somma totale e' " + risultato);
container.innerHTML += `<h4> La somma dei vostri numeri e' </h4>` + risultato;

//Stabiliamo se la somma dei due numeri è pari o dispari 
 const PariODispari= controlloNumeroPariDispari (risultato);


//FUNZIONI
    //Funzione numero random
    function generaNumeroRandom(min , max) {
        const numeroRandom =  Math.floor(Math.random() * (max - min)) + min;
        return numeroRandom;
    }

    //Funzione controllo pari o dispari
    function controlloNumeroPariDispari(numero){
        if (numero % 2 === 0){
            console.log("La somma e' pari");
        }

        else {
        console.log("La somma e' dispari");
        }
    }

    //OUTPUT VINCITORE

    if ((risultato % 2 === 0 && sceltaPariDispariUtente === "pari") || (risultato % 2 != 0 && sceltaPariDispariUtente === "dispari") ) {

        console.log(`Complimenti , hai vinto!`);
        container.innerHTML += `Complimenti , hai vinto!`;

        } else {

        console.log(`<h1> Sorry , hai perso! AHAHAHAH </h1>`);
        container.innerHTML += `<h1> Sorry , hai perso! AHAHAHAH </h1> `;
    }




