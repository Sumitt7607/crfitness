import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import gymInterior from "@/assets/gym-interior.jpg";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-gradient-dark-reverse">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Our Story</p>
            <h2 className="text-4xl md:text-6xl font-heading mb-6">
              MORE THAN A <span className="text-gradient-primary">GYM</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded with a vision to create the ultimate fitness experience, CR Fitness has been transforming lives
              for over 12 years. Our state-of-the-art facility combines cutting-edge equipment with expert coaching
              to help you achieve results you never thought possible.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We believe fitness is a lifestyle, not a destination. From first-timers to competitive athletes,
              CR Fitness is your home for growth, strength, and community.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-3xl font-heading text-gradient-primary">98%</p>
                <p className="text-sm text-muted-foreground">Member Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-heading text-gradient-primary">7 Days</p>
                <p className="text-sm text-muted-foreground">Open Every Week</p>
              </div>
              {/* <div>
                <p className="text-3xl font-heading text-gradient-primary">17 Hrs</p>
                <p className="text-sm text-muted-foreground">Daily Access</p>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={gymInterior}
              alt="CR Fitness interior"
              className="rounded-lg w-full object-cover aspect-square"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-lg border border-primary/20" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg border border-primary/10 -z-10" />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
