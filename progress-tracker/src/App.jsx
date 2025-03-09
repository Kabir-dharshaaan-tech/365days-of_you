



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProgressTracker from "./components/ProgressTracker"; 
import Navbar from "./pages/Navbar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/progress-tracker" element={<ProgressTracker />} /> {/* ✅ Check this */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
