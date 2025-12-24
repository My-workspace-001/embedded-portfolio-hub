import { Button } from './ui/button';
import { ChevronDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center shadow rounded-md bg-inherit">
          {/* Terminal-style intro */}
          <div className="inline-block mb-6 opacity-0 animate-fade-in-up stagger-1">
            <span className="font-mono text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border">
              <span className="text-primary">$</span> whoami
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up stagger-2">
            <span className="text-foreground">Raveen </span>
            <span className="gradient-text">Pathirana</span>
          </h1>

          {/* Title with typing effect */}
          <div className="mb-8 opacity-0 animate-fade-in-up stagger-3">
            <p className="text-xl sm:text-2xl md:text-3xl font-mono text-muted-foreground">
              <span className="text-primary">{'>'}</span> Embedded Systems
              <span className="text-secondary"> & </span>
              Robotics Engineer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up stagger-4">
            Final year undergraduate at the University of Moratuwa, specializing in 
            <span className="text-primary"> embedded systems</span>, 
            <span className="text-secondary"> IoT</span>, and 
            <span className="text-primary"> robotics</span>. 
            Building real hardware solutions with microcontrollers, sensors, and custom PCB designs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up stagger-5">
            <Button variant="hero" size="xl" onClick={scrollToProjects}>
              View My Projects
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="items-center justify-center opacity-0 animate-fade-in-up stagger-6 flex flex-row gap-[16px]">
            <a href="https://github.com/RaveenPramuditha" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/Raveen-Pramuditha" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:raveenpspathirana99@gmail.com" className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://medium.com/@raveenpspathirana99" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-6">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono">scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;