let xhr = new XMLHttpRequest();

xhr.onload = function (){
    if(xhr.status == 200){
        reponseObject = JSON.parse(xhr.responseText);
        console.log(reponseObject);
    }
}

xhr.open('GET',"https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT", true);
xhr.send(null);
