const router = require("express").Router();
const joi = require("joi"); // version 13.1.0
// joi - The most powerful schema description language and data validator for JavaScript.It works at express level and mongodb validations work for DB level. 
const Category = require("../db/category");


// Get all categories
router.get("/", async (req, res) => {
    try {
        let categories = await Category.find();
        res.status(200).json({ categories });
    } catch (err) {
        console.log("Error in get method : ", err);
        res.status(500).json({ msg: "Internal Server Error!", err: err });
    }

});


// Add new category
router.post("/", async (req, res) => {

    // validate with joi
    let { error, value } = validateData(req.body);
    // console.log("error is : " , error);
    // console.log("value is : " , value);

    if (error) {
        console.log(error.details[0].message);
        return res.status(400).json(error.details[0].message);
    } // return so that further we dont proceed


    try {
        let newCat = new Category({
            name: req.body.name
        })
        let savedCat = await newCat.save();
        res.status(201).json({ savedCat });
    } catch (err) {
        console.log("Error in post method", err);
        res.status(500).json({ msg: "Internal Server Error!", err: err });
    }

});


// Update specific category
router.put("/:id", async (req, res) => {
    try {

        // validate with joi
        let { error} = validateData(req.body);

        if (error) {
            console.log(error.details[0].message);
            return res.status(400).json(error.details[0].message);
        }

        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            {
                // $set: req.body,
                $set: { name: req.body.name },
            },
            { new: true }
        );
        res.status(200).json(updatedCategory);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



router.delete("/:id", async (req, res) => {
    try {
        let deletedCategory = await Category.findByIdAndDelete(req.params.id);

        if(!deletedCategory){
            res.status(400).json({msg : "Category with given id not found ..."});
            return ;
        }

        res.status(200).json({msg : "Category deleted successfully ...",deletedCategory});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.get("/:id", async (req, res) => {
    try {
        let category = await Category.findById(req.params.id);

        if(!category){
            res.status(400).json({msg : "Category with given id not found ..."});
            return ;
        }

        res.status(200).json({category});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// https://joi.dev/api/?v=17.12.0
function validateData(category) {
    const schema = {
        name: joi.string().min(3).required()
    }

    return joi.validate(category, schema);
}

module.exports = router;