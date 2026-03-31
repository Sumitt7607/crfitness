import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="bg-gradient-dark-reverse">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            CONTACT <span className="text-gradient-primary">US</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address", value: "Sec-86 opposite SRS Royal Hills - Faridabad(HR)" },
                { icon: Phone, label: "Phone", value: "+91 78369 09669" },
                { icon: Mail, label: "Email", value: "crfitness93@gmail.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            action="https://formsubmit.co/crfitness93@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full glass rounded-lg px-5 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full glass rounded-lg px-5 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full glass rounded-lg px-5 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full glass rounded-lg px-5 py-4 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              required
            />

            {/* Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Contact Form Lead 🚀" />
            <input type="hidden" name="_template" value="table" />

            <Button variant="hero" size="lg" className="w-full py-6" type="submit">
              Send Message
            </Button>
          </motion.form>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;