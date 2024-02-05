var figlet = require("figlet");


figlet("Vaibhav!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        return;
    }
    console.log(data);
});


// SEMANTIC VERSIONING 
// eg - "figlet": "^1.7.0" (from package.json)

// 1 - signifies major release -> when there are a lot of changes (huge changes)
// 7 - signifies minor release -> some minor features are released
// 0 - signifies patch release -> bugs fixes


// ^ (carrot character) -> signifies while npm i then this particular version will be downloaded not the latest one