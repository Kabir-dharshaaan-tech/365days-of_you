import React from "react";

const Oils = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">🛢️ The Truth About Unhealthy Oils & Trans Fats</h1>
        <p className="text-gray-700 text-lg mb-6">
          Consuming unhealthy oils and trans fats accelerates aging, weakens heart health, and contributes to obesity.
          These oils increase inflammation, damage skin cells, and weaken hair growth.
        </p>
        <h2 className="text-2xl font-bold text-red-500 mb-3">🚨 How Unhealthy Oils Affect Your Body:</h2>
        <ul className="text-gray-700 text-lg list-disc list-inside mb-6">
          <li>Speeds up skin aging and wrinkle formation.</li>
          <li>Leads to clogged arteries and increases heart disease risk.</li>
          <li>Weakens hair roots, leading to excessive hair fall.</li>
          <li>Causes weight gain and increases bad cholesterol levels.</li>
          <li>Triggers chronic inflammation in the body.</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-500 mb-3">✅ Healthier Alternatives:</h2>
        <p className="text-gray-700 text-lg mb-6">
          Replace unhealthy oils with heart-friendly options like olive oil, coconut oil, and ghee. Use cold-pressed
          oils for cooking to retain nutrients and ensure better health.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-500 mb-4">🎥 Watch This Video to Learn More</h2>
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example"
            title="How Unhealthy Oils Affect Your Body"
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

export default Oils;
