import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate minimum loading time and wait for resources
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setTimeout(onLoadComplete, 500); // Fade out animation duration
    }, 1500); // Minimum display time

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated border container */}
      <div className="relative">
        {/* Rotating gradient border */}
        <div className="absolute inset-0 -m-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-border blur-sm"></div>
        
        {/* Inner container */}
        <div className="relative bg-background rounded-2xl p-8 border-2 border-border">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-primary text-3xl font-bold font-mono animate-pulse">
              {'>'}_
            </div>
            <div className="text-foreground text-3xl font-bold font-mono">
              raveen<span className="text-primary">.dev</span>
            </div>
          </div>
          
          {/* Loading dots animation */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
          </div>
          
          {/* Loading text */}
          <p className="text-sm text-muted-foreground font-mono text-center mt-4">
            Loading portfolio...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
