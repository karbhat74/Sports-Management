import React from "react";

function EventDetails({ event }) {
  if (!event) return <p>Loading event details...</p>;

  return (
    <div>
      <h2>{event.name}</h2>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Venue: {event.venue}</p>
      <p>Level: {event.level}</p>
      {event.description && <p>Description: {event.description}</p>}
      {event.result && <p>Result: {event.result}</p>}
    </div>
  );
}

export default EventDetails;
