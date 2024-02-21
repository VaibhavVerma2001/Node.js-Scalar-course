// Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. 


// How to produce a promise

let myPromise =  new Promise((resolve, reject) => {
    
    let a = 5;
    let b = 5;

    setTimeout(()=>{
        if(a === b){
            resolve("Values are equal...");
        }
        else{
            reject("Values are not equal...");
        }
    },2000);
});


// 1 - Pending State
// console.log(myPromise); // initially it prints pending bec od settimeout of 2 seconds



// 2- Fullfilled state - then method -> it will run when promise is fullfilled
// result and resolve methods are connected, result will store data which resolve has returned
myPromise.then((result)=>{
    console.log(result); 
});


// 3-  Rejected state - whenever promise is rejected we must handle it in catch state otherwise it will give error
// values thrown by reject method will be caught by catch method
myPromise.catch((err)=>{
    console.log(err);
});


// 4 - At last your promise is settled
