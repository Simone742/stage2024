/*
partendo dall'esercizio 1, creare una funzione che accetta tre numeri 
ed un quarto parametro e printare un array con i tre numeri interi 
messi in ordine dal più grande al più piccolo o viceversa a seconda 
del quarto parametro, che può essere una stringa o un booleano. 
Restituire un eccezione (un errore a console, in questo caso), 
qualora uno dei parametri immessi nella funzione non corrisponda 
al tipo desiderato (es. immetto un booleano al posto di un numero), 
in caso si inserisca una stringa invece provare a convertire il 
valore a numero e usare parseInt per convertire qualsiasi valore 
float in intero (domani vediamo come si può fare in un modo diverso)
*/


const ordinaTreNumeri = (numUno, numDue, numTre, crescente) => {

    let arrNumeri = [];

    
    try {
        numUno = parseInt(numUno);
        numDue = parseInt(numDue);
        numTre = parseInt(numTre);
    } catch (error) {
        console.log("errore, uno dei numeri non è convertibile");
        return 1;
    }

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
        return 1;
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


    campoRisultato.value = ordinaTreNumeri(numUno, numDue, numTre, crescente);
}