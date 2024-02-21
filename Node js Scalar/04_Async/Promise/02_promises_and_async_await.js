// if passed order of coffee only then we serve that

function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink === "coffee"){
            resolve("Order for coffee has been received...");
        }
        else{
            reject("Other orders than coffee rejected...");
        }
    });
}


function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being processed...');
        resolve(`${order} is served...`);
    });
}


// Placing order
// promise chaining - when handling multiple prmosises

// placeOrder("coffee").then(function(orderPlaced){
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
// }).then(function(orderProcessed){
//     console.log(orderProcessed)
// }).catch(function(err){
//     console.log(err);
// })




// Use async await instead of all this chaining and then method -> easy syntax and same work
// -> The keyword async before a function makes the function return a promise
// -> The await keyword makes the function pause the execution and wait for a resolved promise before it continues

async function serveOrder(){
    try {
        let orderPlaced = await placeOrder("coffee");
        console.log(orderPlaced);
        let isProcessOrder = await processOrder(orderPlaced);
        console.log(isProcessOrder);
    } catch (error) {
        console.log(error);
    }
    
}

serveOrder();