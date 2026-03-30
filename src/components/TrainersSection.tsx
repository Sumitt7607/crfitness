import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import { Instagram } from "lucide-react";

const trainers = [
  { name: "Marcus Cole", role: "Head Strength Coach", image: trainer1, specialty: "Powerlifting & Olympic Lifts" },
  { name: "Sarah Rivera", role: "HIIT & Boxing Coach", image: trainer2, specialty: "Fat Loss & Conditioning" },
  { name: "Jake Mitchell", role: "Functional Training", image: trainer3, specialty: "Athletic Performance" },
];

const TrainersSection = () => {
  return (
    <SectionWrapper id="trainers" className="bg-gradient-dark-reverse relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Expert Coaches</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            MEET YOUR <span className="text-gradient-primary">TRAINERS</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <motion.img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Animated border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500"
              />

              {/* Pulsing status dot */}
              <motion.div
                className="absolute top-4 left-4 w-3 h-3 rounded-full bg-green-500"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="absolute top-3.5 left-9 text-xs text-green-400 font-medium">Available</span>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-heading">{t.name}</h3>
                <p className="text-primary text-sm font-semibold uppercase tracking-wider">{t.role}</p>
                <p className="text-muted-foreground text-sm mt-1">{t.specialty}</p>
              </div>
              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center cursor-pointer hover:bg-primary/20">
                  <Instagram className="w-5 h-5" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TrainersSection;
