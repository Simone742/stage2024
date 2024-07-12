function cambiaBordoTitolo() {

    const elementoTitolo = document.getElementById('titolo_divina_commedia');

    let stileBordoTitolo = elementoTitolo.style.borderStyle;
    let nuovoStile;

    if (stileBordoTitolo === "dashed") {
        nuovoStile = "solid";
    }
    else {
        nuovoStile = "dashed";
    }

    elementoTitolo.style.borderStyle = nuovoStile;

}