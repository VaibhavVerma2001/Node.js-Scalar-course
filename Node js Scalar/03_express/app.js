const express = require("express");
const bodyParser = require("body-parser");
const mw = require('./middleware/middleware');
const morgan = require("morgan");


const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// ***********  Custom middlewares **************

// next method tells that work is done and now pass control to other middleware
app.use(mw.myMiddleware1);
app.use(mw.myMiddleware2);


// Third party middlewares -> https://expressjs.com/en/resources/middleware.html
// https://www.npmjs.com/package/morgan
app.use(morgan());



// We can use middlewares like this also
app.get("/" , mw.myMiddleware1, mw.myMiddleware2, (req,res)=>{
    res.status(200).send("Hello from express.");
});

app.get("/about" , (req,res)=>{
    res.status(200).send("This is about page.");
});


// Route parameter -> after ":" , access using req.params
// Handling multiple routes


let courses = [
    {id : 1, name : "JavaScript Couse"},
    {id : 2, name : "Node.js Course"},
    {id : 3, name : "React.js Couse"},
]


app.get("/courses/:courseId" , (req,res)=>{
    // console.log(req.params);
    
    let courseId = req.params.courseId;

    // Method 1 - Using for loop
    // for(let i = 0; i < courses.length; i++){
    //     if(courses[i].id === parseInt(courseId)){
    //         res.status(200).send(`Welcome to ${courses[i].name}`);
    //     }
    // }


    // Method 2 - Using forEach loop
    courses.forEach((course)=>{
        if(course.id === parseInt(courseId)){
            res.status(200).send(`Welcome to ${course.name}`);
        }
    });

    // if that courseId is not found
    res.status(404).send("Couse Not Found!");

});


// get all courses
app.get("/courses" , (req,res)=>{
    res.status(200).json(courses);
});


// add new course
app.post("/courses", (req,res)=>{

    try {
        let newCourse = {
            id : courses.length+1,
            name : req.body.name
        };
    
        courses.push(newCourse);
    
    
        res.status(201).json({msg :"Couse added" , courses: courses});

    } catch (error) {
        res.status(501).json("Something Went Wrong!");
    }
    
});


// update existing course
app.put("/course/:courseId" , (req,res)=>{

    // find course with given id and update
    let foundCourse;
    for(let i = 0; i < courses.length; i++){
        if(courses[i].id === parseInt(req.params.courseId)){
            foundCourse = courses[i];
            break;
        }
    }

    // if no course found
    if(!foundCourse){
        res.status(404).json("Course Not Found!");
    }
    
    // update course
    foundCourse.name = req.body.name;
    res.status(404).json({msg : "Course updated" , courses});

});



// delete course
app.delete("/course/:courseId" , (req,res)=>{
    let updatedCourses = courses.filter(course=>course.id !== parseInt(req.params.courseId));

    courses = updatedCourses;

    res.status(200).json({msg : "Deleted successfully", courses});
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`);
});