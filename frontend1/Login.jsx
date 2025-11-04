import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", { email, password });
      localStorage.setItem("user", JSON.stringify(data));
      login(data);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded-md w-full mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded-md w-full mb-4"
          required
        />
        <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
          Login
        </button>
        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-700 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
