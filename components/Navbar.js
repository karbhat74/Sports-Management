import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/infrastructure">Infrastructure</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/sports/upcoming">Sports Events</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
