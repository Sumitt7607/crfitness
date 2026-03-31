import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("https://crfitness-yezw.vercel.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        navigate("/admin");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
      >
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          ADMIN <span className="text-red-500">LOGIN</span>
        </h2>

        {/* FORM */}
        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-red-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:border-red-500"
          />

          <button
            onClick={handleLogin}
            className="bg-red-500 hover:bg-red-600 transition p-3 rounded font-semibold text-white"
          >
            Login
          </button>
        </div>

        {/* SMALL NOTE */}
        <p className="text-gray-400 text-xs text-center mt-4">
          Only authorized admin can access this panel
        </p>
      </motion.div>
    </div>
  );
}