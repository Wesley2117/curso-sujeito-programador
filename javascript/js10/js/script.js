

// Desconstruindo objetos

// let pessoa = {
//     nome: "Wesley",
//     sobrenome: "Santos",
//     idade: 26,
//     cargo: "Programador FullStack",
// }

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

// let nome = "TABLES";

// const { nome:nomepessoa, cargo, idade, sobrenome} = pessoa;

// console.log( "nome da pessoa é " + nomepessoa);
// console.log(sobrenome)

// console.log(cargo);
// console.log(idade);


// Desconstruindo um ARRAY

let nome = ["Wesley", "Pedro", "Rai"];

// let { 2:Wesley, 0:Rai } = nome;

// console.log(Wesley);
// console.log(Rai);


let [terceironome, segundonome] = nome;

console.log(terceironome);
console.log(segundonome);