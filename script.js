const LISTADETAREFAS = document.getElementById("lista")
let tarefas = JSON.parse(localStorage.getItem('minhasTarefas')) || [];

function receberTarefaDoUsuario(){
    let tarefa = document.getElementById("tarefa").value
    if(tarefa.trim() !== ""){
        document.getElementById("tarefa").value = ""
        tarefas.push(tarefa)
        localStorage.setItem('minhasTarefas', JSON.stringify(tarefas));
    }
}

function removerTarefaDaLista(indiceTarefa){
    tarefas.splice(indiceTarefa,1)
    localStorage.setItem('minhasTarefas', JSON.stringify(tarefas));
    carregarListaDeTarefas()
}

function carregarListaDeTarefas(){
    LISTADETAREFAS.innerHTML = ""
    for(let i in tarefas){
        const visuTarefa = document.createElement("li")
        visuTarefa.id = i
        visuTarefa.textContent = tarefas[i]

        const botaoRemoverTarefa = document.createElement("button")
        botaoRemoverTarefa.className = "text-white bg-black rounded-ld hover:bg-white hover:text-black m-2 w-32 transition duration-300"
        botaoRemoverTarefa.addEventListener("click",function(){ removerTarefaDaLista(+i)})
        botaoRemoverTarefa.textContent = `Remover`
        visuTarefa.appendChild(botaoRemoverTarefa)

        LISTADETAREFAS.appendChild(visuTarefa)
    }
}

function atualizarListaDeTarefas(){
    receberTarefaDoUsuario()
    carregarListaDeTarefas()
}


carregarListaDeTarefas()