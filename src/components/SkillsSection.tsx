import { Code, Cpu, Wrench, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'C/C++', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Arduino', level: 95 },
        { name: 'Verilog/VHDL', level: 75 },
        { name: 'C# / .NET', level: 70 },
        { name: 'FreeRTOS', level: 85 },
      ],
    },
    {
      icon: Cpu,
      title: 'Hardware & Platforms',
      skills: [
        { name: 'STM32', level: 90 },
        { name: 'ESP32', level: 95 },
        { name: 'Raspberry Pi', level: 90 },
        { name: 'Arduino', level: 95 },
        { name: 'FPGA', level: 70 },
        { name: 'ATmega', level: 85 },
      ],
    },
    {
      icon: Wrench,
      title: 'Software & Tools',
      skills: [
        { name: 'Altium Designer', level: 90 },
        { name: 'SolidWorks', level: 85 },
        { name: 'OpenCV', level: 85 },
        { name: 'ROS2 / Gazebo', level: 75 },
        { name: 'PlatformIO', level: 90 },
        { name: 'Quartus Prime', level: 70 },
      ],
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: [
        { name: 'Leadership', level: 90 },
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Technical Writing', level: 80 },
        { name: 'Mentoring', level: 85 },
        { name: 'Project Management', level: 80 },
      ],
    },
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-mono font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-mono text-muted-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Tags */}
        <div className="mt-12 text-center">
          <h4 className="font-mono text-sm text-muted-foreground mb-6">
            Also experienced with:
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'MQTT', 'HTTPS', 'I2C', 'SPI', 'UART', 'Bluetooth', 
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
      </div>
    </section>
  );
};

export default SkillsSection;
