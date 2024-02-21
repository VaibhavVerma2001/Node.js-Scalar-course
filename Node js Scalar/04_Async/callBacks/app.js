// Async is better than sync in terms of time taking
// In this we learn fs module async
// Event Loop 
const fs = require("fs");

console.log("First line...");

// if this file is very large file, it will wait for some time to get this task complete -> it is wasting time

// let data = fs.readFileSync("file1.txt" , "utf-8");
// console.log(data);

// so we can use async approach -> it will take a callback
fs.readFile("file1.txt", "utf-8" , (err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data)
    }
});
// Now it is printing console.log("Last line...") first before printing the file data, it will save a lot of time

fs.readFile("file2.txt", "utf-8" , (err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data)
    }
});

fs.readFile("file3.txt", "utf-8" , (err,data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data)
    }
});


// Note - Order of call back in Random.



console.log("Last line...");