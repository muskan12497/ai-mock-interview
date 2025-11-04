import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-white to-violet-100">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
