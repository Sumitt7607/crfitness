import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Admin() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  const [list, setList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    duration: "",
    features: "",
  });
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    const res = await fetch("https://crfitness-yezw.vercel.app/api/packages");
    const data = await res.json();
    setList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= SUBMIT (CREATE + UPDATE)
  const submit = async () => {
    if (!form.name || !form.price || !form.duration) {
      alert("Fill all fields");
      return;
    }

    const url = editId
      ? `https://crfitness-yezw.vercel.app/api/packages/${editId}`
      : "https://crfitness-yezw.vercel.app/api/packages";

    const method = editId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: form.name,
        price: Number(form.price),
        duration: form.duration,
        features: form.features
          .split("\n")
          .map((f) => f.trim())
          .filter((f) => f !== ""),
      }),
    });

    setForm({ name: "", price: "", duration: "", features: "" });
    setEditId(null);
    fetchData();
  };

  // ================= DELETE
  const del = async (id) => {
    if (!confirm("Delete this package?")) return;

    await fetch(`https://crfitness-yezw.vercel.app/api/packages/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchData();
  };

  // ================= EDIT
  const edit = (p) => {
    setForm({
      name: p.name,
      price: p.price,
      duration: p.duration,
      features: p.features.join("\n"),
    });
    setEditId(p._id);
  };

  // ================= LOGOUT (🔥 ADDED)
  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 relative">

      {/* 🔥 LOGOUT BUTTON */}
      <button
        onClick={handleLogout}
        className="absolute top-5 right-5 bg-red-500 px-4 py-2 rounded font-semibold"
      >
        Logout
      </button>

      <h1 className="text-4xl font-bold mb-8 text-center">
        ADMIN <span className="text-red-500">PANEL</span>
      </h1>

      {/* FORM */}
      <motion.div
        className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col gap-4">
          <input
            placeholder="Package Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="p-3 rounded bg-black border border-gray-600"
          />

          <input
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
            className="p-3 rounded bg-black border border-gray-600"
          />

          <input
            placeholder="Duration (/month)"
            value={form.duration}
            onChange={(e) =>
              setForm({ ...form, duration: e.target.value })
            }
            className="p-3 rounded bg-black border border-gray-600"
          />

          <textarea
            placeholder={`Enter features (one per line)
Example:
Gym Access
Trainer
Steam`}
            value={form.features}
            onChange={(e) =>
              setForm({ ...form, features: e.target.value })
            }
            className="p-3 rounded bg-black border border-gray-600"
            rows={4}
          />

          <button
            onClick={submit}
            className="bg-red-500 hover:bg-red-600 transition p-3 rounded font-semibold"
          >
            {editId ? "Update Package" : "Add Package"}
          </button>
        </div>
      </motion.div>

      {/* LIST */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {list.map((p, i) => (
          <motion.div
            key={p._id}
            className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h2 className="text-xl font-bold mb-2">{p.name}</h2>

            <p className="text-red-400 text-2xl font-bold">
              ₹{p.price}
            </p>

            <p className="text-sm mb-3">{p.duration}</p>

            <ul className="text-sm mb-4 space-y-1">
              {p.features?.map((f, idx) => (
                <li key={idx}>• {f}</li>
              ))}
            </ul>

            <div className="flex gap-2">
              <button
                onClick={() => edit(p)}
                className="bg-blue-500 px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => del(p._id)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}