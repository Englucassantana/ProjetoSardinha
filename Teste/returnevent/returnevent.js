let xhr = new XMLHttpRequest();

xhr.addEventListener('load', function (event,par){

});

xhr.open('GET',"https://api.binance.com/api/v3/ticker/price", true);
// xhr.open('GET',"https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT", true);
xhr.send(null);