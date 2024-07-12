/*
Scrivere un programma JavaScript per trovare il più grande tra tre numeri interi dati. 
Scrivere la stessa funzione nei tre modi che abbiamo visto: named function, 
anonymous function e arrow function. 
Restituire il valore e printarlo a console fuori dalla funzione.
*/

function trovaMaggioreNormale(numUno, numDue, numTre) {
    numUno = parseFloat(numUno);
    numDue = parseFloat(numDue);
    numTre = praseFloat(numTre);
    return Math.max(numUno, numDue, numTre);
}

const trovaMaggioreAnonimo = function (numUno, numDue, numTre) {
    numUno = parseFloat(numUno);
    numDue = parseFloat(numDue);
    numTre = praseFloat(numTre);
    return Math.max(numUno, numDue, numTre);
}

const trovaMaggioreFreccia = (numUno, numDue, numTre) => {
    numUno = parseFloat(numUno);
    numDue = parseFloat(numDue);
    numTre = praseFloat(numTre);
    return Math.max(numUno, numDue, numTre);
}


console.log(trovaMaggiore(5, 7, 9));

function trovaMax(event) {

    //non far ricaricare la pagina
    event.preventDefault();

    //estraiamo i 4 campi che ci interessano
    let campoNumUno = document.getElementById("campoNumUno");
    let campoNumDue = document.getElementById("campoNumDue");
    let campoNumTre = document.getElementById("campoNumTre");
    let campoRisultato = document.getElementById("textAreaMax");

    //prendiamo i valori al loro interno castandoli a float
    let numUno = parseFloat(campoNumUno.value);
    let numDue = parseFloat(campoNumDue.value);
    let numTre = parseFloat(campoNumTre.value);

    //troviamo il valore massimo
    let numMax = Math.max(numUno, numDue, numTre);

    console.log("Il valore massimo è " + numMax);

    //scriviamo nel campo del risultato il risultato
    campoRisultato.value = numMax;
}
