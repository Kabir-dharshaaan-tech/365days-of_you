


import React from "react";
import { useNavigate } from "react-router-dom";

const foodCategories = [
  { title: "🍭 Sugary & Processed Foods", path: "/sugar" },
  { title: "🍞 Refined Carbs & White Flour", path: "/refined-carbs" },
  { title: "🍟 Deep-Fried & Fast Foods", path: "/fried" },
  { title: "🥤 Carbonated & Energy Drinks", path: "/cool-drinks" },
  { title: "🍖 Processed Meats & Packaged Foods", path: "/processed-foods" },
  { title: "🧂 High-Salt Foods & Instant Noodles", path: "/high-salt" },
  { title: "🥛 Dairy & Artificial Milk Products", path: "/dairy" },
  { title: "🛢️ Unhealthy Oils & Trans Fats", path: "/oils" },
  { title: "☕ Excessive Caffeine & Alcohol", path: "/alcohol" },
  { title: "🍬 Artificial Colors & Preservatives", path: "/artificial-color" },
];

const Food = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-yellow-500 flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl bg-white shadow-2xl rounded-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold text-red-600 mb-4">🚫 Harmful Food Categories</h1>
        <p className="text-gray-600 mb-6 text-lg">Click a category to learn more about it! 🍏</p>

        {/* Grid Layout for Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {foodCategories.map((food, index) => (
            <button
              key={index}
              onClick={() => navigate(food.path)}
              className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
            >
              {food.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Food;


