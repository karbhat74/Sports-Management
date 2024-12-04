import React from "react";
import { Link } from "react-router-dom";

function SportsEvent() {
  return (
    <div>
      <h2>Sports Events</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <Link to="/SportsEvents/upcoming" style={buttonStyle}>
          Upcoming Events
        </Link>
        <Link to="/SportsEvents/previous" style={buttonStyle}>
          Previous Events
        </Link>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#28a745",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
};

export default SportsEvent;
