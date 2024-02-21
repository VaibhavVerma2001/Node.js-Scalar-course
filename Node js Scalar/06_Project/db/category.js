const mongoose = require("mongoose");
require('dotenv').config();


// mongoose.set('strictQuery', false);
const url = process.env.MONGO_URL;
mongoose.connect(url)
    .then(function () {
        console.log('Successfully connected to category schema ...');
    })
    .catch(function (err) {
        console.log(err);
    }
);


const categorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    }
});


const Category = new mongoose.model("Category" , categorySchema);

module.exports = Category;