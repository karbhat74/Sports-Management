import api from "./api";

export const getUpcomingEvents = async () => {
  const response = await api.get("/events/upcoming");
  return response.data;
};

export const getPreviousEvents = async () => {
  const response = await api.get("/events/previous");
  return response.data;
};

// Fetch event details by ID
export const getEventDetails = async (id) => {
  const response = await api.get(`/events/${id}`);
  return response.data.event; // Ensure backend sends single `event` object
};
