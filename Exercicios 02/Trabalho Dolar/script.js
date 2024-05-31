let valor = document.querySelector ("#valor")
let resultado1 = document.querySelector ("#resultado1")
let resultado2 = document.querySelector ("#resultado2")
let resultado3 = document.querySelector ("#resultado3")
let resultado4 = document.querySelector ("#resultado4")
let btCalcular = document.querySelector ("#btCalcular")

function soma() {
    let result = Number(valor.value);

    let calculo1 = (result * 1 * 0.01) + result;
    resultado1.value = calculo1
    let calculo2 = (result * 1 * 0.02) + result;
    resultado2.value = calculo2
    let calculo3 = (result * 1 * 0.05) + result;
    resultado3.value = calculo3
    let calculo4 = (result * 1 * 0.1) + result;
    resultado4.value = calculo4

}

btCalcular.onclick = function(){
    soma()
}