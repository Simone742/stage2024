const esami = [
    {
        tipo: "normale",
        voto: 89,
    },
        
    {
        tipo: "normale",
        voto: 91,
    },

    {
        tipo: "normale",
        voto: 93,
    },

    {
        tipo: "finale",
        voto: 89,
    }
]

function valutaVoti(esami) {

    sogliaNormali = 89;
    sogliaFinale = 90;


    let mediaNormali = 0;
    let votoFinale;

    for(let i = 0; i < esami.length; i++) {
        esameCorrente = esami[i];


        if (esameCorrente.tipo == "normale") {
            mediaNormali += esameCorrente.voto;
        }

        else {
            esameCorrente.voto = votoFinale;
        }
        
    }

    console.log("totale esami normali: " + mediaNormali);

    mediaNormali = mediaNormali / (esami.length - 1);

    esiti = [];

    esiti.push(mediaNormali >= sogliaNormali);
    esiti.push(votoFinale >= sogliaFinale);

    console.log("media esami normali: " + mediaNormali);
    console.log("voto esame finale: " + votoFinale)

    console.log(esiti);

    return esiti;
}

valutaVoti(esami);