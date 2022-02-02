var express = require("express");
var cryptoApiObj = require("./cryptoAPI");

var app = express();
var port = 6210;

app.get("/", (request, response) =>{
    response.send("Express Application for Crypto API.....");
});

app.get("/crypto/global", (request, response) =>{
    console.log(`Get Crypto Global API request`);
    cryptoApiObj.getGlobalCoin().then((data) => {
        response.send(data); 
    });    
});

app.get("/crypto/tickers", (request, response) =>{
    console.log(`Get Crypto Tickers API request`);
    cryptoApiObj.getAllCryptoTickers().then((data) => {
        response.send(data); 
    });    
});

app.get("/crypto/ticker/:id", (request, response) =>{
    let id = request.params.id;
    console.log(`Get Crypto Ticker ${id}`);
    cryptoApiObj.getCryptoByTicker(id).then((data) => {
        response.send(data); 
    });    
});

app.get("/crypto/exchanges", (request, response) =>{
    console.log(`Get Crypto Exchanges API request`);
    cryptoApiObj.getCryptoExchanges().then((data) => {
        response.send(data); 
    });    
});

app.get("/crypto/markets/:id", (request, response) =>{
    let id = request.params.id;
    console.log(`Get Markets by Crypto Ticker ${id}`);
    cryptoApiObj.getMarketsByCrypto(id).then((data) => {
        response.send(data);
    });    
});

var server = app.listen(port, () => {
    console.log("API listing to PORT "+port);
});