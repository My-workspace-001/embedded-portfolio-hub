import ProjectCard from './ProjectCard';
import AnimatedCard from './AnimatedCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Meshtastic Network Optimization',
      description: 'Optimizing LoRa mesh networks for post-disaster communication. Evaluating network reliability, latency, and scalability while implementing custom routing algorithms by modifying Meshtastic firmware.',
      technologies: ['C++', 'ESP32', 'FreeRTOS', 'PlatformIO', 'LoRa'],
      featured: true,
      ongoing: true,
    },
    {
      title: 'EcoWatt - IoT Inverter Data Logger',
      description: 'Secure embedded IoT device that polls inverter data, applies compression and encryption, then uploads to server at 15-minute intervals via MQTT/HTTPS.',
      technologies: ['C++', 'ESP32', 'FreeRTOS', 'MQTT', 'React'],
      featured: true,
    },
    {
      title: 'Drone Mounted Noise Cancelling Device',
      description: 'Designing a drone-mounted audio communication system to enable clear one-way communication in high-noise environments using advanced signal processing.',
      technologies: ['C', 'C++', 'STM32', 'Raspberry Pi', 'DSP', 'Matlab'],
      ongoing: true,
    },
    {
      title: 'Micromouse Maze-Solving Robot',
      description: 'Implemented Flood-Fill algorithm for efficient maze-solving with optimized path planning. Integrated PID control with encoders and IMU for precise movement.',
      technologies: ['STM32', 'C++', 'CubeIDE', 'Altium'],
      featured: true,
    },
    {
      title: 'Computer Vision Robot',
      description: 'Raspberry Pi-based robot with line following and color detection using OpenCV. Integrated PID controller for high precision path following.',
      technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'Solidworks'],
    },
    {
      title: '3D Scanner',
      description: 'Built a 3D scanner using stepper motors and ToF sensor to capture point cloud data. Implemented custom libraries for UART, I2C at register level.',
      technologies: ['C++', 'Atmel Studio', 'Altium', 'Python'],
    },
    {
      title: 'Inventory Management System',
      description: 'Enterprise inventory system using .NET 8 and Blazor with Raspberry Pi. Features role-based auth, local backup/recovery with automatic sync.',
      technologies: ['.NET8', 'C#', 'Blazor', 'MySQL', 'Raspberry Pi'],
    },
    {
      title: 'UART Transceiver on FPGA',
      description: 'Implemented complete UART transceiver in Verilog with transmitter, receiver modules and comprehensive testbench for simulation.',
      technologies: ['Verilog', 'VHDL', 'Quartus Prime', 'FPGA'],
    },
    {
      title: 'Automatic MCQ Grader',
      description: 'Computer vision system to detect and analyze student responses by identifying darkened bubbles on answer sheets with high accuracy.',
      technologies: ['Python', 'OpenCV', 'Image Processing'],
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono">02.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of embedded systems, robotics, and IoT projects I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 80}>
              <ProjectCard {...project} />
            </AnimatedCard>
          ))}
        </div>

        {/* PCB Gallery Placeholder */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-mono font-bold text-foreground mb-6">
            <span className="text-primary">{'<'}</span>
            PCB Designs
            <span className="text-primary">{' />'}</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Custom PCB designs created for various projects using Altium Designer
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <AnimatedCard key={i} delay={i * 100}>
                <div className="aspect-square rounded-xl bg-card border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <span className="text-muted-foreground font-mono text-sm">
                      PCB {i}
                    </span>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 italic">
            Add your PCB images to showcase your hardware designs
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
