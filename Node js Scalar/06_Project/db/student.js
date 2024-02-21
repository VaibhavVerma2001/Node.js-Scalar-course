const mongoose = require("mongoose");
require('dotenv').config();


// mongoose.set('strictQuery', false);
const url = process.env.MONGO_URL;
mongoose.connect(url)
    .then(function () {
        console.log('Successfully connected to Student schema ...');
    })
    .catch(function (err) {
        console.log(err);
    }
);


const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    enrolled : {
        type : Boolean,
        default : false
    },
    phone :{
        type : String,
        required : true,
        minlength : 10,
        maxlength : 25,
    }
});


const Student = new mongoose.model("Student" , studentSchema);

module.exports = Student;