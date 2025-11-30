import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: "Alumni Directory", href: "/directory" },
      { name: "Mentorship", href: "/mentorship" },
      { name: "Job Board", href: "/jobs" },
      { name: "Events", href: "/events" },
    ],
    Resources: [
      { name: "Help Center", href: "/help" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Contact Us", href: "/contact" },
    ],
    College: [
      { name: "RVCE Website", href: "https://rvce.edu.in" },
      { name: "Admissions", href: "/admissions" },
      { name: "Placements", href: "/placements" },
      { name: "Research", href: "/research" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-navy-dark" />
              </div>
              <div>
                <span className="font-display font-bold text-xl">RVCE Alumni</span>
                <p className="text-primary-foreground/60 text-sm">Stay Connected Forever</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Building bridges between generations of RVCE excellence. 
              Connect, mentor, and grow together.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                RV Vidyanikethan Post, Mysuru Road, Bangalore - 560059
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                +91 80 6817 8021
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                alumni@rvce.edu.in
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-primary-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} RVCE Alumni Association. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-primary-foreground/5 flex items-center justify-center hover:bg-accent hover:text-navy-dark transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
