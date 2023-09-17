var peso;
var altura;
var imc;


function calcular(event) {
    event.preventDefault();
    var resultado = document.getElementById('resultado')

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value
    imc = peso / (altura**2)
    
    resultado.innerHTML = `Seu IMC é de: ${imc.toFixed(2)}`

    if(imc <= 18.5){
        resultado.innerHTML += `<br> Você está abaixo do pesso`
    }
    else if(imc >= 18.6 && imc <= 24.9){
        resultado.innerHTML += `<br> Você está no peso ideal`
    }
    else if (imc >= 25 && imc <= 29.9){
        resultado.innerHTML += `<br> Você está com sobrepeso`
    }
    else if (imc >= 30 && imc <= 34.9){
        resultado.innerHTML += `<br> Você está com obesidade de grau I`
    }
    else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML += `<br> Você está com obesidade grau II`
    }
    else if(imc >= 40) {
        resultado.innerHTML += `<br> Procure ajuda! Você está com obesidade mórbida`
    }

    console.log(imc)
    console.log(peso)
    console.log(altura)
}