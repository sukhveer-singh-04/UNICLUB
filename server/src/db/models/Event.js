const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title : { type: String, required: true},
  club: { type: String, required: true },
  imageURL: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now},
  addedBy: { type: String, required: true }
});

const eventModel = mongoose.model("Event", eventSchema);

module.exports = eventModel;
