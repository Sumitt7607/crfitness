import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Dumbbell, Bike, Waves, Zap as ZapIcon } from "lucide-react";

const equipment = [
  { icon: Dumbbell, title: "Free Weights Zone", desc: "Hammer Strength, Rogue barbells, dumbbells up to 150lbs, and Olympic platforms." },
  { icon: Bike, title: "Cardio Deck", desc: "50+ machines including Assault Bikes, Concept2 rowers, treadmills, and stair climbers." },
  { icon: Waves, title: "Recovery Suite", desc: "Infrared sauna, cold plunge, foam rolling area, and massage guns." },
  { icon: ZapIcon, title: "Functional Area", desc: "Battle ropes, kettlebells, TRX, sleds, and turf for athletic training." },
];

const EquipmentSection = () => {
  return (
    <SectionWrapper className="bg-gradient-dark-reverse">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">World-Class Facilities</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            OUR <span className="text-gradient-primary">EQUIPMENT</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {equipment.map((eq, i) => (
            <motion.div
              key={eq.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-8 flex gap-5 group hover:border-primary/20 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <eq.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading mb-2">{eq.title}</h3>
                <p className="text-muted-foreground text-sm">{eq.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EquipmentSection;
