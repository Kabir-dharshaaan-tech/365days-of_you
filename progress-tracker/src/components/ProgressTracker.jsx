



import React, { useState, useEffect } from "react";

const harmfulFoods = [
  {
    category: "Sugary & Processed Foods (Causes Wrinkles & Aging!)",
    items: [
      "White Sugar (in sweets, cakes, pastries, etc.)",
      "Soft Drinks (Coca-Cola, Pepsi, Fanta, Sprite, etc.)",
      "Energy Drinks (Red Bull, Monster, etc.)",
      "Artificial Sweeteners (Aspartame, Sucralose, Saccharin)",
      "Candies & Toffees (High-fructose corn syrup damages collagen)",
      "Chocolate with Sugar (Eat only dark chocolate 85%+ cocoa)",
      "Jams & Jellies (Loaded with refined sugar)",
      "Ice Cream (Full of sugar + bad fats)",
      "Canned Fruits (High fructose syrup = premature wrinkles)",
      "Breakfast Cereals (Cornflakes, Chocos, etc. = hidden sugar)",
    ],
  },
  {
    category: "Refined Carbs (Speeds Up Skin Aging & Dryness!)",
    items: [
      "White Bread (Spikes insulin, speeds up skin aging)",
      
      "Pasta (Regular wheat pasta damages skin collagen)",
      "Instant Noodles (Maggi, Cup Noodles, Top Ramen, etc.)",
      "White Flour (Maida) – Found in pizzas, burgers, samosas",
      "Biscuits & Cookies (Most contain refined sugar & flour)",
      "Bakery Cakes & Muffins (High in sugar & processed oils)",
      "Doughnuts (Deep-fried + sugar = double aging effect)",
      "Pani Puri (Refined flour + unhygienic oil = bloating & bad skin)",
      "Burgers & Pizzas (Loaded with bad carbs & inflammatory oils)",
    ],
  },
  {
    category: "Deep-Fried & Oily Foods (Causes Acne & Dull Skin!)",
    items: [
      "French Fries (Trans fats damage skin barrier)",
      "Chips (Lays, Kurkure, Bingo = deep-fried & artificial flavors)",
      "Samosas & Pakoras (Deep-fried with reused unhealthy oils)",
      "Fried Chicken (KFC & other fast food = worst for skin & health)",
      "Popcorn (Microwave popcorn has toxic artificial butter)",
      "Deep-fried Pooris & Bhaturas (Inflammation-causing trans fats)",
      "Vada Pav & Pav Bhaji (Refined carbs + fried components)",
      "Puffs & Patties (High in refined flour & bad fats)",
      "Fried Namkeen (Mixtures, sev, murukku)",
      "Onion Rings & Cheese Balls (Cheese + deep-fried batter = double damage)",
    ],
  },
  {
    category: "Processed & Artificially Flavored Foods (Speeds Up Aging!)",
    items: [
      "Instant Soups (Maggie Soup, Knorr, etc. – Contains MSG & chemicals)",
      "Processed Cheese Slices & Cheese Spread (Artificial ingredients)",
      "Mayonnaise (High in unhealthy oils & preservatives)",
      "Ketchup (Hidden sugar & artificial flavoring)",
      "Pickles (High salt content = puffy face & bloating)",
      "Artificial Flavored Yogurts (Sugar-loaded 'fruit' yogurts)",
      "Ice Tea & Artificial Juices (Packaged juices have added sugar)",
      "Packaged Salads with Dressings (Dressings are high in sugar & bad fats)",
      "Flavored Milk (Sugary additives destroy gut health)",
      "Instant Coffee Mixes (High sugar + artificial flavors)",
    ],
  },
  {
    category: "Unhealthy Oils & Fats (Weakens Skin & Increases Wrinkles!)",
    items: [
      "Soybean Oil",
      "Canola Oil",
      "Palm Oil (Found in cheap chocolates, chips, biscuits)",
      "Vanaspati (Worst for skin, causes bloating & acne)",
      "Margarine (Fake butter = high trans fats)",
      "Dalda Ghee (Processed = inflammatory for skin & gut)",
      "Cheap Street Food Oils (Used multiple times, worst for skin)",
      "Butter Popcorn (Artificial butter damages skin barrier)",
      "Fried Frozen Snacks (French fries, nuggets, frozen samosas)",
    ],
  },
];

const ProgressTracker = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    // 🔥 Clear old data when app loads
    localStorage.removeItem("progressData");
    setProgressData([]);
  }, []);

  useEffect(() => {
    // 🔥 Save progress after submission
    localStorage.setItem("progressData", JSON.stringify(progressData));
  }, [progressData]);

  const handleCheckboxChange = (categoryIndex, itemIndex) => {
    setCheckedItems((prev) => ({
      ...prev,
      [`${categoryIndex}-${itemIndex}`]: !prev[`${categoryIndex}-${itemIndex}`],
    }));
  };

  const handleCategoryCheck = (categoryIndex) => {
    const newCheckedItems = { ...checkedItems };
    harmfulFoods[categoryIndex].items.forEach((_, itemIndex) => {
      newCheckedItems[`${categoryIndex}-${itemIndex}`] = true;
    });
    setCheckedItems(newCheckedItems);
  };

  const allChecked = () => {
    return harmfulFoods.every((section, categoryIndex) =>
      section.items.every((_, itemIndex) => checkedItems[`${categoryIndex}-${itemIndex}`])
    );
  };

  const handleSubmit = () => {
    if (allChecked()) {
      const today = new Date().toLocaleDateString();

      // 🔥 Ensure only one entry per day
      if (!progressData.some((entry) => entry.date === today)) {
        setProgressData([...progressData, { date: today, status: "Achieved" }]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-red-600">🚫 Harmful Foods Tracker</h1>

        {harmfulFoods.map((section, categoryIndex) => (
          <div key={categoryIndex} className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{section.category}</h2>
              <button
                onClick={() => handleCategoryCheck(categoryIndex)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600"
              >
                Fill All
              </button>
            </div>
            <ul className="mt-3 space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={checkedItems[`${categoryIndex}-${itemIndex}`] || false}
                    onChange={() => handleCheckboxChange(categoryIndex, itemIndex)}
                    className="w-5 h-5 text-blue-500 border-gray-300 rounded"
                  />
                  <label>{item}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          disabled={!allChecked()}
          className={`w-full mt-6 py-3 text-lg font-semibold text-white rounded-lg ${
            allChecked() ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit
        </button>

        {progressData.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-700">Completion History</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {progressData.map((entry, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
                  <p className="text-green-600 font-semibold text-lg">✅ {entry.status}</p>
                  <p className="text-gray-500">📅 {entry.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTracker;
