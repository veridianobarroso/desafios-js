/* 
Faça um programa para calcular o valor de uma viagem 

3 variáveis:
1- Preço do combustível
2- Gasto médio por km
3- Distancia em km da viagem

*/
const preco = 5.20;
let kmPorLitros = 12;
let distaciaKm = 17;

const litrosConsumidos = distaciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * preco;

console.log(valorGasto.toFixed(2));