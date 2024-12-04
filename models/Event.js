const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  sportName: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  level: { type: String, required: true },
  teamSize: { type: Number, required: true },
  registrationFee: { type: Number, required: true },
  result: { type: String, default: null },
});

module.exports = mongoose.model("Event", eventSchema);
