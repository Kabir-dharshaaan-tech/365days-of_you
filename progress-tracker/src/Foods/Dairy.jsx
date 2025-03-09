import React from "react";

const Dairy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">🥛 The Truth About Dairy & Artificial Milk Products</h1>
        <p className="text-gray-700 text-lg mb-6">
          Consuming dairy and artificial milk products can cause acne, bloating, and hormonal imbalances. Many dairy products contain added hormones and antibiotics, which negatively impact overall health.
        </p>
        <h2 className="text-2xl font-bold text-red-500 mb-3">🚨 How Dairy Affects Your Body:</h2>
        <ul className="text-gray-700 text-lg list-disc list-inside mb-6">
          <li>Triggers acne and increases oil production in the skin.</li>
          <li>Leads to bloating and digestive issues, especially for lactose-intolerant individuals.</li>
          <li>Can disrupt hormonal balance, leading to mood swings and weight gain.</li>
          <li>Contains growth hormones that may contribute to inflammation.</li>
          <li>Increases mucus production, affecting respiratory health.</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-500 mb-3">✅ Healthier Alternatives:</h2>
        <p className="text-gray-700 text-lg mb-6">
          Switch to plant-based alternatives like almond milk, oat milk, and coconut milk. These options provide essential nutrients without the side effects of dairy.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-500 mb-4">🎥 Watch This Video to Learn More</h2>
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example"
            title="How Dairy Affects Your Body"
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

export default Dairy;
