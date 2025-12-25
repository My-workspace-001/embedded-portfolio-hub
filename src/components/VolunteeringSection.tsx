import { Users, Lightbulb, Mic, Youtube, ExternalLink, Video } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const VolunteeringSection = () => {
  const activities = [
    {
      icon: Users,
      title: 'Robotics Worshop - Traction 2.0 ',
      organization: 'Organized by IEEE Robotic and Automation Society - IIT',
      description: 'Conducted a hands-on workshop on building a line following robot using IR sensors and motors.',
      type: 'Workshop',
      image: '/iit3.webp', // Add your workshop image
      // youtubeLink: 'https://youtube.com/watch?v=your-video-id', // Add your YouTube link
    },
    {
      icon: Users,
      title: 'Robotics Workshop - Nexgen 1.0',
      organization: 'IEEE Robotic and Automation Society - University of Moratuwa',
      description: 'Coducted a beginner-friendly workshop on building and programming basic robots using Arduino and obstacle avoiding robot.',
      type: 'Seminar',
      image: '/ws2.webp',
      // youtubeLink: 'https://youtube.com/watch?v=your-video-id',
    },
    {
      icon: Video,
      title: 'Learning Lecture - I2S Interface and Audio Amplifier Design',
      organization: 'RoboticGen',
      description: 'Conducted an online lecture on I2S communication protocol and audio amplifier circuit design for mentors at RoboticGen.',
      type: 'Lecture',
      image: '/rgenws1.webp',
      youtubeLink: 'https://youtu.be/W4w_CZutSCM?si=SUi4HrLSfPn4GOEI',
    },
    {
      icon: Video,
      title: 'Learning Lecture - Design a Power Supply for a PCB',
      organization: 'RoboticGen',
      description: 'Online workshop on designing efficient power supply circuits for embedded systems and PCBs using LDO and Switching Regulators.',
      type: 'Workshop',
      image: '/rgenws2.webp',
      youtubeLink: 'https://youtu.be/S3JD2iGs0FU?si=KnQIRhEYIAshMc1J',
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
        <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <AnimatedCard key={activity.title} delay={index * 100}>
              <div className="group rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] h-full overflow-hidden scale-90">
                {/* Image Section */}
                {activity.image && (
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
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
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                        aria-label="Watch on YouTube"
                      >
                        <Youtube className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                )}
                
                {/* Content Section */}
                <div className="p-3">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <activity.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        <h3 className="font-mono font-semibold text-base text-foreground leading-tight">
                          {activity.title}
                        </h3>
                        <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded">
                          {activity.type}
                        </span>
                      </div>
                      <p className="text-sm text-primary mb-1.5 leading-tight">{activity.organization}</p>
                      <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{activity.description}</p>
                      
                      {/* YouTube Link */}
                      {activity.youtubeLink && (
                        <a
                          href={activity.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-mono text-red-600 hover:text-red-700 transition-colors"
                        >
                          <Youtube className="w-3.5 h-3.5" />
                          Watch
                          <ExternalLink className="w-2.5 h-2.5" />
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
