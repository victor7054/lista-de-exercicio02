let inpvalor1 = document.querySelector("#inpvalor1")
let inpvalor2 = document.querySelector("#inpvalor2")
let btCalcular = document.querySelector("#btCalcular")
let resultadoSoma = document.querySelector("#resultadoSoma")
let resultadoSubtraçao = document.querySelector("#resultadoSubtraçao")
let resultadoMultiplicaçao = document.querySelector("#resultadoMultiplicaçao")
let resultadoDivisao = document.querySelector("#resultadoDivisao")


function calculo(){

    let valor1 = parseInt(inpvalor1.value)
    let valor2 = parseInt(inpvalor2.value)

    if( Number.isNaN(valor1) && Number.isNaN(valor2)){
        alert("Por favor, insira números inteiros válidos.")
        return
    }

    let soma = valor1 + valor2
    resultadoSoma.value =  + soma

    let subtracao = valor1 - valor2
    resultadoSubtraçao.value =  + subtracao

    let multiplicacao = valor1 * valor2
    resultadoMultiplicaçao.value = multiplicacao

    let divisao = valor1 / valor2
    resultadoDivisao.value = divisao

}

btCalcular.onclick = function(){
    calculo()
}
