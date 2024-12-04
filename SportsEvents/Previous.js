import React, { useEffect, useState } from "react";
import Card from "../../components/Shared/Card";
import { getPreviousEvents } from "../../services/eventService";

function Previous() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getPreviousEvents();
        setEvents(data);
      } catch (err) {
        setError("Failed to fetch previous events.");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Previous Sports Events</h2>
      <div className="card-grid">
        {events.map((event) => (
          <Card
            key={event._id}
            title={event.name}
            description={`Date: ${new Date(event.date).toLocaleDateString()} | Venue: ${event.venue} | Result: ${event.result || "N/A"}`}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Previous;
