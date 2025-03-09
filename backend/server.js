


const express = require("express");
const connectDB = require("./config/db");
const progressRoutes = require("./routes/progressRoute");
const cors = require("cors");  // Import CORS package

const app = express();

// Use CORS middleware to allow requests from specific origins
app.use(cors());  // This allows requests from any origin, you can restrict it further if needed

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // For parsing JSON data

// Routes
app.use("/api", progressRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
