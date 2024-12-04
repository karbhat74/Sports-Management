const Event = require("../models/Event");

// Fetch all events
const getAllEvents = async (req, res, next) => {
  try {
    const events = await Event.find();
    res.json({ success: true, events });
  } catch (err) {
    next(err);
  }
};

// Fetch upcoming events
const getUpcomingEvents = async (req, res, next) => {
  try {
    const currentDate = new Date();
    const events = await Event.find({ date: { $gte: currentDate } }); // Date >= currentDate
    res.json({ success: true, events });
  } catch (err) {
    next(err);
  }
};

// Fetch previous events
const getPreviousEvents = async (req, res, next) => {
  try {
    const currentDate = new Date();
    const events = await Event.find({ date: { $lt: currentDate } }); // Date < currentDate
    res.json({ success: true, events });
  } catch (err) {
    next(err);
  }
};

// Add a new event
const addEvent = async (req, res, next) => {
  const { sportName, image, date, venue, level, teamSize, registrationFee } = req.body;

  try {
    const event = new Event({
      sportName,
      image,
      date,
      venue,
      level,
      teamSize,
      registrationFee,
    });
    await event.save();
    res.status(201).json({ success: true, event });
  } catch (err) {
    next(err);
  }
};

// Update an event
const updateEvent = async (req, res, next) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const event = await Event.findByIdAndUpdate(id, updates, { new: true });
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.json({ success: true, event });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllEvents, getUpcomingEvents, getPreviousEvents, addEvent, updateEvent };
