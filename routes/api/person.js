const express = require("express");
const router = express.Router();

//load Person
const Person = require("../../models/Person");

//@route      Get api/person
//@desc       get all person
//@access      Public
router.get("/", (req, res) => {
  Person.find()
    .sort({ data: -1 })
    .then((person) => res.json(person))
    .catch((err) => res.status(404).json({ notfound: "not dound any person" }));
});

module.exports = router;
