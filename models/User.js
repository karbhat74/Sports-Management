const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  usn: { type: String, required: true, unique: true },
  branch: { type: String, required: true },
  semester: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
