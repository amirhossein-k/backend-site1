const express = require("express");
const { registerUser } = require("../Controllers/userControlers");

const router = express.Router();

router.router("/").post(registerUser);

module.exports = router;
