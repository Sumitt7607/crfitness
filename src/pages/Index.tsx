import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GymTimingBanner from "@/components/GymTimingBanner";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProgramsSection from "@/components/ProgramsSection";
import FreeTrialBanner from "@/components/FreeTrialBanner";
import TrainersSection from "@/components/TrainersSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScheduleSection from "@/components/ScheduleSection";
import EquipmentSection from "@/components/EquipmentSection";
import NutritionSection from "@/components/NutritionSection";
import AchievementsSection from "@/components/AchievementsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GymTimingBanner />
      <AboutSection />
      <WhyChooseUs />
      <ProgramsSection />
      <FreeTrialBanner />
      <TrainersSection />
      <GallerySection />
      <PricingSection />
      <TestimonialsSection />
      <ScheduleSection />
      <EquipmentSection />
      <NutritionSection />
      {/* <AchievementsSection /> */}
      <FAQSection />
      <CTASection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
