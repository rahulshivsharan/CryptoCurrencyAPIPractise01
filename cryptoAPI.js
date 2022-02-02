(function(){

    var config = require("./config");
    var fetch = require('node-fetch');
    var Promise = require("promise");

    var sendRequest = sendRequest;
    var getGlobalCoin = getGlobalCoin;
    var getAllCryptoTickers = getAllCryptoTickers;
    var getCryptoByTicker = getCryptoByTicker;
    var getCryptoExchanges = getCryptoExchanges;
    var getMarketsByCrypto = getMarketsByCrypto;
    
    const X_RAPID_API_HOST = "coinlore-cryptocurrency.p.rapidapi.com";
    const X_RAPID_API_KEY = "cb9d056906msh202db15fb23cdf9p1e99c4jsn7dd51c460112";

    module.exports = {
        "getGlobalCoin" : getGlobalCoin,
        "getAllCryptoTickers" : getAllCryptoTickers,
        "getCryptoByTicker" : getCryptoByTicker,
        "getCryptoExchanges" : getCryptoExchanges,
        "getMarketsByCrypto" : getMarketsByCrypto
    }

    async function getGlobalCoin(){
        var url = config.global;
        var result = await sendRequest(url, "GET", {});
        return result;
    }

    async function getAllCryptoTickers(){
        var url = config.tickers;
        var result = await sendRequest(url, "GET", {});
        return result;
    }

    async function getCryptoByTicker(id){
        var url = config.ticker + "?id=" + id;
        var result = await sendRequest(url, "GET", {});
        return result;
    }

    async function getCryptoExchanges(){
        var url = config.exchanges;
        var result = await sendRequest(url, "GET", {});
        return result;
    }

    async function getMarketsByCrypto(id){
        var url = config.markets + "?id=" + id;
        var result = await sendRequest(url, "GET", {});
        return result;
    }

    async function sendRequest(apiPath, httpMethod, querystring){               
        var fn = fn;
        return new Promise(fn);
        
        async function fn(resolve, reject){
            var url = config.hostUrl + apiPath;
            let response = undefined, data = undefined;
            try{
                response = await fetch(url,{
                    "method" : httpMethod,
                    "headers" : {
                        "x-rapidapi-host" : X_RAPID_API_HOST,
                        "x-rapidapi-key" : X_RAPID_API_KEY
                    }
                });
    
                data = await response.json();
                resolve(data);
            }catch(e){
                console.log(`Error occured ${e.stack}`)
                data = {
                    "error" : "There is error"
                }
                reject(data);
            }
        }
    }

})();
