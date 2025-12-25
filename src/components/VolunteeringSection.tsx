import { Users, Lightbulb, Mic, Youtube, ExternalLink } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const VolunteeringSection = () => {
  const activities = [
    {
      icon: Users,
      title: 'Embedded Systems Workshop',
      organization: 'RoboticGen / University of Moratuwa',
      description: 'Conducted workshops on ESP32, STM32 programming, and PCB design fundamentals for undergraduate students.',
      type: 'Workshop',
      image: '/workshop1.webp', // Add your workshop image
      youtubeLink: 'https://youtube.com/watch?v=your-video-id', // Add your YouTube link
    },
    {
      icon: Mic,
      title: 'IoT & LoRa Technology Seminar',
      organization: 'IEEE Student Branch',
      description: 'Presented on LoRa mesh networking and IoT device development for disaster communication systems.',
      type: 'Seminar',
      image: '/workshop2.webp',
      youtubeLink: 'https://youtube.com/watch?v=your-video-id',
    },
    {
      icon: Lightbulb,
      title: 'Robotics Competition Mentor',
      organization: 'RoboticGen',
      description: 'Mentoring students for national robotics competitions including SLRC and IESL Robogames.',
      type: 'Mentoring',
      image: '/workshop3.webp',
    },
    {
      icon: Users,
      title: 'Arduino & Electronics Workshop',
      organization: 'Community Outreach',
      description: 'Introductory workshops on basic electronics and Arduino programming for school students.',
      type: 'Workshop',
      image: '/workshop4.webp',
      youtubeLink: 'https://youtube.com/watch?v=your-video-id',
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
            <span className="text-primary font-mono">04.</span> Volunteering & Activities
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
              <div className="group rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] h-full overflow-hidden">
                {/* Image Section */}
                {activity.image && (
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {activity.youtubeLink && (
                      <a
                        href={activity.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                        aria-label="Watch on YouTube"
                      >
                        <Youtube className="w-8 h-8 text-white" />
                      </a>
                    )}
                  </div>
                )}
                
                {/* Content Section */}
                <div className="p-6">
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
                      <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                      
                      {/* YouTube Link */}
                      {activity.youtubeLink && (
                        <a
                          href={activity.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Youtube className="w-4 h-4" />
                          Watch Workshop
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
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
