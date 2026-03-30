import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Shield, Clock, Dumbbell, Heart, Zap, Users } from "lucide-react";

const features = [
  { icon: Clock, title: "Open 7 Days", desc: "Train every day of the week. 5:00 AM to 10:00 PM — morning or evening, we're here for you." },
  { icon: Shield, title: "Certified Trainers", desc: "Every trainer is nationally certified with years of experience." },
  { icon: Dumbbell, title: "Modern Equipment", desc: "Top-tier machines from leading brands for every workout style." },
  { icon: Heart, title: "Personal Training", desc: "1-on-1 coaching tailored to your goals and body type." },
  { icon: Zap, title: "Yoga, Zumba & Aerobics", desc: "Energizing classes Monday to Friday — morning and evening batches." },
  { icon: Users, title: "Strong Community", desc: "Join a tribe of motivated fitness enthusiasts pushing each other forward." },
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper className="bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-neon-red/5 blur-3xl animate-breathe" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-neon-red/3 blur-3xl animate-breathe" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto text-center relative z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Why CR Fitness</p>
        <h2 className="text-4xl md:text-6xl font-heading mb-16">
          WHY <span className="text-gradient-primary">CHOOSE</span> US
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass rounded-xl p-8 text-left group relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <f.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
