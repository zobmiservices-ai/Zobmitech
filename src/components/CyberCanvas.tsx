import React, { useEffect, useRef, useState } from 'react';

interface CyberCanvasProps {
  theme: 'morning' | 'night';
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function CyberCanvas({ theme }: CyberCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mouseCoordinatesRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const particlesRef = useRef<Particle[]>([]);

  // Track size of the parent elements dynamically
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let resizeTimeout: NodeJS.Timeout;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      // Debounce resized canvas configurations
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }, 150);
    });

    observer.observe(container);
    return () => {
      observer.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Update canvas width and height parameters directly on dimensions change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Reset particles on dimensions changes
    const count = Math.min(60, Math.floor((dimensions.width * dimensions.height) / 18000));
    const list: Particle[] = [];
    for (let i = 0; i < count; i++) {
      list.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1
      });
    }
    particlesRef.current = list;
  }, [dimensions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const drawingLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const colorAccent = theme === 'night' ? '0, 201, 167' : '37, 99, 235';
      const particles = particlesRef.current;
      const mouse = mouseCoordinatesRef.current;

      // 1. Draw connecting lines
      const maxDistance = 110;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.strokeStyle = `rgba(${colorAccent}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 2. Move & Draw particles
      particles.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce borders
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Bound position checks
        if (p.x < 0) p.x = 0;
        if (p.x > canvas.width) p.x = canvas.width;
        if (p.y < 0) p.y = 0;
        if (p.y > canvas.height) p.y = canvas.height;

        // Subtle attraction to mouse
        if (mouse.x !== null && mouse.y !== null) {
          const mouseDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (mouseDist < 180) {
            const force = (180 - mouseDist) / 18000;
            p.x += (mouse.x - p.x) * force;
            p.y += (mouse.y - p.y) * force;
          }
        }

        // Draw particle
        ctx.fillStyle = `rgba(${colorAccent}, 0.25)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Core bright glow center
        ctx.fillStyle = `rgba(${colorAccent}, 0.65)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Connect mouse to nearby nodes
      if (mouse.x !== null && mouse.y !== null) {
        particles.forEach((p) => {
          const dist = Math.hypot(p.x - mouse.x!, p.y - mouse.y!);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.25;
            ctx.strokeStyle = `rgba(${colorAccent}, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x!, mouse.y!);
            ctx.stroke();
          }
        });
      }

      animationId = requestAnimationFrame(drawingLoop);
    };

    drawingLoop();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseCoordinatesRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseLeave = () => {
    mouseCoordinatesRef.current = { x: null, y: null };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full pointer-events-auto z-1 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ background: 'transparent' }}
      />
    </div>
  );
}
