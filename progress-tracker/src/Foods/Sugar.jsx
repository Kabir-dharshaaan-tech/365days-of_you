import React from "react";

const Sugar = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">🍭 The Truth About Sugar</h1>
        <p className="text-gray-700 text-lg mb-6">
          Excess sugar consumption accelerates aging, weakens skin elasticity, and increases the risk of wrinkles. It also
          leads to insulin resistance, causing inflammation that affects organs, hair, and overall health.
        </p>
        <h2 className="text-2xl font-bold text-red-500 mb-3">🚨 How Sugar Affects Your Body:</h2>
        <ul className="text-gray-700 text-lg list-disc list-inside mb-6">
          <li>Speeds up skin aging by breaking down collagen (glycation process).</li>
          <li>Increases acne, dullness, and skin sagging.</li>
          <li>Triggers insulin spikes, leading to weight gain and hormonal imbalance.</li>
          <li>Causes fatigue and energy crashes.</li>
          <li>Leads to chronic inflammation and weakens immunity.</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-500 mb-3">✅ Healthier Alternatives:</h2>
        <p className="text-gray-700 text-lg mb-6">
          Replace refined sugar with natural sweeteners like honey, jaggery, dates, and fruits. Opt for a balanced diet to
          maintain youthful skin and long-term health.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-500 mb-4">🎥 Watch This Video to Learn More</h2>
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/qh3-bGmwhXw"
            title="How Sugar Affects Skin and Aging"
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

export default Sugar;
