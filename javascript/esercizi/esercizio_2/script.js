/*Scrivere un programma per verificare se un carattere specificato esiste 
tra la 2a e la 4a posizione in una determinata stringa.  
Procedere con le stesse modalità dell'esercizio 1. */
console.log("fuori funzione");
function verificaCarattereInStr(event, start, end) {
    console.log("funzione");
    //non far refreshare la pagina
    event.preventDefault();

    //otteniamo gli elementi della pagina html
    let campoCarattere = document.getElementById("campoCarattere");
    let campoStringa = document.getElementById("campoStringa");
    let labelEsito = document.getElementById("labelEsito");

    //prendiamo i valori inseriti dall'utente
    let carattere = campoCarattere.value;
    let stringa = campoStringa.value;

    let presente = false;

    start--;
    end--;

    for(let i = start; i < end; i++) {
        let carattereCorrente = stringa[i];
        if (carattereCorrente == carattere) {
            presente = true;
        }
        
    }

    if (presente) {
        labelEsito.innerHTML = "presente!";
        console.log("presente");
    }
    else {
        labelEsito.innerHTML = "non presente...";
        console.log("non presente");
    }
    
}