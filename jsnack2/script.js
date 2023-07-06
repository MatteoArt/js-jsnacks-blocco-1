/* Crea un array di numeri interi e 
fai la somma di tutti gli elementi che sono in posizione dispari. 
*/

const numbers = [4,67,12,45,1,100,3,18,67,75,81,123,256,13,89];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 1) {
        sum += numbers[i];
    }
}
console.log(`La somma degli elementi dell'array in posizione 
dispari è ${sum}`);