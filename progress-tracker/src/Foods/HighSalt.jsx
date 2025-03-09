import React from "react";

const HighSalt = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">🧂 The Truth About High-Salt Foods</h1>
        <p className="text-gray-700 text-lg mb-6">
          Consuming too much salt can cause water retention, leading to puffiness, dark circles, and increased blood pressure.
          It negatively affects kidney health and speeds up skin aging.
        </p>
        <h2 className="text-2xl font-bold text-red-500 mb-3">🚨 How High-Salt Foods Affect Your Body:</h2>
        <ul className="text-gray-700 text-lg list-disc list-inside mb-6">
          <li>Causes dehydration, leading to dry and dull skin.</li>
          <li>Increases puffiness, bloating, and dark circles under the eyes.</li>
          <li>Raises blood pressure, putting stress on the heart and kidneys.</li>
          <li>Triggers water retention, making the body look swollen.</li>
          <li>Weakens bones by causing calcium loss over time.</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-500 mb-3">✅ Healthier Alternatives:</h2>
        <p className="text-gray-700 text-lg mb-6">
          Reduce salt intake and use healthier options like Himalayan salt, fresh herbs, and homemade broth for better taste and nutrition.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-500 mb-4">🎥 Watch This Video to Learn More</h2>
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example"
            title="How High-Salt Foods Affect Your Body"
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

export default HighSalt;
