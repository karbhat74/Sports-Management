const Achievement = require("../models/Achievement");

const getAllAchievements = async (req, res, next) => {
  try {
    const achievements = await Achievement.find();
    res.json({ success: true, achievements });
  } catch (err) {
    next(err);
  }
};

const addAchievement = async (req, res, next) => {
  const { studentImage, name, semBranch, sport, level, achievement } = req.body;

  try {
    const newAchievement = new Achievement({
      studentImage,
      name,
      semBranch,
      sport,
      level,
      achievement,
    });
    await newAchievement.save();
    res.status(201).json({ success: true, achievement: newAchievement });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllAchievements, addAchievement };
