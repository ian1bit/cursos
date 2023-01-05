"use strict";
let produto = "Livro";
const preco = 300;
const carro = {
    marca: "Audi",
    portas: 5,
};
const barato = preco < 400 ? true : 'Produto e caro';
function somar(a, b) {
    return a + b;
}
somar(4, 10);
// somar('string', 4)
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
