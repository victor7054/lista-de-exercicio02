let ipValorVendido = document.querySelector("#ipValorVendido");
let ipMetaMinima = document.querySelector("#ipMetaMinima");
let ipMeta = document.querySelector("#ipMeta");
let btCalculoMeta = document.querySelector("#btCalculoMeta");
let h3Percentual = document.querySelector("#h3Percentual");

btCalculoMeta.onclick = function () {
    percentual();
}
function percentual (){
    let metaMinima = (Number(ipValorVendido.value) / Number (ipMetaMinima.value)) * 100;
    let meta = (Number(ipValorVendido.value) / Number (ipMeta.value)) * 100;
   
   if (meta || metaMinima >= 100) {
    h3Percentual.innerHTML = "Voce Atingiu a Meta Minima em " + metaMinima + "% <br>e Tambem Atingiu a Meta em " + meta + "% <br>"
 
    }    
    else if (meta || metaMinima < 100) {
    h3Percentual.innerHTML = "Voce Nao Atingiu a Meta Minima seu Percentual foi de " + metaMinima + "%<br>e Tambem Nao Atingiua Meta seu Percentual foi de " + meta + "% <br>"
     }
     else if(metaMinima >= 100 || meta < 100){
        h3Percentual.innerHTML = "Voce Atingiu a Meta Minima em " + metaMinima + "%<br> Mas Nao Atingiu A meta Seu percentual foi de " + meta + "%"
         
 
     }
     else {
        h3Percentual.innerHTML = "Voce Nao Informou um Valor Correto Por Favor Verifique os Campos e Tente Novamente"
    }




}