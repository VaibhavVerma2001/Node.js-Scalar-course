console.log("this is module.js");

function average(arr)
{
   let sum = 0; 
   for(let i = 0 ; i < arr.length ; i++)
   {
       sum +=arr[i];
   }
   return (sum/arr.length);
}


//must export those functionswe want to use outside , otherwise we will not be able to use that outside this file

// if that module is exporting just 1 function =>
// module.exports = average; //now we can use average func outside

// console.log(module);

// if that module is exporting multiple things (do as object) =>
module.exports = {
    avg : average,
    name : "vaibhav",
    age : 21
};