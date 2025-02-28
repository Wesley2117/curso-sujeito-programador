var area = document.getElementById('area');
var botaoAcessar = document.querySelector('button'); // Seleciona o botão "Acessar"

function entrar() {
    var nome = prompt("Digite seu nome");

    if (nome === '' || nome === null) {
        alert("Opa, deu erro camarada");
        area.innerHTML = "Você precisa escrever seu nome para acessar...";
    } else {
        // Exibe a mensagem de boas-vindas
        area.innerHTML = "Bem-vindo " + nome;

        // Esconde o botão de acessar
        botaoAcessar.style.display = 'none';

        // Cria o botão de sair
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;

        // Adiciona o botão de sair na página
        document.body.appendChild(botaoSair);
    }
}

function sair() {
    alert("Até mais!");

    // Altera o conteúdo da área ao sair
    area.innerHTML = "Você saiu, camarada...";

    // Remove todos os botões existentes
    let botoes = document.querySelectorAll('button');
    botoes.forEach(botao => botao.remove());

    // Cria o botão de acessar novamente
    botaoAcessar = document.createElement("button");
    botaoAcessar.innerText = "Acessar";
    botaoAcessar.onclick = entrar;
    document.body.appendChild(botaoAcessar);
}
