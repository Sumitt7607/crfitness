import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        reviews.length ? (prev + 1) % reviews.length : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews]);

  if (!reviews.length) return null;

  return (
    <section className="bg-black text-white py-24">

      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          What People  <span className="text-red-500">Say</span>
        </h2>
      </div>

      <div className="flex justify-center">

        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl bg-white/5 p-8 rounded-xl border border-white/10 text-center"
        >
          <p className="text-lg mb-4 italic">
            "{reviews[index].message}"
          </p>

          <h3 className="text-red-500 font-bold">
            - {reviews[index].name}
          </h3>
        </motion.div>

      </div>
    </section>
  );
}