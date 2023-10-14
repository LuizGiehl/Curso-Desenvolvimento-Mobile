/*let lista = ['matheus', 'cleber', 'josé']

lista.map((item, index) => {
    console.log(`PASSANDO: ${item} - está na posição: ${index}`)
})*/

let numeros = [5, 3, 2, 5];

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`${acumulador} total até o momento`)
    console.log(`${numero} é o valor atual`)
    console.log(`${indice} é o indice atual`)
    console.log(`${original} é o array original`)
    console.log("====================================")

    return acumulador += numero
})

console.log(total)