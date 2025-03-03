let listElement = document.querySelector("#listaTarefas");
let inputElement = document.querySelector("#inputTarefa");
let buttonElement = document.querySelector("#botaoRegistrar");
let buttonMostrarRealizadas = document.querySelector("#botaoMostrarRealizadas");
let listaTarefasRealizadas = document.querySelector("#listaTarefasRealizadas");
let tarefasRealizadasContainer = document.querySelector("#tarefasRealizadasContainer");
let buttonExportarPDF = document.querySelector("#botaoExportarPDF");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
let tarefasRealizadas = JSON.parse(localStorage.getItem("tarefasRealizadas")) || [];

// Função para salvar as tarefas no localStorage
function salvarNoLocalStorage() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    localStorage.setItem("tarefasRealizadas", JSON.stringify(tarefasRealizadas));
}

// Função para renderizar as tarefas pendentes
function renderTarefas() {
    listElement.innerHTML = "";
    tarefas.forEach((todo, index) => {
        let liElement = document.createElement("li");
        liElement.innerHTML = `
            <span>${todo}</span>
            <div>
                <button onclick="marcarComoRealizada(${index})">Realizada</button>
                <button onclick="excluirTarefa(${index})">Excluir</button>
            </div>
        `;
        listElement.appendChild(liElement);
    });
    salvarNoLocalStorage();
}

// Função para renderizar as tarefas realizadas
function renderTarefasRealizadas() {
    listaTarefasRealizadas.innerHTML = "";
    tarefasRealizadas.forEach((todo, index) => {
        let liElement = document.createElement("li");
        liElement.innerHTML = `
            <span>${todo}</span>
            <button onclick="excluirTarefaRealizada(${index})">Excluir</button>
        `;
        listaTarefasRealizadas.appendChild(liElement);
    });
    salvarNoLocalStorage();
}

// Função para adicionar uma nova tarefa
function adicionarTarefas() {
    if (inputElement.value === '') {
        alert("Digite uma tarefa");
        return false;
    } else {
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        inputElement.value = '';
        renderTarefas();
    }
}

// Função para marcar uma tarefa como realizada
function marcarComoRealizada(index) {
    tarefasRealizadas.push(tarefas[index]);
    tarefas.splice(index, 1);
    renderTarefas();
    renderTarefasRealizadas();
}

// Função para excluir uma tarefa pendente
function excluirTarefa(index) {
    tarefas.splice(index, 1);
    renderTarefas();
}

// Função para excluir uma tarefa realizada
function excluirTarefaRealizada(index) {
    tarefasRealizadas.splice(index, 1);
    renderTarefasRealizadas();
}

// Botão para mostrar/ocultar tarefas realizadas
buttonMostrarRealizadas.onclick = () => {
    tarefasRealizadasContainer.classList.toggle("hidden");
    buttonMostrarRealizadas.textContent = tarefasRealizadasContainer.classList.contains("hidden")
        ? "Mostrar Tarefas Realizadas"
        : "Ocultar Tarefas Realizadas";
};

// Botão para exportar a lista para PDF
buttonExportarPDF.onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Lista de Tarefas", 10, 10);

    doc.setFontSize(12);
    let y = 20;

    // Adiciona tarefas pendentes ao PDF
    doc.text("Tarefas Pendentes:", 10, y);
    y += 10;
    tarefas.forEach((tarefa, index) => {
        doc.text(`${index + 1}. ${tarefa}`, 10, y);
        y += 10;
    });

    // Adiciona tarefas realizadas ao PDF
    y += 10;
    doc.text("Tarefas Realizadas:", 10, y);
    y += 10;
    tarefasRealizadas.forEach((tarefa, index) => {
        doc.text(`${index + 1}. ${tarefa}`, 10, y);
        y += 10;
    });

    // Salva o PDF
    doc.save("lista_de_tarefas.pdf");
};

// Botão para adicionar tarefas
buttonElement.onclick = adicionarTarefas;

// Renderiza as tarefas ao carregar a página
renderTarefas();
renderTarefasRealizadas();