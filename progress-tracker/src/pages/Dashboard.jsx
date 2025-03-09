import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("progressData")) || [];
    setProgressData(storedData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">📊 Dashboard</h1>

        {progressData.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-700">Your Progress</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {progressData.map((entry, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
                  <p className="text-green-600 font-semibold text-lg">✅ {entry.status}</p>
                  <p className="text-gray-500">📅 {entry.date}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500 mt-6 text-center">No progress recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
