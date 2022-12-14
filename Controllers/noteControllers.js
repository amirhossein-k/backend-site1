const asyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error("please fill all");
  } else {
    const note = new Note({ user: req.user._id, title, content, category });

    const createNote = await note.save();

    res.status(201).json(createNote);
  }
});

const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }
  res.json(note);
});
const UpdateNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("your cant perform action");
  }
  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;

    const updatenote = await note.save();

    res.json(updatenote);
  } else {
    res.status(404);
    throw new Error("not found note");
  }
});

const DeleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("your cant perform action");
  }

  if (note) {
    await note.remove();
    res.json({ meessage: "Note Remove" });
  } else {
    res.status(404);
    throw new Error("not found note");
  }
});

module.exports = { getNotes, createNote, getNoteById, UpdateNote, DeleteNote };
