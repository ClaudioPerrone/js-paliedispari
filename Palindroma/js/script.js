/* 
Palindroma

- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma
- Su internet ci sono soluzioni con join e reverse, non potete usarle!
*/

//INPUT DATI
//Inserire una parola
const parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);
//Invocare la funzione "isWordPalindrome" e legarla
const parolaUtentePalindroma = palindromaParola(parolaUtente);

//OUTPUT DATI
if(parolaUtentePalindroma){
    alert("è palindroma");
} else{
    alert("non è palindroma");
}

//ELABORAZIONE DATI
function palindromaParola(parola){
    let parolaContrario = "";
    for (let i = parola.length - 1; i>= 0; i--){
        const lettera = parola[i];
        parolaContrario += lettera;
    }

    let palindroma;
    if(parolaContrario === parola){
        palindroma = true;
    } else{
        palindroma = false;
    }

    return palindroma;
}