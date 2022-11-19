const express = require("express");
const { registerUser,authUser,updateUserProfile } = require("../Controllers/userControlers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route('/profile').put(protect,updateUserProfile)

module.exports = router;
