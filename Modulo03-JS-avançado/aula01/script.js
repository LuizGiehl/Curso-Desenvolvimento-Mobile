let pessoa = {
    nome: 'luiz',
    cargo: 'secretario',
    ic: 'planalto',
    distrito: 4640,
}
/*
const {nome, distrito, ic: interact} = pessoa

console.log(nome)
console.log(distrito)
console.log(interact)
*/

let nomes = ['luiz', 'antonio', 'isadora', 'gabriel']

const {0: secretario, 1: presidente, 3: ip} = nomes

console.log(secretario)
console.log(presidente)
console.log(ip)