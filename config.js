const input = document.querySelector('.inputTask')
const butao = document.querySelector('.butaoTask')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){
    let novaLi= ''

    minhaListaDeItens.forEach( (item, index) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "feito"}">
            <img src="img/checked.png" alt="concluido texto" onclick="concluirItem(${index})">
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="apagar text" onclick="deletarItem(${index})">
        </li>
        `
    })

    listaCompleta.innerHTML = `${novaLi}`

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirItem(index){
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida
    mostrarTarefas()
}

function deletarItem(index){
    // splice(quem eu quero deletar, e quantos itens a partir de la)
    minhaListaDeItens.splice(index, 1)
    console.log(`deletou ${index}`)

    mostrarTarefas()
}

function recarregarTela(){
    const tarefasCarregar = localStorage.getItem('lista')
    minhaListaDeItens = JSON.parse(tarefasCarregar)
}

recarregarTela()
butao.addEventListener('click',adicionarNovaTarefa )

