const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  studentImage: { type: String, required: true },
  name: { type: String, required: true },
  semBranch: { type: String, required: true },
  sport: { type: String, required: true },
  level: { type: String, required: true },
  achievement: { type: String, required: true },
});

module.exports = mongoose.model("Achievement", achievementSchema);
