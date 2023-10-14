/*function convidados(...nomes) {
    console.log('Sejam bem vindos');
    console.log(nomes);
}

convidados('matheus', 'gabriel', 'josé', 'maria', 'julia')*/

function sorteador(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log(numeros[numeroGerado])
}

sorteador(12, 23, 34, 45, 56, 67, 78, 89, 91, 10)