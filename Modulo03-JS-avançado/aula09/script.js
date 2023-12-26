/*
let listaProdutos = ['Computador', 'Telefone', 'Mouse', 'Teclado']
let quantProdutos = listaProdutos.length

console.log(quantProdutos);

listaProdutos.splice(listaProdutos.indexOf('Mouse'), 1)

console.log(listaProdutos)

if (listaProdutos.includes('Computador')) {
    console.log("O item computador existe")
} else {
    console.log('O item Computador não existe')
};

listaProdutos.splice(1, 1);

 console.log(listaProdutos);
 */
//==============================================================
/*
 let list = [1,3,5,7,0,9]

 list.sort();

 console.log(list);

 list.shift();

console.log(list);

list.reverse();

console.log(list)
*/
//===============================================================

let data = "26/12/2023"

let separado = data.split('/');

let dia = separado[0];
let mes = separado[1];
let ano = separado[2]

console.log(data);
console.log(dia);
console.log(mes);
console.log(ano);