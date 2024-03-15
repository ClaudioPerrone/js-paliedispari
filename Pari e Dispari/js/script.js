/* 
Pari e Dispari

- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto.
*/

//INPUT DATI
//L'utente sceglie tra pari o dispari
const utentePariDispari = prompt("Scegli pari o dispari");
console.log("Scelta giocatore", utentePariDispari);
//Scegliere un numero tra 1 e 5
const utenteNumero = parseInt(prompt("Dammi un numero tra 1 e 5"));
console.log("Numero giocatore", utenteNumero);
//Numero random tra 1 e 5
const pcNumero = getRndInteger(1, 5);
console.log("Numero computer", pcNumero);
//Somma dei 2 numeri
const sum = utenteNumero + pcNumero;
console.log("Somma", sum);
//Stabilire se la somma è pari o dispari
const sommaPariDispari = isNumberPariDispari(sum);
console.log(sommaPariDispari);


//ELABORAZIONE DATI
let userMessage;

//L'utente vince se la somma è pari o dispari come il risultato della funzione
if(utentePariDispari === sommaPariDispari){
    userMessage = "Hai vinto";
} else{
    userMessage = "Hai perso";
}

//OUTPUT DATI
alert(userMessage);
//-------------------

//FUNCTIONS
//Crea a random un min e max
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Funzione che stabilisce se un numero è pari
function isNumberPariDispari(number){
    let PariDispari;

    if(number % 2 === 0){
        //"pari" se il numero è pari
        PariDispari = "pari";
    } else{
        //"dispari" se il numero è dispari
        PariDispari = "dispari";
    }

    return PariDispari;
}