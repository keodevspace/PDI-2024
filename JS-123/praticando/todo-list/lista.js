//Lista de Tarefas Interativa:
//Desenvolva uma aplicação simples onde o usuário possa adicionar, remover e marcar tarefas como concluídas. Utilize HTML para a estrutura da página e JavaScript para manipular a lista de tarefas.

const novaTarefa = document.getElementById("newTask");
const botaoSubmit = document.getElementById("enviarTarefa");
const listaDeTarefas = document.getElementById("todoList");

function adicionarTarefa(event) {
    event.preventDefault();
    const conteudoDaTarefa = novaTarefa.value;

    if (conteudoDaTarefa !== '') {
        const novaTarefaInserida = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        novaTarefaInserida.appendChild(checkbox); 

        const span = document.createElement("span");
        span.textContent = conteudoDaTarefa;
        novaTarefaInserida.appendChild(span); 

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover"; 
        botaoRemover.addEventListener("click", removerTarefa);
        novaTarefaInserida.appendChild(botaoRemover); 

        listaDeTarefas.appendChild(novaTarefaInserida); 
    } else {
        alert("Insira uma nova tarefa")
    }
}

function removerTarefa() {
    this.parentNode.remove();
}

document.querySelector("form").addEventListener("submit", adicionarTarefa);



//LOGICA DO ALGORITMO

//Seleção de Elementos: O JavaScript começa selecionando os elementos relevantes do DOM usando os métodos getElementById e querySelector. getElementById é usado para selecionar o input onde o usuário digitará a nova tarefa e a lista onde as tarefas serão exibidas, enquanto querySelector é usado para selecionar o botão "Enviar".

// Adicionar Tarefa: Quando o usuário clica no botão "Enviar" (representado pelo evento de clique no botão), a função adicionarTarefa é acionada. Esta função primeiro previne o comportamento padrão do formulário usando event.preventDefault() para evitar que a página seja recarregada. Em seguida, verifica se o campo de texto para a nova tarefa não está vazio. Se estiver vazio, exibe um alerta pedindo ao usuário que insira uma tarefa válida. Caso contrário, cria um novo elemento de lista (<li>) para a nova tarefa. Este elemento de lista contém um checkbox para marcar a tarefa como concluída, o texto da tarefa (obtido do input) e um botão "Remover". O novo item da lista é então adicionado à lista de tarefas (<ul>) e o campo de entrada é limpo para permitir a entrada de uma nova tarefa.

// Remover Tarefa: Quando o usuário clica no botão "Remover" associado a uma tarefa, a função removerTarefa é acionada. Esta função simplesmente remove o elemento pai do botão, que é o próprio item da lista (<li>), da lista de tarefas.

// Marcar Como Concluída: Quando o usuário marca ou desmarca o checkbox associado a uma tarefa, a função marcarComoConcluida é acionada. Esta função alterna o estilo do texto da tarefa entre tachado (para indicar que está concluída) e normal, dependendo do estado do checkbox.