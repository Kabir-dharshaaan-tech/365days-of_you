import React from "react";

const ArtificialColor = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">🍬 The Truth About Artificial Colors & Preservatives</h1>
        <p className="text-gray-700 text-lg mb-6">
          Artificial colors and preservatives are commonly found in processed foods, candies, and soft drinks. These chemicals have been linked to allergic reactions, hyperactivity, and long-term health risks like organ damage and hormonal imbalance.
        </p>
        <h2 className="text-2xl font-bold text-red-500 mb-3">🚨 How Artificial Colors Affect Your Body:</h2>
        <ul className="text-gray-700 text-lg list-disc list-inside mb-6">
          <li>Causes skin allergies, rashes, and acne breakouts.</li>
          <li>Triggers hyperactivity, especially in children.</li>
          <li>Increases the risk of organ damage and disrupts liver function.</li>
          <li>Weakens the immune system over time.</li>
          <li>May contribute to long-term hormonal imbalances.</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-500 mb-3">✅ Healthier Alternatives:</h2>
        <p className="text-gray-700 text-lg mb-6">
          Choose natural, organic foods without artificial additives. Use fruit and vegetable-based natural colors instead of synthetic dyes.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-500 mb-4">🎥 Watch This Video to Learn More</h2>
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example"
            title="How Artificial Colors Affect Your Body"
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

export default ArtificialColor;
