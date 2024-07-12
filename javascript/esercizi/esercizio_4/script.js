/*
partendo dallo stesso esercizio inserire 
i primi tre numeri in un oggetto 
e trattare i valori dell'oggetto 
all'interno della funzione. 
es: function orderNumbers(numbers, order) {} 
dove numbers sarà formato come oggetto es. {a: 3, b:5, c:2,3345}
*/


const ordinaTreNumeri = (numbers, crescente) => {

    let numUno = numbers.a;
    let numDue = numbers.b;
    let numTre = numbers.c;

    try {
        numUno = parseInt(numUno);
        numDue = parseInt(numDue);
        numTre = parseInt(numTre);
    } catch (error) {
        console.log("i numeri inserino non sono interi");
        return 1;
    }

    let arrNumeri = [];

    if (typeof(crescente) == "boolean") {
        console.log("booleano");
        arrNumeri = [numUno, numDue, numTre];

        console.log(arrNumeri);
        if(crescente) {
            console.log("ordino crescente");
            console.log(arrNumeri.sort());
            return arrNumeri.sort((a, b) => a - b);
        }
        else {
            console.log("ordino decrescente");
            return arrNumeri.sort((a, b) => b - a);
        }

    }

    else {
        console.log("funzione ordina: il criterio non è booleano");
        return "not a boolean";
    }

}

function scriviNumeriOrdinati(event) {

    event.preventDefault();

    let campoNumUno = document.getElementById("campoNumUno");
    let campoNumDue = document.getElementById("campoNumDue");
    let campoNumTre = document.getElementById("campoNumTre");
    let campoQuarto = document.getElementById("campoQuarto");
    let campoRisultato = document.getElementById("areaOrdine");

    let numUno = campoNumUno.value;
    let numDue = campoNumDue.value;
    let numTre = campoNumTre.value;
    let quartoParametro = campoQuarto.value;
    quartoParametro = quartoParametro.trim();
    quartoParametro = quartoParametro.toLowerCase();

    let crescente;

    let numbers = {
        a: numUno,
        b: numDue,
        c: numTre
    }

    try {
        numUno = parseInt(numUno);
        numDue = parseInt(numDue);
        numTre = parseInt(numTre);

    } catch(error) {
        console.log("uno dei tre numeri inseriti non è un intero");
    }

    if(quartoParametro == "true" || quartoParametro == "1") {
        crescente = true;
    }

    else if (quartoParametro == "false" || quartoParametro == "0"){
        crescente = false;
    }

    else {
        console.log("il quarto parametro inserito non è un booleano")
    }


    campoRisultato.value = ordinaTreNumeri(numbers, crescente);
}