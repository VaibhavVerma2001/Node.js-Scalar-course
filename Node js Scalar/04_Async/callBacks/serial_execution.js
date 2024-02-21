// Since Order of cb is random
// but sometime we need to make it in some order

const fs = require("fs");

console.log("First line...");

// so we can use async approach -> it will take a callback
fs.readFile("file1.txt", "utf-8" , cb1);

function cb1(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
        fs.readFile("file2.txt", "utf-8" , cb2); // now it will run cb2 only if cb1 run
    }
}

function cb2(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
        fs.readFile("file3.txt", "utf-8" , cb3); // now it will run cb3 only if cb2 run
    }
}

function cb3(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
}


// ORDER 
// First line...
// Last line...
// i am file 1.
// I am file 2.
// I am file 3.


console.log("Last line...");