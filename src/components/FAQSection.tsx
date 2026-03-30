import SectionWrapper from "./SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  // { q: "What are your operating hours?", a: "CR Fitness is open 24/7, 365 days a year. Our staffed hours are 6 AM to 10 PM on weekdays and 8 AM to 8 PM on weekends." },
  { q: "Do you offer a free trial?", a: "Yes! We offer a 3-day free trial for all new members. No commitment required. Just bring your ID and you're good to go." },
  { q: "What's included in the membership?", a: "All memberships include full gym access, locker rooms, and WiFi. Premium and Elite plans include group classes, personal training, and additional amenities." },
  { q: "Can I freeze my membership?", a: "Absolutely. You can freeze your membership for up to 3 months per year at no additional cost. Just speak to our front desk team." },
  { q: "Do you have personal trainers?", a: "Yes, we have 20+ certified personal trainers specializing in strength, conditioning, weight loss, bodybuilding, and sport-specific training." },
  { q: "Is there parking available?", a: "Yes, we offer free parking for all members with over 100 spots available at our facility." },
];

const FAQSection = () => {
  return (
    <SectionWrapper className="bg-gradient-dark">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">FAQ</p>
          <h2 className="text-4xl md:text-6xl font-heading">
            GOT <span className="text-gradient-primary">QUESTIONS?</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-lg px-6 border-0">
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
