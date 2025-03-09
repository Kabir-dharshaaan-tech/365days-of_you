




import { Link } from "react-router-dom";

function Navbar() {
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
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/progress-tracker" className="hover:underline">
            Progress Tracker
          </Link>
          <Link to="/food" className="hover:underline">
            Harmful Foods
          </Link>
          <Link to="/login" className="hover:underline">
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;





