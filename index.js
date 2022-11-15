const express = require("express"); //for install => npm i express
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require("cors");
const ConnetDb = require("./Config/db");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
import { errorHandler, notFound } from "./middleware/errorMiddleware";
dotenv.config();
const app = express();
app.use(
  cors({
    orgin: "*",
  })
);
app.use(express.json());
app.use(notFound);
app.use(errorHandler);

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

// Router
app.use("/api/users", userRoutes);
