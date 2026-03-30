import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "YOGA & MOBILITY",
    desc: "Improve flexibility, recovery, and mental clarity.",
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3",
  },
  {
    title: "ZUMBA",
    desc: "Burn calories with fun, energetic dance workouts.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
  {
    title: "AEROBICS",
    desc: "Boost stamina and heart health with rhythmic exercises.",
    image: "https://i.pinimg.com/736x/be/03/4c/be034c0e78fe1ce606f60d6374c44937.jpg",
  },
];

const ProgramsSection = () => {
  const handleWhatsApp = (programTitle) => {
    const phoneNumber = "917836909669";
    const message = `Hello, I'm interested in your ${programTitle} program. Please share details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <SectionWrapper
      id="programs"
      className="bg-gradient-dark-reverse relative overflow-hidden"
    >
      {/* Decoration */}
      <motion.div
        className="absolute -right-20 top-20 w-40 h-40 rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -left-10 bottom-20 w-28 h-28 rounded-full border border-neon-blue/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Our Programs
          </p>
          <h2 className="text-4xl md:text-6xl font-heading">
            FIND YOUR{" "}
            <span className="text-gradient-primary">PROGRAM</span>
          </h2>
        </div>

        {/* CENTERED CARDS */}
        <div className="flex flex-wrap justify-center gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="w-full md:w-[45%] lg:w-[300px] relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer"
            >
              <motion.img
                src={`${p.image}?auto=format&fit=crop&w=800&q=80`}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <motion.div
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-primary/40"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-heading mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {p.desc}
                </p>

                <motion.span
                  onClick={() => handleWhatsApp(p.title)}
                  className="text-primary text-sm font-medium inline-flex items-center gap-1 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Explore Now <ArrowRight className="w-4 h-4" />
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProgramsSection;