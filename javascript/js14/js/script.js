
// FIND
// let listagem = [5, 3, "Wesley", 21, "Pedro", "Rai"]

// let busca = listagem.find((item)=> {
//     if(item === "Wesley"){
//         return console.log("O sujeito encontrado")
//     }
// })

// console.log(busca);




// FILTER

let palavras = ["Matheus", "Ana Leticia", "Wesley", "Rai", "pedo", "sapo", "Tatu", "Ana carolina"];

let resultado = palavras.filter((item)=> {
    return item.length >= 8;
})

console.log(resultado);