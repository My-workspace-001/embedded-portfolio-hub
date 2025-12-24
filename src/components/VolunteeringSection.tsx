import { Users, Lightbulb, Mic } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const VolunteeringSection = () => {
  const activities = [
    {
      icon: Users,
      title: 'Embedded Systems Workshop',
      organization: 'RoboticGen / University of Moratuwa',
      description: 'Conducted workshops on ESP32, STM32 programming, and PCB design fundamentals for undergraduate students.',
      type: 'Workshop',
    },
    {
      icon: Mic,
      title: 'IoT & LoRa Technology Seminar',
      organization: 'IEEE Student Branch',
      description: 'Presented on LoRa mesh networking and IoT device development for disaster communication systems.',
      type: 'Seminar',
    },
    {
      icon: Lightbulb,
      title: 'Robotics Competition Mentor',
      organization: 'RoboticGen',
      description: 'Mentoring students for national robotics competitions including SLRC and IESL Robogames.',
      type: 'Mentoring',
    },
    {
      icon: Users,
      title: 'Arduino & Electronics Workshop',
      organization: 'Community Outreach',
      description: 'Introductory workshops on basic electronics and Arduino programming for school students.',
      type: 'Workshop',
    },
  ];

  const extraActivities = [
    'Member of IEEE Student Branch, University of Moratuwa',
    'Active contributor to open-source embedded systems projects',
    'Technical blog writing on Medium covering embedded systems topics',
    'Participation in hackathons and innovation challenges',
  ];

  return (
    <section id="volunteering" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary font-mono">05.</span> Volunteering & Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Sharing knowledge and contributing to the tech community
          </p>
        </div>

        {/* Workshops & Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {activities.map((activity, index) => (
            <AnimatedCard key={activity.title} delay={index * 100}>
              <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <activity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-mono font-semibold text-foreground">
                        {activity.title}
                      </h3>
                      <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                        {activity.type}
                      </span>
                    </div>
                    <p className="text-sm text-primary mb-2">{activity.organization}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Extra Activities */}
        <AnimatedCard delay={400}>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-mono font-semibold text-foreground mb-4 text-center">
              <span className="text-primary">{'<'}</span>
              Extra Curricular
              <span className="text-primary">{' />'}</span>
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {extraActivities.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary mt-1">▹</span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default VolunteeringSection;
