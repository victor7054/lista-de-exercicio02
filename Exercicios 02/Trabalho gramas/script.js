let usuarios = document.querySelector ("#usuarios")
let produto = document.querySelector ("#produto")
let produto2 = document.querySelector ("#produto2")
let btCalcular = document.querySelector ("#btCalcular")

function valorFinal(){
    let numPessoas = Number(usuarios.value)

    let ovosPorPessoa = 2
    let queijoPorpessoa = 50

    let totalOvos = numPessoas * ovosPorPessoa
    let totalQueijo = numPessoas * queijoPorpessoa

    produto.value = totalOvos
    produto2.value = totalQueijo
}

btCalcular.onclick = function() {
    valorFinal()
}
