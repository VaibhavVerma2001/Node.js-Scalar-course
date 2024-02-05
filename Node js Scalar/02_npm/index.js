var figlet = require("figlet");



figlet("Vaibhav!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        return;
    }
    console.log(data);
});