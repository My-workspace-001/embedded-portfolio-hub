import { Button } from './ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'raveenpspathirana99@gmail.com',
      href: 'mailto:raveenpspathirana99@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 71 854 8420',
      href: 'tel:+94718548420',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sri Lanka',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/RaveenPramuditha',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/Raveen-Pramuditha',
    },
    {
      icon: FileText,
      label: 'Medium',
      href: 'https://medium.com/@raveenpspathirana99',
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono">05.</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-mono font-bold text-lg text-foreground mb-6">
                <span className="text-primary">{'>'}</span> Contact Information
              </h3>

              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-mono text-sm text-muted-foreground mb-4">Find me on:</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                      title={link.label}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Message CTA */}
            <div className="flex flex-col items-center justify-center p-8 rounded-xl bg-card border border-border text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse-glow">
                <Send className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-mono font-bold text-xl text-foreground mb-3">
                Let's Build Something!
              </h3>
              <p className="text-muted-foreground mb-6">
                Have an embedded systems project in mind? I'd love to hear about it.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:raveenpspathirana99@gmail.com">
                  <Mail className="w-5 h-5" />
                  Send Message
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
