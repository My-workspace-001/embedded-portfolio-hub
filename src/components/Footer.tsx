import { Heart, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm">raveen.dev</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center font-mono">
            <span className="text-primary">{'<'}</span>
            Built with 
            <Heart className="w-4 h-4 inline mx-1 text-accent" />
            by Raveen Pathirana
            <span className="text-primary">{' />'}</span>
          </p>

          {/* Year */}
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
