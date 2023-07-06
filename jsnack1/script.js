/* Generatore di “nomi cognomi” casuali:
il Grande Gatsby ha una lista di nomi e una lista di cognomi, e 
da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

const listEl = document.querySelector(".lista");

const nomi = ["Matteo","Michele","Giulia","Riccardo","Pietro","Pasquale","Salvatore",
"Lorenzo"];

const cognomi = ["Artizzu","Piccinno","Corrado","Carluccio","Leone","Isabelli",
"Bono","Porrega"];

const lunghezza_arr = nomi.length;  //8

for (let i = 0; i < lunghezza_arr; i++) {
    //genero ad ogni giro due numeri randomici, uno per il nome e uno per il cognome
    let rand1 = Math.floor(Math.random() * lunghezza_arr);
    let rand2 = Math.floor(Math.random() * lunghezza_arr);
    let nome_random = nomi[rand1]; //estraggo nome casuale
    let cogn_random = cognomi[rand2]; //cognome casuale
    console.log(nome_random + " " + cogn_random);

    listEl.innerHTML += `<li>${nome_random} ${cogn_random}</li>`;
}