





import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProgressTracker from "./components/ProgressTracker";
import Food from "./components/Foods";
import Sugar from "./Foods/Sugar";
import RefinedCarbs from "./Foods/RefinedCarbs";
import Fried from "./Foods/Fried";
import CoolDrinks from "./Foods/CoolDrinks";
import ProcessedFoods from "./Foods/ProcessedFoods";
import HighSalt from "./Foods/HighSalt";
import Dairy from "./Foods/Dairy";
import Oils from "./Foods/Oils";
import Alcohol from "./Foods/Alcohol";
import ArtificialColor from "./Foods/ArtificalColor";
import Navbar from "./pages/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Check if the user is logged in
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes: Only accessible when logged in */}
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/progress-tracker"
            element={isLoggedIn ? <ProgressTracker /> : <Navigate to="/login" />}
          />

          {/* Public Routes */}
          <Route path="/food" element={<Food />} />
          <Route path="/sugar" element={<Sugar />} />
          <Route path="/refined-carbs" element={<RefinedCarbs />} />
          <Route path="/fried" element={<Fried />} />
          <Route path="/cool-drinks" element={<CoolDrinks />} />
          <Route path="/processed-foods" element={<ProcessedFoods />} />
          <Route path="/high-salt" element={<HighSalt />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/oils" element={<Oils />} />
          <Route path="/alcohol" element={<Alcohol />} />
          <Route path="/artificial-color" element={<ArtificialColor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
