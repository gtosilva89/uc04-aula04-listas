// // Listas ?

// // Array - Conjunto de elementos de mesmo tipo de única dimensão
// let numeros: number[] = [1, 2, 3, 4, 5, 6];

// let matrizNumeros: number[][] = [
//   [1, 2, 3, 4, 5, 6],
//   [1, 5, 5, 6, 67, 1],
// ];

// // Array de um array de números - multidimensional
// let matrizEscalar: number[][] = [
//   [2, 0, 0],
//   [0, 2, 0],
//   [0, 0, 2],
// ];

// numeros.push(10);
// // numeros.push("10") // entrada inválida

// // Lista - Conjunto de elementos de tipos diferentes
// let elementos: (number | string | boolean)[] = [
//   1,
//   "cezar",
//   "cezar.mezzalira@email.com",
//   true,
//   "4699981470",
// ];

// // [id, nome, email, ativo, celular]
// let matriz: (number | string | boolean)[][] = [
//   [1, "Cezar", "cezar.mezzalira@email.com", true, "4699981470"],
//   [2, "Gustavo", "gustavo@email.com", true, "4612312321321"],
// ];

// // Tupla - conjunto de valores finito com tipos definidos
// let cadastros: [number, string, string, boolean, string] = [
//   1,
//   "Cezar",
//   "cezar.mezzalira@email.com",
//   true,
//   "4699981470",
// ];

// const linha = "00000000000000|00000000000000000|100,25|100,25|S|AAAAMM";

// const campos = linha.split("|");

// console.log(linha);
// console.log(campos);

// // Tuplas são imutáveis
// // [cnpj, nome_empresa, receita_bruta, receita_tributacao, valido, data]
// const valores: [string, string, number, number, boolean, string] = [
//   campos[0],
//   campos[1],
//   parseFloat(campos[2]),
//   parseFloat(campos[3]),
//   campos[4] === "S" ? true : false,
//   campos[5],
// ];
// console.log(valores);

// // Criar uma matriz de 10 produtos que contenha o seguinte layout:
// // id do tipo number, nome do tipo texto, quantidade em estoque do tipo float,
// // ativo do tipo boolean, data de criacao do tipo texto,data ultima atualizacao do tipo texto.
// // A matriz deve conter os tipos corretamente, sendo na prática uma lista de tuplas.
// // Exemplo de uma linha da matriz:
// // [1, "MacBook", 10.5, true, "20240101", "20241118"]
//=====================================================//

// Definir o tipo Produto
type Tipos = [number, string, number, boolean, string, string];

// Declarar a matriz de produtos
  const atividade: Tipos[] = [
    [1, "Item 1", 10, true, "20240101", "20241118"],
    [2, "Item 2", 15.3, true, "20240105", "20241117"],
    [3, "Item 3", 20, false, "20240110", "20241116"],
    [4, "Item 4", 25.9, true, "20240112", "20241115"],
    [5, "Item 5", 30.5, false, "20240115", "20241114"],
    [6, "Item 6", 40, true, "20240120", "20241113"],
    [7, "Item 7", 47.0, false, "20240122", "20241112"],
    [8, "Item 8", 152.3, true, "20240125", "20241111"],
    [9, "Item 9", 78.0, true, "20240130", "20241110"],
    [10, "Item 10", 150.0, true, "20240201", "20241109"]
  ];

  // Exibir os produtos
  console.log(atividade);


  // correção

const matrizProdutos : [number, string, number, boolean, string, string] [] = [];
matrizProdutos.push([1, "Item 1", 10, true, "20240101", "20241118"]);
matrizProdutos.push([2, "Item 1", 10, true, "20240101", "20241118"]);
matrizProdutos.push([3, "Item 1", 10, true, "20240101", "20241118"]);
matrizProdutos.push([4, "Item 1", 10, true, "20240101", "20241118"]);
matrizProdutos.push([5, "Item 1", 10, true, "20240101", "20241118"]);
matrizProdutos.push([6, "Item 1", 10, true, "20240101", "20241118"]);
matrizProdutos.push([7, "Item 1", 10, true, "20240101", "20241118"]);
matrizProdutos.push([8, "Item 1", 10, true, "20240101", "20241118"]);
matrizProdutos.push([9, "Item 1", 10, true, "20240101", "20241118"]);
matrizProdutos.push([10, "Item 1", 10, true, "20240101", "20241118"]);

console.log(matrizProdutos);




