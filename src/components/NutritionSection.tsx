import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Apple, Salad, Droplets, Flame } from "lucide-react";

const tips = [
  { icon: Apple, title: "Balanced Diet", desc: "Fuel your body with the right macros — protein, carbs, and healthy fats tailored to your goals." },
  { icon: Salad, title: "Meal Planning", desc: "Our nutrition experts create personalized meal plans to complement your training regimen." },
  { icon: Droplets, title: "Hydration", desc: "Stay hydrated with our recommended water intake protocols for optimal performance." },
  { icon: Flame, title: "Supplements", desc: "Science-backed supplement guidance to enhance recovery and maximize your gains." },
];

const NutritionSection = () => {
  return (
    <SectionWrapper className="bg-gradient-dark-reverse">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Fuel Your Body</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            NUTRITION <span className="text-gradient-primary">GUIDANCE</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center group hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <tip.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-heading text-xl mb-2">{tip.title}</h3>
              <p className="text-muted-foreground text-sm">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NutritionSection;
