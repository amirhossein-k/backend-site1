const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
} = require("../Controllers/noteControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router.route("/:id").get(getNoteById);
// .put().delete();

module.exports = router;
