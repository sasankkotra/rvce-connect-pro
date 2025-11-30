import { Button } from "@/components/ui/button";
import { ArrowRight, Star, MessageCircle, Calendar } from "lucide-react";

const MentorshipSection = () => {
  const mentors = [
    {
      name: "Dr. Priya Sharma",
      role: "VP Engineering, Google",
      batch: "1998",
      expertise: ["AI/ML", "Leadership"],
      rating: 4.9,
      sessions: 124,
    },
    {
      name: "Rahul Menon",
      role: "Founder, TechStart Inc",
      batch: "2005",
      expertise: ["Entrepreneurship", "Product"],
      rating: 4.8,
      sessions: 89,
    },
    {
      name: "Ananya Reddy",
      role: "Senior Architect, Microsoft",
      batch: "2010",
      expertise: ["Cloud", "System Design"],
      rating: 4.9,
      sessions: 156,
    },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Mentorship Program
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learn from Industry
              <span className="text-primary"> Leaders</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Connect with experienced alumni who have walked the path you're on. 
              Get personalized guidance on career choices, skill development, and 
              navigating the professional world.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: MessageCircle, text: "1-on-1 mentoring sessions" },
                { icon: Calendar, text: "Flexible scheduling" },
                { icon: Star, text: "Verified industry experts" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Button variant="gold" size="lg">
              Find a Mentor
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Right - Mentor Cards */}
          <div className="space-y-4">
            {mentors.map((mentor, index) => (
              <div
                key={mentor.name}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center text-primary-foreground font-display text-xl font-bold">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-display font-semibold text-foreground">
                        {mentor.name}
                      </h4>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{mentor.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      {mentor.role} • Batch {mentor.batch}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      {mentor.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      <span className="text-muted-foreground text-xs ml-auto">
                        {mentor.sessions} sessions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
