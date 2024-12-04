const bcrypt = require("bcryptjs");
const User = require("../models/User");

const registerUser = async (req, res, next) => {
  const { name, usn, branch, semester, email, phoneNumber } = req.body;

  try {
    const user = new User({ name, usn, branch, semester, email, phoneNumber });
    await user.save();
    res.status(201).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  const { usn, email } = req.body;

  try {
    const user = await User.findOne({ usn, email });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

module.exports = { registerUser, loginUser };
