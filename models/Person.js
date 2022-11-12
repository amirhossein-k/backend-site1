const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const PersonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  family: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("person", PersonSchema);
