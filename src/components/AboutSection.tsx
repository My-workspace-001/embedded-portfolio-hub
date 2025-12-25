import { Cpu, CircuitBoard, Wifi, Code } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
const AboutSection = () => {
  const highlights = [{
    icon: Cpu,
    title: 'Embedded Systems',
    description: 'STM32, ESP32, Raspberry Pi, Arduino with hands-on firmware development'
  }, {
    icon: CircuitBoard,
    title: 'PCB Design',
    description: 'Altium Designer, EasyEDA for professional circuit board design'
  }, {
    icon: Wifi,
    title: 'IoT & Networking',
    description: 'LoRa, MQTT, HTTP/HTTPS protocols for connected devices'
  }, {
    icon: Code,
    title: 'Software Dev',
    description: 'C/C++, Python, FreeRTOS, Computer Vision with OpenCV'
  }];
  return <section id="about" className="py-24 relative overflow-hidden">
      {/* PCB Background Image with High Transparency */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/pcb-background.jpg')] bg-cover bg-center bg-no-repeat" 
             style={{
               backgroundImage: "url('/pcb_background.webp')",
               filter: 'grayscale(80%) contrast(1.2)'
             }} 
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono">01.</span> About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Text Content - Centered */}
          <AnimatedCard>
            <div className="text-center space-y-6 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Electronics Engineering undergraduate with a focus on building 
                <span className="text-[#0f1729]"> real-world hardware solutions</span>. 
                Currently in my final year at the 
                <span className="text-foreground font-medium"> University of Moratuwa</span>, 
                Department of Electronic and Telecommunication Engineering.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans from low level embedded firmware to complete IoT systems. 
                I enjoy the challenge of integrating hardware and software to create 
                <span className="text-[#0f1729]"> efficient, reliable solutions</span> 
                for real world problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not debugging hardware or writing firmware, you'll find me 
                participating in robotics competitions, conducting workshops, or 
                exploring new technologies in the maker community.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto">
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">3.71</div>
                  <div className="text-sm text-muted-foreground font-mono">GPA</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-3xl font-bold mb-1 text-[#0284c5]">10+</div>
                  <div className="text-sm text-muted-foreground font-mono">Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground font-mono">Awards</div>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Highlights Grid - Below text */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => <AnimatedCard key={item.title} delay={index * 100}>
                <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-mono font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;