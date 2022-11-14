const express = require("express"); //for install => npm i express
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const ConnetDb = require("./Config/db");
const mongoose = require("mongoose");
dotenv.config();
const app = express();
app.use(
  cors({
    orgin: "*",
  })
);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${8000}!`));

ConnetDb();
// mongoose
//   .connect(
//     "mongodb+srv://haamir3030:ASK!12345ask@cluster0.xjnmeuv.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(console.log("conet"));

app.get("/api/test", (req, res) => res.send({ message: "Hello" }));

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((item) => item._id === req.params.id);
  res.send(note);
});
