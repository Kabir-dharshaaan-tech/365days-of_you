// const mongoose = require("mongoose");

// const VideoSchema = new mongoose.Schema({
//   url: { type: String, required: true },
// });

// const Video = mongoose.model("Video", VideoSchema);
// module.exports = Video;

const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  url: { type: String, required: true },
  category: { type: String, required: true }, // Ensure category is required
});

const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
