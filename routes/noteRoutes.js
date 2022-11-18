const express = require("express");
const {
  getNotes,
  createNote,
  getNoteById,
  UpdateNote,
} = require("../Controllers/noteControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router.route("/:id").get(getNoteById).put(protect, UpdateNote);
// .delete();

module.exports = router;
