const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Import routes
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const eventRoutes = require("./routes/eventRoutes");
const achievementRoutes = require("./routes/achievementRoutes");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
require("./config/db");

// Routes
app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/achievements", achievementRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/sportsDB