import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import AdminDashboard from "./pages/Admin/Dashboard";
import Home from "./pages/Home";
import Infrastructure from "./pages/Infrastructure";
import Login from "./pages/Login";
import SportsEvent from "./pages/SportsEvent"; // Import the new SportsEvent component
import Previous from "./pages/SportsEvents/Previous";
import Upcoming from "./pages/SportsEvents/Upcoming";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/SportsEvent" element={<SportsEvent />} /> {/* Add route for SportsEvent */}
        <Route path="/SportsEvents/upcoming" element={<Upcoming />} />
        <Route path="/SportsEvents/previous" element={<Previous />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
