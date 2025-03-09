import React from "react";

const Alcohol = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-3xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">☕ The Truth About Excessive Caffeine & Alcohol</h1>
        <p className="text-gray-700 text-lg mb-6">
          Overconsumption of caffeine and alcohol can dehydrate the body, weaken the liver, and accelerate skin aging. These substances can also disrupt sleep patterns and hormonal balance, leading to long-term health issues.
        </p>
        <h2 className="text-2xl font-bold text-red-500 mb-3">🚨 How Alcohol & Caffeine Affect Your Body:</h2>
        <ul className="text-gray-700 text-lg list-disc list-inside mb-6">
          <li>Dries out the skin, leading to wrinkles and early aging.</li>
          <li>Weakens hair roots, causing hair thinning and hair loss.</li>
          <li>Damages liver function and slows down detoxification.</li>
          <li>Disrupts sleep, leading to fatigue and poor mental health.</li>
          <li>Can cause hormonal imbalances and increased stress levels.</li>
        </ul>
        <h2 className="text-2xl font-bold text-green-500 mb-3">✅ Healthier Alternatives:</h2>
        <p className="text-gray-700 text-lg mb-6">
          Reduce caffeine and alcohol intake by switching to herbal teas, fruit smoothies, and hydrating drinks like coconut water. Prioritize proper hydration to maintain skin and overall health.
        </p>
        
        <h2 className="text-2xl font-bold text-blue-500 mb-4">🎥 Watch This Video to Learn More</h2>
        <div className="mb-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/example"
            title="How Alcohol & Caffeine Affect Your Body"
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

export default Alcohol;
