function calculo(){

    let primeiroSabor = document.getElementById("primeiroSabor").value;
    let segundoSabor = document.getElementById("segundoSabor").value;
    let terceiroSabor = document.getElementById("terceiroSabor").value;
    let quartoSabor = document.getElementById("quartoSabor").value;
    let refrigerante = parseInt(document.getElementById("refrigerante").value);

    if (Number.isNaN(refrigerante) || refrigerante < 0) {
    alert("Por favor, insira um número válido de refrigerantes.");
    return;
    }

    let valorPizza = 12;
    let valorRefrigerante = 7;
    let totalPizza = 4 * valorPizza;
    let totalRefrigerante = refrigerante * valorRefrigerante;
    let totalPagar = totalPizza + totalRefrigerante;

    let pedidoDiv = document.getElementById("pedido");
    pedidoDiv.innerHTML = ""; // Limpar conteúdo anterior
    pedidoDiv.innerHTML += "<strong>Sabores de Pizza Escolhidos: </strong><br>";
    pedidoDiv.innerHTML += "- " + primeiroSabor + "<br>";
    pedidoDiv.innerHTML += "- " + segundoSabor + "<br>";
    pedidoDiv.innerHTML += "- " + terceiroSabor + "<br>";
    pedidoDiv.innerHTML += "- " + quartoSabor + "<br><br>";
    pedidoDiv.innerHTML += "<strong>Total a Pagar: </strong> R$" + totalPagar.toFixed(2);
}