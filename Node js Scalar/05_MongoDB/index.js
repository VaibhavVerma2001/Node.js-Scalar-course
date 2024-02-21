const mongoose = require("mongoose");

var url = "mongodb://localhost:27017/SampleDB";

// Connect with database
mongoose.connect(url)
    .then(function () {
        console.log('Successfully connected to Database ...');
    })
    .catch(function (err) {
        console.log(err);
    }
);

// Create schema
const courseSchema = new mongoose.Schema({
    name : {
        type : String
    },
    creater : {
        type : String
    },
    publishedDate : {
        type : Date,
        default : Date.now
    },
    rating :{
        type : Number
    },
    isPublished : {
        type : Boolean
    },
    description : {
        type : String
    }
});


// const Employee = mongoose.model(collectionName, schema) 
// NOTE - collectionName will be converted to plural by mongoose in small letters (means courses will be our collection name)
const Course = mongoose.model("Course", courseSchema);



//1- inserting data - CREATE
const createCourse = async () =>{

    const newCourse = new Course({
        name : "JS Fundamentals",
        creater : "Vaibhav",
        isPublished : true,
        description : "This is beginer to advanced JS course",
        rating : 5
    });
    
    let data = await newCourse.save();
    console.log(data);
}

// createCourse();




//2- Query documents - Read

const getCourse = async() => {
    let data = await Course.find();

    // Sort
    // data = await Course.find().sort({creater : 1}); //asc order
    // data = await Course.find().sort({creater : -1}); // desc order
    
    // Limit
    // data = await Course.find().limit(2); // 

    console.log("All documents are : " ,data);


    // To see only particular feild
    // data = await Course.find({creater : "Vaibhav"} ,{_id : 0, publishedDate: 0, isPublished: 0}); 
    // OR only name
    // data = await Course.find({creater : "Vaibhav"} , {_id: 0 ,name : 1});
    data = await Course.find({creater : "Vaibhav"});

    console.log("Course whose creater is vaibhav" ,data);


    // ********* Comparison operator *********
    // eq  (equal to)
    // gt  (greater than)
    // gte (greater than equal)
    // lt  (less than)
    // lte (less than equal)

    // in
    // not in

    data = await Course.find( {rating : { $gte : 4}} , {name : 1, creater :1, rating : 1} );
    console.log("Courses with rating greater than equal to 4 : ", data);

    data = await Course.find( {rating : { $in : [3,4]}} , {name : 1, creater :1, rating : 1} );
    console.log("Courses with rating is 3 or 4 : ", data);


    // ******* Logical Operator *********
    data = await Course.find( {$or : [ {creater : "Vaibhav"}, {rating : 4} ]  } )
    console.log("Logical or operator : " , data);

}

getCourse();



// 3 - Update existing courses

const updateCourse = async() =>{
    let newCourse = {
        creater : "Hapreet",
        isPublished : false
    };
    await Course.updateMany({creater : "Suyash"},
    newCourse);
    // or use findById -> Course.findByIdAndUpdate(id)
    console.log("Course updated");
}

updateCourse();



// 4 - Deleting course
const deleteCourse = async() =>{
    let data = await Course.deleteMany({creater : "Vaibhav Verma"});
    console.log("Deleted course");
}

deleteCourse();