const numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];
let numerosPares = 0
let numerosImpares = 0
let maioresQue20 = 0

//Varredura do array.
for (let i = 0; i < numeros.length; i++) {
    //Codicional para números pares.
    if (numeros[i] %2 == 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }
    //Codicional para maiores que 20
    if (numeros[i] > 20) {
        maioresQue20++;
    }
}

console.log(`A quantidade de números pares é: ${numerosImpares}.`)
console.log(`A quantidade de números impares é: ${numerosPares}.`)
console.log(`A quantidade de números que 20 é: ${maioresQue20}.`)
