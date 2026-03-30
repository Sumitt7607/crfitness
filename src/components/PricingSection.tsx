import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 0,
    period: "/month",
    features: ["Gym Access (5 AM – 10 PM)", "Locker Room", "Free WiFi", "Basic Equipment"],
    popular: false,
  },
  {
    name: "Premium",
    price: 0,
    period: "/month",
    features: ["Everything in Basic", "Yoga, Zumba & Aerobics Classes", "Personal Training (2x/mo)", "Sauna & Steam", "Nutrition Plan"],
    popular: true,
  },
  {
    name: "Elite",
    price: 0,
    period: "/month",
    features: ["Everything in Premium", "Unlimited PT Sessions", "Body Composition Analysis", "Recovery Zone", "Priority Booking", "Guest Passes"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <SectionWrapper id="pricing" className="bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl animate-breathe" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Membership Plans</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            CHOOSE YOUR <span className="text-gradient-primary">PLAN</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`rounded-xl p-8 relative ${
                plan.popular
                  ? "bg-gradient-primary border-0 text-primary-foreground"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-primary text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Most Popular
                  </div>
                  <motion.div
                    className="absolute top-6 right-6"
                    animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Sparkles className="w-5 h-5 text-primary-foreground/60" />
                  </motion.div>
                </>
              )}
              <h3 className="text-2xl font-heading mb-2">{plan.name}</h3>
              <div className="mb-6">
                <motion.span
                  className="text-5xl font-heading"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                >
                  ₹{plan.price}
                </motion.span>
                <span className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 + 0.3 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <Check className="w-4 h-4 shrink-0" />
                    {f}
                  </motion.li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "heroOutline" : "hero"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;
