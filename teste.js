input = document.querySelector('.inputTask')
butao = document.querySelector('.butaoTask')
lista = document.querySelector('.list-tasks')

let listaDeValores = []

function guardarValores(){
   listaDeValores.push({
        tarefa: input.value,
        concluida: false
   })
   console.log(listaDeValores)
   
   input.value = ''

   mostrarValores()
}

function mostrarValores() {
    NovaLi = ''

    listaDeValores.forEach( (valor, posicao) => {
        NovaLi = NovaLi + `
        <li class="task ${valor.concluida && "feito"}">
            <img src="img/checked.png" alt="concluido texto" onclick="concluido(${posicao})">
            <p>${valor.tarefa}</p>
            <img src="img/trash.png" alt="apagar text" onclick="deletar(${posicao})">
        </li>
        `
    })

    lista.innerHTML = NovaLi

    localStorage.setItem('itens', JSON.stringify(listaDeValores))
}

function recarregarSite(){
    const itensDoSite = localStorage.getItem('itens')
    listaDeValores = JSON.parse(itensDoSite)
    mostrarValores()
}

function concluido(posicao){
    listaDeValores[posicao].concluida = !listaDeValores[posicao].concluida
    mostrarValores()
}

function deletar(posicao) {
    listaDeValores.splice(posicao , 1)
    mostrarValores()
}

recarregarSite()
butao.addEventListener('click', guardarValores)