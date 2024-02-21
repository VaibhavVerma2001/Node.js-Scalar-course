const express = require("express");
const bodyParser = require("body-parser");
const categoryRoute = require("./routes/categories");
const studentRoute = require("./routes/students");


// middlewares
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/category" , categoryRoute);
app.use("/api/student" , studentRoute);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});


