import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
      <p className="text-lg text-center mb-8 max-w-lg">
        Explore our platform and enjoy the best experience. Sign in to access your account or create a new one to get started.
      </p>
      <div className="space-x-4">
        <Link to="/login" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-xl shadow-lg transition hover:bg-gray-200">
          Log In
        </Link>
        <Link to="/signup" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Home;
