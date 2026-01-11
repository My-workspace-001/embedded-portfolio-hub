import { Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Inplant Trainee - Internship',
      company: 'Variosystems',
      period: 'Dec 2024 - June 2025',
      description: 'Industrial internship focused on embedded systems and manufacturing processes.',
      website: 'https://www.variosystems.com',
    },
    {
      type: 'work',
      title: 'Mentor Level 2',
      company: 'RoboticGen Academy',
      period: 'Feb 2025 - Present',
      description: 'Mentoring students to build Robotics, Programming and AI projects.',
      website: 'https://www.roboticgen.co',
    },
    {
      type: 'work',
      title: 'PCB and Electronic Circuit Designer',
      company: 'RoboticGen Labs',
      period: 'Sep 2025 - Present',
      description: 'Designing PCBs and Electronic circuits for Embedded systems projects.',
      website: 'https://roboticgenlabs.com/',
    },
    {
      type: 'work',
      title: 'Research Assistant',
      company: 'Qubebots - Xfly Nano-drone Platform',
      period: 'Dec 2023 - Sep 2024',
      description: 'Research and development on nano-drone platform with focus on embedded systems.',
      website: 'https://www.qubebots.com',
    },
  ];

  const education = [
    {
      degree: 'B.Sc. Electronic & Telecommunication Engineering',
      institution: 'University of Moratuwa',
      period: 'Aug 2022 - Present',
      // details: 'GPA: 3.71 | Dean\'s List Semester 1 & 6',
      focus: 'Electronics, Embedded Systems, Robotics, IoT, Computer Vision',
    },
    {
      degree: 'Secondary Education - GCE Advanced Level',
      institution: 'Rahula College, Matara',
      period: '2007 - 2020',
      details: 'Z Score: 2.5233',
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono">02.</span> Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-mono font-bold text-foreground mb-8">
              <Briefcase className="w-5 h-5 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <AnimatedCard key={index} delay={index * 100}>
                  <div className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors">
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                    <div className="bg-card p-5 rounded-lg border border-border hover:border-primary/40 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-mono font-semibold text-foreground">{exp.title}</h4>
                        <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-sm text-primary">{exp.company}</p>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-primary/70 border border-primary/30 hover:border-primary/50 rounded px-2 py-1 transition-all"
                          >
                            Visit Site
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-mono font-bold text-foreground mb-8">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <AnimatedCard key={index} delay={index * 100}>
                  <div className="relative pl-6 border-l-2 border-accent/30 hover:border-accent transition-colors">
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-accent" />
                    <div className="bg-card p-5 rounded-lg border border-border hover:border-accent/40 transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-mono font-semibold text-foreground">{edu.degree}</h4>
                        <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-foreground mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.details}</p>
                      {edu.focus && (
                        <p className="text-xs text-muted-foreground mt-2 font-mono">
                          Focus: {edu.focus}
                        </p>
                      )}
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
