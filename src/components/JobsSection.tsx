import { Button } from "@/components/ui/button";
import { MapPin, Clock, Building2, ArrowRight, Bookmark } from "lucide-react";

const JobsSection = () => {
  const jobs = [
    {
      title: "Senior Software Engineer",
      company: "Infosys",
      location: "Bangalore",
      type: "Full-time",
      salary: "₹25-35 LPA",
      posted: "2 days ago",
      tags: ["React", "Node.js", "AWS"],
      alumni: true,
    },
    {
      title: "Product Manager",
      company: "Flipkart",
      location: "Bangalore",
      type: "Full-time",
      salary: "₹30-45 LPA",
      posted: "5 days ago",
      tags: ["Strategy", "Analytics", "Agile"],
      alumni: true,
    },
    {
      title: "Data Scientist",
      company: "Amazon",
      location: "Hyderabad",
      type: "Full-time",
      salary: "₹28-40 LPA",
      posted: "1 week ago",
      tags: ["Python", "ML", "SQL"],
      alumni: false,
    },
    {
      title: "DevOps Engineer",
      company: "Microsoft",
      location: "Remote",
      type: "Full-time",
      salary: "₹20-30 LPA",
      posted: "3 days ago",
      tags: ["Kubernetes", "CI/CD", "Azure"],
      alumni: true,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Job Board
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Latest Opportunities
            </h2>
          </div>
          <Button variant="outline" className="mt-4 sm:mt-0">
            View All Jobs
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div
              key={`${job.title}-${job.company}`}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <span>{job.company}</span>
                      {job.alumni && (
                        <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">
                          Alumni Referral
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <Bookmark className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.type}
                </div>
                <span className="font-medium text-foreground">{job.salary}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{job.posted}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
