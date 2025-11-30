import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MentorshipSection from "@/components/MentorshipSection";
import JobsSection from "@/components/JobsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <MentorshipSection />
        <JobsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
