
// if that module is exporting just 1 function =>
// const average = require("./module"); //or we can use .js // we will take the function we exported in module

// let arr = [1,2,3,4,5];
// console.log(average); //will return [Function: average]
// let avg = average(arr);
// console.log(avg);



//if that module is exporting multiple things (do as object) =>
const mod = require("./module"); //using ./ bec there may be built in module of same name , if in previous folder then use ../

console.log(mod.name);
console.log(mod.age);
console.log(mod.avg([1,2,3,4,5]));