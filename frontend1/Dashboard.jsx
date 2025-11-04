import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Welcome, {user?.name || "User"}!
        </h1>
        <p className="mb-6 text-gray-700">
          Start your mock interviews or view past sessions.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="/interview"
            className="bg-blue-700 text-white px-6 py-3 rounded-md text-center hover:bg-blue-800 transition"
          >
            Start Mock Interview
          </Link>
          <Link
            to="/feedback"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-center hover:bg-blue-600 transition"
          >
            View Feedback
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
