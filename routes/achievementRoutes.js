const express = require("express");
const {
  getAllAchievements,
  addAchievement,
} = require("../controllers/achievementController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public route to get all achievements
router.get("/", getAllAchievements);

// Admin-protected route to add an achievement
router.post("/", authMiddleware, addAchievement);

module.exports = router;
