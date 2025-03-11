








import React, { useState, useEffect } from "react";
import axios from "axios";

const Sugar = () => {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [savedVideos, setSavedVideos] = useState([]);
  const category = "sugar"; // Ensure category is correctly assigned

  const getEmbedUrl = (url) => {
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/)([^"&?\/ ]{11})/
    );
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : "";
  };

  // Fetch only videos in the "sugar" category
  const fetchVideos = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/videos/${category}`);
      setSavedVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleYoutubeLinkChange = (event) => {
    setYoutubeLink(event.target.value);
  };

  const handleAddVideo = async () => {
    const embedUrl = getEmbedUrl(youtubeLink);
    if (youtubeLink && embedUrl) {
      try {
        await axios.post("http://localhost:8080/api/videos/add", {
          url: embedUrl,
          category, // Send category to backend
        });
        setYoutubeLink(""); // Clear input
        fetchVideos(); // Refresh video list
      } catch (error) {
        console.error("Error adding video:", error.response?.data || error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">
          🍭 How Sugary and Processed Foods Affect Our Health and Skin
        </h1>
        <h2 className="text-2xl font-bold text-blue-500 mb-4">🎥 Add a YouTube Video</h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter YouTube Video Link"
            value={youtubeLink}
            onChange={handleYoutubeLinkChange}
            className="w-full p-2 border rounded-lg mt-2"
          />
          <button
            onClick={handleAddVideo}
            className="bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Video
          </button>
        </div>

        {savedVideos.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-green-500 mb-3">📌 Saved Videos</h2>
            {savedVideos.map((video, index) => (
              <iframe
                key={index}
                className="w-full h-64 rounded-lg shadow-lg mt-4"
                src={video.url}
                title={`YouTube Video ${index + 1}`}
                allowFullScreen
              ></iframe>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sugar;
