import { Users, Briefcase, GraduationCap, Network, Shield, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Alumni Directory",
      description: "Search and connect with 42,000+ alumni across industries and locations worldwide.",
    },
    {
      icon: Network,
      title: "Mentorship Program",
      description: "Get guidance from experienced alumni or give back by mentoring current students.",
    },
    {
      icon: Briefcase,
      title: "Job Board",
      description: "Exclusive job postings from alumni-led companies and partner organizations.",
    },
    {
      icon: GraduationCap,
      title: "Academic Records",
      description: "Maintain comprehensive academic history, achievements, and certifications.",
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Role-based access ensuring data privacy for all users in the network.",
    },
    {
      icon: Globe,
      title: "Global Events",
      description: "Stay connected through alumni meetups, webinars, and networking events.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="text-primary"> Stay Connected</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A comprehensive platform designed to foster lifelong connections 
            between RVCE alumni and current students.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
