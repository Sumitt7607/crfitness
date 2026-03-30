import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, Medal, Trophy } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Best Gym 2025", desc: "Voted #1 fitness facility in the tri-state area by Fitness Magazine." },
  { icon: Award, title: "ISO Certified", desc: "Internationally certified for safety, hygiene, and service standards." },
  { icon: Medal, title: "500+ Transformations", desc: "Over 500 documented body transformations achieved by our members." },
];

const AchievementsSection = () => {
  return (
    <SectionWrapper className="bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Our Pride</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            ACHIEVEMENTS & <span className="text-gradient-primary">AWARDS</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <a.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-heading mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
