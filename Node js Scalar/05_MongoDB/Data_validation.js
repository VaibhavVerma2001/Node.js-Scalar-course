// Data validation in MongoDb

const mongoose = require("mongoose");

var url = "mongodb://localhost:27017/SampleDB2";

mongoose.connect(url)
    .then(function () {
        console.log('Successfully connected to Database ...');
    })
    .catch(function (err) {
        console.log(err);
    }
);


const courseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 200
    },
    creater : {
        type : String,
        required : true,
    },
    publishedDate : {
        type : Date,
        default : Date.now,
        required : true,
    },
    isPublished : {
        type : Boolean,
        required : true,
    },
    // rating will be required only if course is isPublished
    rating :{
        type : Number,
        required : function () {return this.isPublished },
    },
    description : {
        type : String,
        required : true,
    },
    // enum property -> if passed category will not be in enum then error
    category : {
        type : String,
        enum : ["DSA", "Web" , "Mobile" , "Data science"],
    },

    // Custom validator
    // Such that we must pass atleast 2 tags while inserting data like tags : ["express" , "nodejs" , "mongodb"]
    tags : {
        type : Array,
        validate : {
            validator : function (tags) {
                return tags.length >= 2
            }
        },
    }

});

const Course = mongoose.model("Course", courseSchema);



//1- inserting data - CREATE
const createCourse = async () =>{
    try {
        const newCourse = new Course({
            name : "JS Fundamentals",
            // creater : "Vaibhav",
            category : "DSA",
            isPublished : false,
            description : "This is beginer to advanced JS course",
            tags : ["express"]
            
        });
        
        let data = await newCourse.save();
        console.log(data);
    } catch (err) {
        console.log(err.message);

        // error validator
        // for(field in err.errors){
        //     console.log(err.errors[field]);
        // }
    }
}

createCourse();


// Improved Error Messages for Schema Validation in mongodb schema

// https://stackoverflow.com/questions/61056021/improve-mongoose-validation-error-handling 