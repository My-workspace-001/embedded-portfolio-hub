import { Award } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const SkillsSection = () => {
  const awards = [
    { title: 'Fifth Place - SLIIT Robofest 2024', description: 'Maze-solving micromouse robot using STM32' },
    { title: 'Finalists - IESL Robogames 2024', description: 'Kobuki Robot with Computer Vision and ML' },
    { title: 'Finalist - SLRC Robotic Challenge 2023', description: 'Computer vision based robot using Raspberry Pi' },
    { title: 'Semi Finalist - SLIoT Challenge 2023', description: 'Adaptive traffic light system with OpenCV and ML' },
    { title: 'Dean\'s List', description: 'Semester 1 and Semester 6' },
    { title: 'Finalist (Top 10) - Spark Challenge 2024', description: 'Smart Waste Management System' },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono">04.</span> Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Tech Tags */}
        <AnimatedCard delay={100}>
          <div className="text-center">
            <h4 className="font-mono text-sm text-muted-foreground mb-6">
              Technologies & Tools:
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'C++','Python','Altium','Raspberry Pi','STM32','ESP32','Arduino','OpenCV','.Net8','C#','SolidWorks','FreeRTOS','MySQL','VHDL','IoT','Networking', 
                'LoRa', 'Git', 'Linux', 'Matlab', 'LTspice', 'EasyEDA'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-mono rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Awards Section */}
        <div className="mt-16">
          <h3 className="flex items-center justify-center gap-3 text-xl font-mono font-bold text-foreground mb-8">
            <Award className="w-5 h-5 text-accent" />
            Awards & Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((award, index) => (
              <AnimatedCard key={index} delay={index * 80}>
                <div className="p-4 rounded-lg bg-gray-200 dark:bg-gray-700/70 border-2 border-accent/30 hover:border-accent hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)] transition-all duration-300 group h-full flex items-start justify-between gap-3 relative overflow-hidden border-l-4 border-l-accent shadow-[-4px_0_12px_rgba(var(--accent-rgb),0.2)]">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 rounded-bl-full"></div>
                  
                  <div className="flex-1 relative z-10">
                    <h4 className="font-mono font-semibold text-sm text-foreground group-hover:text-accent transition-colors mb-2">
                      {award.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{award.description}</p>
                  </div>
                  <Award className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300 flex-shrink-0 mt-0.5 relative z-10" />
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
