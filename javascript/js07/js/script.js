

/*
    Abaixo de 17 Muito abaixo do peso
    Entre 17 e 18,49 Abaixo do peso
    Entre 18,5 e 24,99 Peso normal
    Ebtre 25 e 29,99 Acima do peso
*/

// peso /(altura*altura);

function calcular(event){
    event.preventDefault();

    var peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
    var altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
    var resultado = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Digite valores válidos para peso e altura!";
        return;
    }

    var imc = peso / (altura * altura);

    if (imc < 17) {
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}<br/> Muito abaixo do peso!`;
    } else if (imc < 18.5) {
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}<br/> Abaixo do peso!`;
    } else if (imc < 25) {
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}<br/> Peso normal!`;
    } else if (imc < 30) {
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}<br/> Acima do peso!`;
    } else {
        resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)}<br/> Obesidade!`;
    }
}
