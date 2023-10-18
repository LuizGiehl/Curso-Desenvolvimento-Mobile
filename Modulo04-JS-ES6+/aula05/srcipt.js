/*
let lista = [1, 2, 3, 'jose', 'joão', 'maria']

let busca = lista.find((item) => {
    if (item === 'joão') {
        return console.log('item encontrado com sucesso')
    }
})

console.log(busca)
*/

let palavras = ['comunicação', 'orátoria', 'paralelepipedo', 'trigonometria', 'vocabulario', 'repertorio']

let resultado = palavras.filter((item) => {
    return item.length === 8;
})

console.log(resultado)