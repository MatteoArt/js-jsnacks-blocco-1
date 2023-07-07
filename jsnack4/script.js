//stampa le potenze di due fino a 1000

let potenza = 1;
console.log(`2 alla 0: ${potenza}`);

while (potenza <= 1000) {

    potenza = potenza *2;

    if (potenza < 1000) {
        console.log(potenza);
    } else if (potenza >= 1000) {
        break;
    }
    
}