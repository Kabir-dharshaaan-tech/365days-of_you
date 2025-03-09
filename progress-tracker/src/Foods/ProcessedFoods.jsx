import React from "react";

const ProcessedFoods = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">🍔 The Truth About Processed Foods</h1>
        <p className="text-gray-700 text-lg mb-6">
          Processed foods often contain excessive sugars, unhealthy fats, and preservatives that can lead to various health issues such as obesity, heart disease, and diabetes. Let's take a look at how these foods affect your health.
        </p>
        <h2 className="text-2xl font-bold text-red-500 mb-3">🚨 How Processed Foods Affect Your Body:</h2>
        <ul className="text-gray-700 text-lg list-disc list-inside mb-6">
          <li>Increase the risk of obesity due to high sugar and fat content.</li>
          <li>Can lead to heart disease and high blood pressure.</li>
          <li>Contains preservatives and additives that may disrupt hormonal balance.</li>
          <li>Contribute to poor gut health and digestive issues.</li>
          <li>May cause cravings and dependency on unhealthy food due to addictive ingredients.</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-500 mb-3">✅ Healthier Alternatives:</h2>
        <p className="text-gray-700 text-lg mb-6">
          Opt for fresh, whole foods like fruits, vegetables, lean meats, and whole grains to support your health and wellbeing.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-500 mb-4">🎥 Watch This Video to Learn More</h2>
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example"
            title="The Impact of Processed Foods on Health"
            allowFullScreen
          ></iframe>
        </div>

        <a
          href="/food"
          className="bg-red-600 text-white py-2 px-5 rounded-lg font-bold hover:bg-red-700 transition"
        >
          Back to Food Categories
        </a>
      </div>
    </div>
  );
};

export default ProcessedFoods;
