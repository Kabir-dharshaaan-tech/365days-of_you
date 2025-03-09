import React from "react";

const RefinedCarbs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">🍞 The Truth About Refined Carbs</h1>
        <p className="text-gray-700 text-lg mb-6">
          Refined carbohydrates, commonly found in white bread, pastries, and sugary snacks, are stripped of nutrients and fiber. Consuming them regularly can lead to several health issues, including weight gain, blood sugar imbalances, and heart disease.
        </p>
        <h2 className="text-2xl font-bold text-red-500 mb-3">🚨 How Refined Carbs Affect Your Body:</h2>
        <ul className="text-gray-700 text-lg list-disc list-inside mb-6">
          <li>Lead to rapid spikes and crashes in blood sugar levels.</li>
          <li>Contribute to weight gain and obesity due to excessive calorie intake.</li>
          <li>Increase the risk of type 2 diabetes and insulin resistance.</li>
          <li>Promote inflammation and may cause digestive issues.</li>
          <li>Can contribute to heart disease by raising bad cholesterol levels.</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-500 mb-3">✅ Healthier Alternatives:</h2>
        <p className="text-gray-700 text-lg mb-6">
          Choose whole grains, fruits, and vegetables as better alternatives to refined carbs. These options provide essential nutrients, fiber, and more stable energy levels throughout the day.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-500 mb-4">🎥 Watch This Video to Learn More</h2>
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example"
            title="The Impact of Refined Carbs on Your Health"
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

export default RefinedCarbs;
