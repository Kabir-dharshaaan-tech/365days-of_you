const Progress = require("../models/progressModel");

// Create or update progress
const createProgress = async (req, res) => {
  try {
    const { date, status } = req.body;

    // Check if progress for the day already exists
    const existingProgress = await Progress.findOne({ date });

    if (existingProgress) {
      return res.status(400).json({ message: "Progress already recorded for today." });
    }

    // Create new progress record
    const newProgress = new Progress({ date, status });
    await newProgress.save();

    res.status(201).json(newProgress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

// Get all progress data
const getProgressData = async (req, res) => {
  try {
    const progressData = await Progress.find();
    res.status(200).json(progressData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
};

module.exports = { createProgress, getProgressData };
