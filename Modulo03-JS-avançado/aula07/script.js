let listElement = document.getElementById('lista')
let inputElement = document.getElementById('tarefa')
let buttonElement = document.getElementById('button')

let tarefas = JSON.parse(localStorage.getItem('@listaTarefas')) || []

function renderTarefas(){
    listElement.innerHTML = ''

    tarefas.map((todo) => {
        let liElement = document.createElement('li')
        let tarefaText = document.createTextNode(todo)

        let linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        let linkText = document.createTextNode('Excliur')
        linkElement.appendChild(linkText)

        let posicao = tarefas.indexOf(todo)
        

        linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`)

        liElement.appendChild(tarefaText)
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)
    })
}

renderTarefas()

function registerElement() {
    if(inputElement.value === ""){
        alert('Digite alguma tarefa')
        return false
    }
    else{
        let novaTarefa = inputElement.value

        tarefas.push(novaTarefa)
        inputElement.value = ''

        renderTarefas()
        salvarLocalStorage()
    }
}

buttonElement.onclick = registerElement;

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1)
    renderTarefas()
    salvarLocalStorage()
}

function salvarLocalStorage(){
    localStorage.setItem('@listaTarefas', JSON.stringify(tarefas))
}