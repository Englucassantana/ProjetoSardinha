//Carregar entradas para o sinal baseado no valor atual do ativo
//step 1: Pesquisar o ativo
//step 2: Salvar o valor atual
//step 3: Calcular o intervalo de entrada
//step 4: Preencher valores nos campos de entrada

document.addEventListener("DOMContentLoaded",()=> {
    let loadButton = document.getElementById("load-button");
    console.log(loadButton);
    loadButton.addEventListener("click",()=>{
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                let reponseObject = JSON.parse(xhr.responseText);
                let nomeDoAtivo = loadButton.parentNode.parentNode;
                nomeDoAtivo = nomeDoAtivo.getElementsByClassName("nome-do-ativo")[0].innerText;
                let precoDoAtivo = 0;
                for(let i = 0; i < reponseObject.length; i++){
                    if (reponseObject[i].symbol == nomeDoAtivo){
                        precoDoAtivo = reponseObject[i].price;
                    }
                }
                let form = loadButton.parentNode;
                form.querySelector("#valor-minimo-entrada").value = precoDoAtivo * (1-0.05);
                form.querySelector("#valor-maximo-entrada").value = precoDoAtivo * (1.05);
            }
        }
        xhr.open('GET', "https://api.binance.com/api/v3/ticker/price", true);
        // xhr.open('GET',"https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT", true);
        xhr.send(null);

    })

});