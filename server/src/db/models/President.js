const mongoose = require("mongoose");

const presidentSchema = new mongoose.Schema({
  name : { type: String, required: true},
  email : { type: String, required: true},
  password : { type: String, required: true},
  club : { type: String, required: true},
});

const presidentModel = mongoose.model("President", presidentSchema);

module.exports = presidentModel;
