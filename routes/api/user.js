const express = require("express");
const router = express.Router();

//load Person
const User = require("../../models/User");

//@route      Get api/user
//@desc       get all user
//@access      Public
router.get("/", (req, res) => {
  User.find()

    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ notfound: "not dound any person" }));
});

//@route      Post api/user
//@desc       add user
//@access      private
router.post("/", (req, res) => {
  const { name, email, password, password2 } = req.body;

  const user = User.create({
    name,
    email,
    password,
    password2
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      password2: user.password2
    });
  } else {
    res.status(400);
  
  }
});

module.exports = router;
