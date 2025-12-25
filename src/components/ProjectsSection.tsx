import ProjectCard from './ProjectCard';
import AnimatedCard from './AnimatedCard';
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const pcbDesigns = [
    { id: 1, name: 'PCB 1' },
    { id: 2, name: 'PCB 2' },
    { id: 3, name: 'PCB 3' },
    { id: 4, name: 'PCB 4' },
    { id: 5, name: 'PCB 5' },
    { id: 6, name: 'PCB 6' },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: 'Meshtastic Network Optimization',
      description: 'Optimizing LoRa mesh networks for post-disaster communication. Evaluating network reliability, latency, and scalability while implementing custom routing algorithms by modifying Meshtastic firmware.',
      technologies: ['C++', 'ESP32', 'FreeRTOS', 'PlatformIO', 'LoRa'],
      featured: true,
      ongoing: true,
      image: '/meshtastic.webp',
      github: 'https://github.com/orgs/Meshtastic-DM/repositories',
    },
    {
      title: 'EcoWatt - IoT Inverter Data Logger',
      description: 'Secure embedded IoT device that polls inverter data, applies compression and encryption, then uploads to server at 15-minute intervals via MQTT/HTTPS.',
      technologies: ['C++', 'ESP32', 'FreeRTOS', 'MQTT', 'React'],
      featured: true,
      image: '/esp32.webp',
      github: 'https://github.com/RPX2001/EcoWatt_TeamPowerPort.git',
    },
    {
      title: 'Drone Mounted Noise Cancelling Device',
      description: 'Designing a drone-mounted audio communication system to enable clear one-way communication in high-noise environments using advanced signal processing.',
      technologies: ['C', 'C++', 'STM32', 'Raspberry Pi', 'DSP', 'Matlab'],
      ongoing: true,
      image: '/drone.webp',
      github:'https://github.com/RPX2001/Drone-Speaker-System.git'
    },
    {
      title: 'Micromouse Maze-Solving Robot',
      description: 'Implemented Flood-Fill algorithm for efficient maze-solving with optimized path planning. Integrated PID control with encoders and IMU for precise movement.',
      technologies: ['STM32', 'C++', 'CubeIDE', 'Altium'],
      featured: true,
      image: '/mm.webp',
      github: 'https://github.com/neocodered/Quanta_micromouse.git',
    },
    {
      title: 'Computer Vision Robot',
      description: 'Raspberry Pi-based robot with line following and color detection using OpenCV. Integrated PID controller for high precision path following.',
      technologies: ['Python', 'OpenCV', 'Raspberry Pi', 'Solidworks'],
      image: '/slrc.webp',
      github: 'https://github.com/NidulaGunawardana/SLRC.git',
    },
    {
      title: 'Inventory Management System - Intern Project',
      description: 'Enterprise inventory system using .NET 8 and Blazor with Raspberry Pi. Features role-based auth, local backup/recovery with automatic sync.',
      technologies: ['.NET8', 'C#', 'Blazor', 'MySQL', 'Raspberry Pi'],
      image: '/inv.webp',
    },
    {
      title: '3D Scanner',
      description: 'Built a 3D scanner using stepper motors and ToF sensor to capture point cloud data. Implemented custom libraries for UART, I2C at register level.',
      technologies: ['C++', 'Atmel Studio', 'Altium', 'Python'],
      image: '/scanner.webp',
      github: 'https://github.com/RPX2001/3D-Scanner.git',
    },
    {
      title: 'Analog Voltmeter',
      description: 'Analog voltmeter using Opamps and analog components. Designed PCB in Altium and calibrated for high accuracy measurements.',
      technologies: ['Altium', 'NI Multisim', 'LT Spice'],
      image: '/voltmenter.webp',
      github: 'https://github.com/RPX2001/AnalogVoltmeter.git',
    },
    {
      title: '5 DoF Robot Arm',
      description: 'Designed and built a 5 DoF robotic arm using servo motors controlled by an Arduino. Implemented inverse kinematics for precise positioning and movement.',
      technologies: ['Arduino', 'Matlab','C++'],
      image: '/roboarm.webp',
      github: 'https://github.com/neocodered/5dof_robotarm.git',
    },
    {
      title: 'UART Transceiver on FPGA',
      description: 'Implemented complete UART transceiver in Verilog with transmitter, receiver modules and comprehensive testbench for simulation.',
      technologies: ['Verilog', 'VHDL', 'Quartus Prime', 'FPGA'],
      image: '/fpga.webp',
      github: 'https://github.com/RPX2001/UART-transreceiver-Implementation-Using-FPGA.git',
    },
    {
      title: 'Automatic MCQ Grader',
      description: 'Computer vision system to detect and analyze student responses by identifying darkened bubbles on answer sheets with high accuracy.',
      technologies: ['Python', 'OpenCV', 'Image Processing'],
      image: '/mcq.webp',
      github: 'https://github.com/SamudraUduwaka/Automatic-MCQ-Grader.git',
    },
    // {
    //   title: 'Smart Traffic Light System',
    //   description: 'Designed and built a 5 DoF robotic arm using servo motors controlled by an Arduino. Implemented inverse kinematics for precise positioning and movement.',
    //   technologies: ['Arduino', 'Matlab','C++'],
    //   image: '/roboarm.webp',
    //   github: 'https://github.com/neocodered/5dof_robotarm.git',
    // },
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

        {/* PCB Gallery */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-mono font-bold text-foreground mb-6">
              <span className="text-primary">{'<'}</span>
              PCB Designs
              <span className="text-primary">{' />'}</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Custom PCB designs created for various projects using Altium Designer
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-7xl mx-auto px-4">
            {/* Navigation Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-2 md:-translate-x-4 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-2 md:translate-x-4 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-4 md:gap-6">
                {pcbDesigns.map((pcb, index) => (
                  <div
                    key={pcb.id}
                    className="flex-shrink-0 w-64 md:w-72"
                  >
                    <div className="rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg">
                      {/* 2D PCB Design */}
                      <div className="relative aspect-[4/3] border-b border-border overflow-hidden">
                        <img 
                          src={`/pcb${pcb.id}-pcb.webp`} 
                          alt={`${pcb.name} 2D Design`}
                          className="w-full h-full object-contain bg-gradient-to-br from-primary/5 to-accent/5 p-2"
                        />
                        <div className="absolute top-2 left-2 px-2 py-1 bg-primary/90 rounded text-xs font-mono text-primary-foreground backdrop-blur-sm">
                          {pcb.name} - 2D
                        </div>
                      </div>
                      {/* 3D View */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={`/pcb${pcb.id}-3D.webp`} 
                          alt={`${pcb.name} 3D View`}
                          className="w-full h-full object-contain bg-gradient-to-br from-accent/5 to-primary/5 p-2"
                        />
                        <div className="absolute top-2 left-2 px-2 py-1 bg-accent/90 rounded text-xs font-mono text-accent-foreground backdrop-blur-sm">
                          3D View
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <p className="text-sm text-muted-foreground mt-6 text-center italic">
            Scroll horizontally to view more PCB designs
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
