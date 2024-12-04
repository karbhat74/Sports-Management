import React, { useEffect, useState } from "react";
import Card from "../../components/Shared/Card";
import { getUpcomingEvents } from "../../services/eventService";

function Upcoming() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getUpcomingEvents();
        setEvents(data);
      } catch (err) {
        setError("Failed to fetch upcoming events.");
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
      <h2>Upcoming Sports Events</h2>
      <div className="card-grid">
        {events.map((event) => (
          <Card
            key={event._id}
            title={event.name}
            description={`Date: ${new Date(event.date).toLocaleDateString()} | Venue: ${event.venue}`}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
