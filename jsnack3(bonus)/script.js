/* Crea due array che hanno un numero di elementi diversi. 
Aggiungi elementi all’array che ha meno elementi fino a quando ne
avrà tanti quanti l’altro.
*/

const arr1 = [1,"casa",23,false,"mare",-4,"script","terra","Torino",
"Roma","oceano"];

const arr2 = [23,false,-9,"sole","NewYork",0];

let lunghezzaArr1 = arr1.length;
let lunghezzaArr2 = arr2.length;

//ottengo il numero di elementi che mancano all'array più piccolo per
//avere la stessa lunghezza di quello più grande
let differenza = lunghezzaArr1 - lunghezzaArr2;

//console.log(lunghezzaArr1,lunghezzaArr2,differenza);

//imposto un ciclo for che fa un numero di giri pari alla differenza tra
//le lunghezze dei due array

let stringa = "mare";
for (let i = 1; i <= differenza; i++) {
    arr2.push(stringa);
}
//aggiorno la lunghezza di arr2
lunghezzaArr2 = arr2.length;

//output su console
console.log(arr2);
if(lunghezzaArr1 === lunghezzaArr2) {
    console.log(`I due array hanno la stessa lunghezza --> ${lunghezzaArr2}`);
}