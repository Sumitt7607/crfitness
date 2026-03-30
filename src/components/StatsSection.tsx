import SectionWrapper from "./SectionWrapper";
import AnimatedCounter from "./AnimatedCounter";
import { Dumbbell, Users, Trophy, Clock } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, end: 5000, suffix: "+", label: "Active Members" },
  { icon: Dumbbell, end: 150, suffix: "+", label: "Equipment Pieces" },
  { icon: Trophy, end: 12, label: "Years Experience" },
  { icon: Clock, end: 7, suffix: " Days", label: "Open Every Week" },
];

const StatsSection = () => {
  return (
    <SectionWrapper className="bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          className="h-full bg-gradient-primary"
          animate={{ scaleX: [0, 1, 0], originX: [0, 0, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              </motion.div>
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              <p className="text-muted-foreground uppercase tracking-wider text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default StatsSection;
