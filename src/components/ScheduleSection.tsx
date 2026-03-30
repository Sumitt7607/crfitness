import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const classes = [
  {
    name: "Yoga",
    desc: "Improve flexibility, balance, and inner peace.",
    morning: "6:00 AM – 7:00 AM",
    evening: "6:00 PM – 7:00 PM",
  },
  {
    name: "Zumba",
    desc: "Dance your way to fitness with high-energy moves.",
    morning: "7:00 AM – 8:00 AM",
    evening: "7:00 PM – 8:00 PM",
  },
  {
    name: "Aerobics",
    desc: "Boost stamina and burn calories with rhythmic exercises.",
    morning: "8:00 AM – 9:00 AM",
    evening: "8:00 PM – 9:00 PM",
  },
];

const ScheduleSection = () => {
  return (
    <SectionWrapper id="schedule" className="bg-gradient-dark-reverse">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Our Classes</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            CLASS <span className="text-gradient-primary">SCHEDULE</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Monday to Friday &nbsp;•&nbsp; 1 Hour Morning + 1 Hour Evening
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass rounded-xl p-8 text-center group relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-primary"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
              <h3 className="text-3xl font-heading text-gradient-primary mb-2">{cls.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{cls.desc}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">Morning:</span>
                  <span className="text-muted-foreground">{cls.morning}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">Evening:</span>
                  <span className="text-muted-foreground">{cls.evening}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/60 mt-4 uppercase tracking-wider">Mon – Fri</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ScheduleSection;
