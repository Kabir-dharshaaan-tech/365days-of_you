


// const express = require("express");
// const connectDB = require("./config/db");
// const progressRoutes = require("./routes/progressRoute");
// const cors = require("cors");  // Import CORS package

// const app = express();

// // Use CORS middleware to allow requests from specific origins
// app.use(cors());  // This allows requests from any origin, you can restrict it further if needed

// // Connect to database
// connectDB();

// // Middleware
// app.use(express.json()); // For parsing JSON data

// // Routes
// app.use("/api", progressRoutes);

// // Server setup
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv'); // To load environment variables
const progressRoutes = require('./routes/progressRoute');
const userRoutes = require('./routes/userRoutes'); // Import the user routes (signup and login)

dotenv.config(); // Load environment variables from .env file

const app = express();

// Use CORS middleware to allow requests from specific origins
app.use(cors());  // This allows requests from any origin, you can restrict it further if needed

// Connect to the database
connectDB();

// Middleware
app.use(express.json()); // For parsing JSON data

// Routes
app.use('/api', progressRoutes);  // Progress-related routes
app.use('/api/users', userRoutes);  // User-related routes (signup and login)

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
