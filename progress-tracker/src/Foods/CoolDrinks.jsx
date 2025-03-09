import React from "react";

const CoolDrinks = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">🥤 The Truth About Carbonated & Energy Drinks</h1>
        <p className="text-gray-700 text-lg mb-6">
          Carbonated and energy drinks contain excessive sugar and chemicals that cause dehydration, weaken bones, and accelerate skin aging. These drinks also contribute to obesity and hormonal imbalances.
        </p>
        <h2 className="text-2xl font-bold text-red-500 mb-3">🚨 How Cool Drinks Affect Your Body:</h2>
        <ul className="text-gray-700 text-lg list-disc list-inside mb-6">
          <li>Dries out the skin, leading to premature wrinkles and dullness.</li>
          <li>Weakens bones and teeth due to high phosphoric acid content.</li>
          <li>Leads to insulin resistance and increases diabetes risk.</li>
          <li>Causes bloating and digestive discomfort due to carbonation.</li>
          <li>Triggers energy crashes and increases dependency on caffeine.</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-500 mb-3">✅ Healthier Alternatives:</h2>
        <p className="text-gray-700 text-lg mb-6">
          Swap out sodas and energy drinks for coconut water, herbal teas, and fresh fruit juices. These options keep you hydrated and support overall well-being.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-500 mb-4">🎥 Watch This Video to Learn More</h2>
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example"
            title="How Cool Drinks Affect Your Body"
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

export default CoolDrinks;
