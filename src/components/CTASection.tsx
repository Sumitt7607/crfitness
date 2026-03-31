import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FloatingParticles from "./FloatingParticles";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(0_0%_0%/0.5)_100%)]" />
      <FloatingParticles />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary-foreground/10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto text-center px-4"
      >
        <motion.h2
          className="text-4xl md:text-7xl font-heading mb-4"
          animate={{ textShadow: ["0 0 20px rgba(255,255,255,0)", "0 0 40px rgba(255,255,255,0.3)", "0 0 20px rgba(255,255,255,0)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          NOW OR NEVER
        </motion.h2>
        <p className="text-xl md:text-2xl font-accent text-primary-foreground/90 mb-2 uppercase tracking-wider">
          Walk in Strong, Walk out Stronger
        </p>
        <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
          Limited slots available. Join CR Fitness and transform your body, mind, and lifestyle. Visit us today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
         <Button
  size="lg"
  className="text-lg px-10 py-6 bg-background text-foreground hover:bg-background/90 font-semibold uppercase tracking-wider"
  asChild
>
  <a
    href="https://wa.me/917836909669?text=Hello!%20I%20want%20to%20join%20your%20program"
    target="_blank"
    rel="noopener noreferrer"
  >
    Join Now
  </a>
</Button>
          {/* <Button variant="heroOutline" size="lg" className="text-lg px-10 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            Start Today
          </Button> */}
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
