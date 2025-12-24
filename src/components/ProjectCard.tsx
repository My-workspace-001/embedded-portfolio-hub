import { ExternalLink, Github, Cpu } from 'lucide-react';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  ongoing?: boolean;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  github,
  live,
  featured = false,
  ongoing = false,
}: ProjectCardProps) => {
  return (
    <div
      className={`group relative rounded-xl overflow-hidden bg-card border transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)] ${
        featured ? 'border-primary/30 hover:border-primary/60' : 'border-border hover:border-primary/40'
      }`}
    >
      {/* Image/Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-muted to-secondary overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Cpu className="w-16 h-16 text-primary/30" />
              <div className="absolute inset-0 animate-pulse-glow rounded-full" />
            </div>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {featured && (
            <Badge className="bg-primary/90 text-primary-foreground font-mono text-xs">
              Featured
            </Badge>
          )}
          {ongoing && (
            <Badge className="bg-accent/90 text-accent-foreground font-mono text-xs">
              Ongoing
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/80 text-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-mono font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
