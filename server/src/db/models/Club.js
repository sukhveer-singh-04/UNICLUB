const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  name : { type: String, required: true},
  displayName : { type: String, required: true},
  description : { type: String, required: true},
  imageURL : { type: String, required: true},
  president: { type: String, required: true },
});

const clubModel = mongoose.model("Club", clubSchema);

module.exports = clubModel;
