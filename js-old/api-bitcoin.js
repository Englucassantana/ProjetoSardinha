//Meta: Construir uma lista no DOM a partir de dados no formato JSON de uma API.
let xhr = new XMLHttpRequest();

xhr.onload = function (){
    if(xhr.status == 200){
        let reponseObject = JSON.parse(xhr.responseText);
        console.log(reponseObject);
        console.log(reponseObject.length);
        for (let i = 0; i < reponseObject.length; i++){
            let text = document.createTextNode(reponseObject[i].symbol);
            let novoElementoAncora = document.createElement('a');
            novoElementoAncora.appendChild(text)
            let novoElementoLista = document.createElement('li');
            novoElementoLista.appendChild(novoElementoAncora);
            let listaDeAtivos = document.getElementById('lista-de-ativos');
            listaDeAtivos.appendChild(novoElementoLista);
        }
    }
}
xhr.open('GET',"https://api.binance.com/api/v3/ticker/price", true);
// xhr.open('GET',"https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT", true);
xhr.send(null);