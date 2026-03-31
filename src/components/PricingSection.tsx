import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, Star, Sparkles } from "lucide-react";

export default function PricingSection() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("https://crfitness-yezw.vercel.app/api/packages")
      .then(res => res.json())
      .then(data => {
        const updated = data.map((item, index) => ({
          ...item,
          popular: index === 1,
        }));
        setPlans(updated);
      });
  }, []);

  return (
    <section className="bg-black text-white py-24 px-6">

      {/* ===== HEADING ===== */}
      <div className="text-center mb-20">
        <p className="text-red-500 tracking-[0.4em] text-sm mb-3">
          MEMBERSHIP PLANS
        </p>

        <h2 className="text-6xl md:text-7xl font-extrabold tracking-wide">
          CHOOSE YOUR{" "}
          <span className="text-red-500">PLAN</span>
        </h2>
      </div>

      {/* ===== CARDS ===== */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {plans.map((plan, i) => (
          <motion.div
            key={plan._id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10 }}
            className={`relative rounded-2xl p-8 transition-all duration-300 ${
              plan.popular
                ? "bg-red-600 text-white scale-105 shadow-[0_0_40px_rgba(255,0,0,0.6)]"
                : "bg-[#111] border border-gray-800"
            }`}
          >

            {/* 🔥 MOST POPULAR */}
            {plan.popular && (
              <>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-red-500 text-xs px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" /> MOST POPULAR
                </div>

                <div className="absolute top-5 right-5 animate-pulse">
                  <Sparkles className="w-5 h-5 text-white/70" />
                </div>
              </>
            )}

            {/* PLAN NAME */}
            <h3 className="text-2xl font-bold mb-3">
              {plan.name}
            </h3>

            {/* PRICE */}
            <div className="mb-6">
              <span className="text-5xl font-bold">
                ₹{plan.price}
              </span>
              <span className="text-sm ml-2 opacity-80">
                {plan.duration}
              </span>
            </div>

            {/* FEATURES */}
            <ul className="space-y-3 mb-8 text-sm">
              {plan.features?.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-4" />
                  {f}
                </li>
              ))}
            </ul>

            {/* BUTTON */}
            <button
              onClick={() => {
                window.open(
                  `https://wa.me/917836909669?text=Hi, I'm interested in ${plan.name} plan`,
                  "_blank"
                );
              }}
              className={`w-full py-3 rounded-lg font-bold transition ${
                plan.popular
                  ? "border border-white bg-transparent hover:bg-black"
                  : "bg-red-500 hover:bg-red-600 shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              }`}
            >
              GET STARTED
            </button>

          </motion.div>
        ))}

      </div>
    </section>
  );
}