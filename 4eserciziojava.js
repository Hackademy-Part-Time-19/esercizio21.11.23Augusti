
// Traccia 1: Ordinare questa lista prima secondo il nome e poi secondo il prezzo. 


let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,

    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,

    },
    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,

    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,

    },
]

let listaOrdinataAlfabetico = listaProdotti.sort((a, b) => {
    const nameA = a.nome.toUpperCase();
    const nameB = b.nome.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    // names must be equal
    return 0;
});

console.log(listaOrdinataAlfabetico); //Lista prodotti in ordine alfabetico


let listaProdottiAlfabeticoInverso = listaProdotti.sort((a, b) => {
    const nameA = a.nome.toUpperCase();
    const nameB = b.nome.toUpperCase();
    if (nameB < nameA) {
        return -1;
    }
    if (nameB > nameA) {
        return 1;
    }
    // names must be equal
    return 0;
});
console.log(listaProdottiAlfabeticoInverso); // lista ordinata per nome in ordine alfabetico inverso   


let listaOrdinataPrezzoCrescente = listaProdotti.sort((a, b) => a.prezzo - b.prezzo);
console.log(listaProdottiPrezzoCrescente); //Lista prodotti ordinata per prezzo crescente

let listaOrdinataPrezzoDecrescente = listaProdotti.sort((a, b) => b.prezzo - a.prezzo);
console.log(listaOrdinataPrezzoDecrescente); //Lista prodotti ordinata per prezzo decrescente


// Traccia 2: dall'array precedente filtrare gli elementi con prezzo >250. Utilizzare 2 versioni: La prima con una funzione scritta a mano; la seconda utilizzando il metodo filter.

function filtraLista(listaArticoli) {
    let listaFiltrata = [];
    for (let i = 0; i < listaArticoli.length; i++) {
        if (listaArticoli[i].prezzo > 250) {
            listaFiltrata.push(listaArticoli[i]);
        }
    }
    return listaFiltrata
}
let listaFiltrata = filtraLista(listaProdotti);
console.log(listaFiltrata); //prima versione, scrivendo a mano una funzione.


let listaFiltrata2 = listaProdotti.filter(prezzoFiltrato => prezzoFiltrato.prezzo > 250);
console.log(listaFiltrata2); //seconda versione utilizzando filter 

// Traccia 3: facendo uso di split, stampare i parametri dopo ? del seguente indirizzo: "https://sitodiecommerce.com/paginaDelProdotto?idprodotto=12121212&userid=34512&time=8999"

const testo = "https://sitodiecommerce.com/paginaDelProdotto?idprodotto=12121212&userid=34512&time=8999";
const dividereLaStringa = testo.split("?");
console.log(dividereLaStringa);

const suddividereParametri = (dividereLaStringa[1]).split("&");
console.log("I parametri divisi sono i seguenti: \n" + suddividereParametri);

// Traccia 4: scrivere una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

let frasePalindroma = "I topi non avevano nipoti.";

function reverseString(stringa) {

    const noSegniPunteggiatura = stringa.replace(/\W/g, "");
    const fraseInPiccolo = noSegniPunteggiatura.toLowerCase();
    console.log(fraseInPiccolo);
    const stringaInvertita = fraseInPiccolo.split('').reverse().join('');
    console.log(stringaInvertita);

    if (fraseInPiccolo == stringaInvertita) {
        return true;
    } else {
        return false;
    }
}

console.log(reverseString(frasePalindroma));

frasePalindroma = "Corso - Aulab";
console.log(reverseString(frasePalindroma));