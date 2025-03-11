// const express = require("express");
// const { addVideo, getVideos, getVideoById } = require("../controllers/videoController");

// const router = express.Router();

// router.post("/add", addVideo);
// router.get("/", getVideos);
// router.get("/:id", getVideoById);

// module.exports = router;




const express = require("express");
const { addVideo, getVideosByCategory } = require("../controllers/videoController");

const router = express.Router();

router.post("/add", addVideo); // Add video with category
router.get("/:category", getVideosByCategory); // Fetch videos by category

module.exports = router;
