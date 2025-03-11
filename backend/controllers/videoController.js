// const Video = require("../models/videoModel");

// // Add a new video
// exports.addVideo = async (req, res) => {
//   try {
//     const { url } = req.body;
//     if (!url) return res.status(400).json({ error: "URL is required" });

//     const newVideo = new Video({ url });
//     await newVideo.save();
//     res.status(201).json({ message: "Video saved successfully!", video: newVideo });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Get all saved videos
// exports.getVideos = async (req, res) => {
//   try {
//     const videos = await Video.find();
//     res.status(200).json(videos);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Get a specific video by ID
// exports.getVideoById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const video = await Video.findById(id);
//     if (!video) return res.status(404).json({ error: "Video not found" });
//     res.status(200).json(video);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };





const Video = require("../models/videoModel");

// Add a new video with a category
exports.addVideo = async (req, res) => {
  try {
    const { url, category } = req.body;
    
    // Check if both URL and category are provided
    if (!url || !category) {
      return res.status(400).json({ error: "URL and Category are required" });
    }

    const newVideo = new Video({ url, category });
    await newVideo.save();

    res.status(201).json({ message: "Video saved successfully!", video: newVideo });
  } catch (error) {
    console.error("Error saving video:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get videos by category (Fetch only videos belonging to a specific category)
exports.getVideosByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    if (!category) {
      return res.status(400).json({ error: "Category is required" });
    }

    const videos = await Video.find({ category });
    res.status(200).json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
