const superheroes = require('superheroes');

let all = superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

let name = superheroes.random();
//=> 'Spider-Ham'

// console.log(all); //all names
console.log(name);



const supervillains = require('supervillains');

let all_vil = supervillains.all;
//=> ['3-D Man', 'A-Bomb', …]

let vil_name = supervillains.random();
//=> 'Spider-Ham'

// console.log(all_vil); //all names
console.log(vil_name);