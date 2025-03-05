
// MAP = Serve para percorrer toda uma ARRAY

// let lista = ["Wesley", "Rai", "Pedro"];

// lista.map((item, index) => {
//     console.log(`Esse é o: ${item} - Está na posição ${index}`)
// })

// REDUCE = O reduce busca reduzir um array

let numeros = [5, 6, 8];

let total = numeros.reduce((acumulador, numero, indice, original)=>{
    console.log(`${acumulador} - total até o momento`);
    console.log(`${numero} - valor atual`);
    console.log(`${indice} - indice atual`);
    console.log(`${ original} - array original`);
    console.log("============================================================");

    return acumulador += numero;
})

console.log("Total do reduce: " + total);