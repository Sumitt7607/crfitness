import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const GymTimingBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-6 bg-primary overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-4 flex items-center justify-center gap-6 relative z-10">
        <Clock className="w-6 h-6 text-primary-foreground" />
        <p className="text-lg md:text-xl font-heading text-primary-foreground tracking-wider uppercase">
          Open 7 Days &nbsp;|&nbsp; 5:00 AM – 10:00 PM
        </p>
      </div>
    </motion.section>
  );
};

export default GymTimingBanner;
