








import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove JWT token from localStorage when logging out
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MyWebsite
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {/* Dashboard and Progress Tracker links are now only visible if logged in */}
          {isLoggedIn && (
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/progress-tracker" className="hover:underline">
              Progress Tracker
            </Link>
          )}
          <Link to="/food" className="hover:underline">
            Harmful Foods
          </Link>

          {/* Show Login or Logout based on the isLoggedIn state */}
          {!isLoggedIn ? (
            <Link to="/login" className="hover:underline">
              Log In
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-white hover:underline"
            >
              Log Out
            </button>
          )}
          
          {/* Show Sign Up button if not logged in */}
          {!isLoggedIn && (
            <Link
              to="/signup"
              className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
