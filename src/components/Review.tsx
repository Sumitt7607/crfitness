import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); // 🔥 add this

  const submit = async () => {
    if (!name || !message) return alert("Fill all fields");

    await fetch("https://crfitness-yezw.vercel.app/api/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, message }),
    });

    setName("");
    setMessage("");

    alert("Review submitted!");

    // 🔥 REDIRECT TO HOME
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-white/5 p-8 rounded-xl w-full max-w-md">

        <h2 className="text-3xl mb-6 text-center">
          GIVE <span className="text-red-500">REVIEW</span>
        </h2>

        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-4 bg-black border border-gray-600 rounded"
        />

        <textarea
          placeholder="Your Review"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 mb-4 bg-black border border-gray-600 rounded"
        />

        <button
          onClick={submit}
          className="w-full bg-red-500 p-3 rounded font-bold"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}