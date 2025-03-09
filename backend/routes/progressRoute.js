const express = require("express");
const router = express.Router();
const { createProgress, getProgressData } = require("../controllers/progressController");

// Route to create or update progress data
router.post("/progress", createProgress);

// Route to get all progress data
router.get("/progress", getProgressData);

module.exports = router;
