import { useEffect, useRef } from 'react';

const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Circuit node class
    class Node {
      x: number;
      y: number;
      connections: Node[];
      pulseProgress: number;
      pulseActive: boolean;
      pulseDelay: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.connections = [];
        this.pulseProgress = 0;
        this.pulseActive = false;
        this.pulseDelay = Math.random() * 5000;
      }
    }

    // Create grid of nodes
    const nodes: Node[] = [];
    const gridSize = 80;
    const cols = Math.ceil(canvas.width / gridSize) + 1;
    const rows = Math.ceil(canvas.height / gridSize) + 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * gridSize + (Math.random() - 0.5) * 20;
        const y = j * gridSize + (Math.random() - 0.5) * 20;
        nodes.push(new Node(x, y));
      }
    }

    // Create connections (circuit traces)
    nodes.forEach((node, index) => {
      const nearbyNodes = nodes.filter((other, otherIndex) => {
        if (index === otherIndex) return false;
        const dist = Math.hypot(other.x - node.x, other.y - node.y);
        return dist < gridSize * 1.5 && dist > 20;
      });

      // Connect to 1-3 nearby nodes
      const connectCount = Math.min(Math.floor(Math.random() * 3) + 1, nearbyNodes.length);
      for (let i = 0; i < connectCount; i++) {
        const randomNode = nearbyNodes[Math.floor(Math.random() * nearbyNodes.length)];
        if (randomNode && !node.connections.includes(randomNode)) {
          node.connections.push(randomNode);
        }
      }
    });

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 16;

      // Draw connections (circuit traces)
      nodes.forEach(node => {
        node.connections.forEach(connection => {
          // Calculate if this trace should be glowing
          const traceProgress = ((time + node.pulseDelay) % 8000) / 8000;
          const glowIntensity = Math.sin(traceProgress * Math.PI * 2) * 0.5 + 0.5;

          // Draw trace
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);

          // Create right-angle paths like real PCB traces
          const midX = connection.x;
          const midY = node.y;
          ctx.lineTo(midX, midY);
          ctx.lineTo(connection.x, connection.y);

          ctx.strokeStyle = `rgba(45, 212, 191, ${0.08 + glowIntensity * 0.12})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Add glow effect for active traces
          if (glowIntensity > 0.7) {
            ctx.strokeStyle = `rgba(45, 212, 191, ${glowIntensity * 0.2})`;
            ctx.lineWidth = 3;
            ctx.stroke();
          }
        });
      });

      // Draw nodes (solder points)
      nodes.forEach(node => {
        const nodeGlow = ((time + node.pulseDelay * 2) % 6000) / 6000;
        const intensity = Math.sin(nodeGlow * Math.PI * 2) * 0.5 + 0.5;

        // Node glow
        if (intensity > 0.5) {
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8);
          gradient.addColorStop(0, `rgba(45, 212, 191, ${intensity * 0.3})`);
          gradient.addColorStop(1, 'rgba(45, 212, 191, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node center
        ctx.fillStyle = `rgba(45, 212, 191, ${0.3 + intensity * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CircuitBackground;
