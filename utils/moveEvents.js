const Event = require("../models/Event");

const movePastEvents = async () => {
  try {
    const currentDate = new Date();

    // Find events that are past their dates
    const pastEvents = await Event.find({ date: { $lt: currentDate }, result: null });

    if (pastEvents.length > 0) {
      console.log(`Moving ${pastEvents.length} past events to previous events...`);

      for (let event of pastEvents) {
        event.result = "Completed"; // Mark as completed
        await event.save();
      }

      console.log("Past events updated successfully.");
    }
  } catch (err) {
    console.error("Error moving past events:", err.message);
  }
};

module.exports = movePastEvents;
