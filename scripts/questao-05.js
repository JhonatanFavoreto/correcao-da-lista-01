const precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
const precosComDesconto = [];
let contadorArrayPrecoDesconto = 0;
let preco = 0;
let desconto = 0;

//Varredura de array com laço de repetição
for (let i = 0; i < precos.length; i++) {
    preco = precos[i];
    if (precos[i] > 100) {
        desconto = precos[i] * 0.1; // 10/100 
        preco = precos[i] - desconto;
    }
    precosComDesconto[contadorArrayPrecoDesconto] = preco;
    contadorArrayPrecoDesconto++;
} 
console.table(precos);
console.table(precosComDesconto);