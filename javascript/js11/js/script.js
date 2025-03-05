
// Spredd  operador

// let primeiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numeros= [...primeiros, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(numeros);

// let pessoa = {
//     nome: "Wesley",
//     sobrenome: "Souza",
//     idade: 26,
//     cargo: "Programador Fullstack",
// }

// let novaPessoa = {
//     ...pessoa,
//     status: "ATIVA",
//     cidade: "Beberibe"
// };
// console.log(novaPessoa);


function novoUsuario(info){
    let dados = {
        ...info,
        status: "ATIVO",
        inicio: "29/09/2025",
        codigo: "012864238"
    };

    console.log(dados);
}

novoUsuario({ nome: "Souza", idade: 26, cargo: "Programador"})