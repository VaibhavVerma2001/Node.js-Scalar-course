const router = require("express").Router();
const Student = require("../db/student");
const joi = require("joi");

// Get all students
router.get("/", async (req, res) => {
    try {
        let students = await Student.find();
        res.status(200).json({ students });
    } catch (err) {
        console.log("Error in get method : ", err);
        res.status(500).json({ msg: "Internal Server Error!", err: err });
    }

});


// Add new student
router.post("/", async (req, res) => {

    // validate with joi
    let { error, value } = validateData(req.body);

    if (error) {
        console.log(error.details[0].message);
        return res.status(400).json(error.details[0].message);
    } // return so that further we dont proceed


    try {
        let newStudent = new Student({
            name: req.body.name,
            enrolled: req.body.enrolled,
            phone: req.body.phone
        });
        let savedStudent = await newStudent.save();
        res.status(201).json({ savedStudent });
    } catch (err) {
        console.log("Error in post method", err);
        res.status(500).json({ msg: "Internal Server Error!", err: err });
    }

});


// Update specific student
router.put("/:id", async (req, res) => {
    try {

        // validate with joi
        let { error } = validateData(req.body);

        if (error) {
            console.log(error.details[0].message);
            return res.status(400).json(error.details[0].message);
        } // return so that we dont proceed further

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            {
                // $set: req.body,
                $set: { name: req.body.name, enrolled: req.body.enrolled, phone: req.body.phone },
            },
            { new: true }
        );
        res.status(200).json(updatedStudent);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



router.delete("/:id", async (req, res) => {
    try {
        let deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            res.status(400).json({ msg: "Student with given id not found ..." });
            return;
        }

        res.status(200).json({ msg: "Student deleted successfully ...", deletedStudent });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get("/:id", async (req, res) => {
    try {
        let student = await Student.findById(req.params.id);

        if (!student) {
            res.status(400).json({ msg: "Student with given id not found ..." });
            return;
        }

        res.status(200).json({ student });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// https://joi.dev/api/?v=17.12.0
function validateData(category) {
    const schema = {
        name: joi.string().min(3).required(),
        enrolled: joi.boolean(),
        phone: joi.string().min(10).required(),
    }

    return joi.validate(category, schema);
}

module.exports = router;

