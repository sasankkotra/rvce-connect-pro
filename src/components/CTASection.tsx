import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Access to 50,000+ alumni network",
    "Exclusive job opportunities",
    "Free mentorship sessions",
    "Global events & meetups",
  ];

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Join the RVCE
          <span className="text-gradient-gold"> Alumni Family?</span>
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
          Whether you're a recent graduate or a seasoned professional, 
          there's a place for you in our thriving community.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20"
            >
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            Register as Alumni
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="hero-outline" size="xl">
            I'm a Current Student
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
