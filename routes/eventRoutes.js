const express = require("express");
const { getUpcomingEvents, getPreviousEvents, getAllEvents, addEvent, updateEvent } = require("../controllers/eventController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getAllEvents);
router.get("/upcoming", getUpcomingEvents); // Route for upcoming events
router.get("/previous", getPreviousEvents); // Route for previous events
router.post("/", authMiddleware, addEvent);
router.put("/:id", authMiddleware, updateEvent);

module.exports = router;
