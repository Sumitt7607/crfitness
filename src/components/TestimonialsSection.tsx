import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Kramer",
    text: "CR Fitness completely changed my life. I lost 30kg in 8 months with the help of their incredible trainers. Best decision I ever made.",
    rating: 5,
    result: "Lost 30kg",
  },
  {
    name: "Priya Patel",
    text: "The community here is unreal. Everyone pushes you to be better. The group classes are addictive and the trainers know exactly how to motivate you.",
    rating: 5,
    result: "Marathon Ready",
  },
  {
    name: "Alex Thompson",
    text: "From skinny to strong. The personal training program at CR Fitness gave me the structure and accountability I needed. Gained 15kg of muscle in one year.",
    rating: 5,
    result: "Gained 15kg Muscle",
  },
];

const TestimonialsSection = () => {
  return (
    <SectionWrapper className="bg-gradient-dark relative overflow-hidden">
      {/* Drifting accent */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-neon-orange/5 blur-3xl rounded-full animate-drift" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            REAL <span className="text-gradient-primary">RESULTS</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6, borderColor: "hsl(4 90% 55% / 0.3)" }}
              className="glass rounded-xl p-8 relative overflow-hidden"
            >
              {/* Animated quote mark */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 0.5 }}
              >
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
              </motion.div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t.text}</p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.1 + 0.3 }}
                  >
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-primary text-sm font-semibold">{t.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
