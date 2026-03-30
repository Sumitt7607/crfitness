import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import gymInterior from "@/assets/gym-interior.jpg";
import strengthImg from "@/assets/program-strength.jpg";
import cardioImg from "@/assets/program-cardio.jpg";
import bodyImg from "@/assets/program-bodybuilding.jpg";
import yogaImg from "@/assets/program-yoga.jpg";
import heroImg from "@/assets/hero-gym.jpg";

const images = [gymInterior, strengthImg, cardioImg, bodyImg, yogaImg, heroImg];

const GallerySection = () => {
  return (
    <SectionWrapper className="bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Our Facility</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            WORKOUT <span className="text-gradient-primary">GALLERY</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`overflow-hidden rounded-lg group cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img}
                alt="CR Fitness gallery"
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;
