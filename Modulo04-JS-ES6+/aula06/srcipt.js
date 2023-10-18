function somar(a,b) {
    let total = a + b;
    return console.log(total)
}

somar(4, 5);

let subtrair = (valor1, valor2) => {
    let total = valor1 - valor2
    console.log(total)
}

subtrair(50, 44);

let numeros = [1, 2, 3, 4, 5]

numeros.map((item, index) => {
    console.log(`O item é: ${item} e sua posição é: ${index}`)
})