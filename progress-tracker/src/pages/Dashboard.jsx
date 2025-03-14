





import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    // Fetch the progress data from the backend when the component mounts
    const fetchProgressData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/progress");
        setProgressData(response.data);
      } catch (error) {
        console.error("Error fetching progress data:", error);
      }
    };

    fetchProgressData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">Progress Dashboard</h1>

        {progressData.length > 0 ? (
          <div className="mt-6">
            {progressData.map((entry, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
                <p className="text-green-600 font-semibold text-lg">✅ {entry.status}</p>
                <p className="text-gray-500">📅 {entry.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No progress recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
