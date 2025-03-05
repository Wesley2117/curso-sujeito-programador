
//REST operator

// function convidados(...nome){
//     console.log("Seja bem vindo convidados")
//     console.log(nome);
// }

// convidados("Wesley", "Rai", "Souza", "Ana leticia", "Ana carolina", "Ana beatrizes");

function sorteador(...numeros){
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length);
    console.log( "Numero da sorte foi: " + numeros[numeroGerado]);
}

sorteador(165, 246, 354, 454, 654, 606, 752, 854, 965, 152);