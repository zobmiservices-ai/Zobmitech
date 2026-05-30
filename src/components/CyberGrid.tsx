import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface CyberGridProps {
  theme: 'morning' | 'night';
}

export default function CyberGrid({ theme }: CyberGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isStatic, setIsStatic] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cybergrid_static') === 'true';
    }
    return false;
  });

  // Keep track of toggle updates
  useEffect(() => {
    const handleToggleEvent = (e: any) => {
      if (e.detail && typeof e.detail.isStatic !== 'undefined') {
        setIsStatic(e.detail.isStatic);
      }
    };
    
    window.addEventListener('cybergrid-toggle' as any, handleToggleEvent);
    return () => {
      window.removeEventListener('cybergrid-toggle' as any, handleToggleEvent);
    };
  }, []);

  // Precision raw mouse state motion values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smooth springs to eliminate sudden cursor jumps or jitters
  const springConfig = { damping: 35, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(rawX, springConfig);
  const mouseY = useSpring(rawY, springConfig);

  // Initialize mouse values to center when starting or when static
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2 || 600;
      const centerY = rect.height / 2 || 400;
      rawX.set(centerX);
      rawY.set(centerY);
    }
  }, [rawX, rawY]);

  // Tilting effects for holographic 3D perspective shift
  // Maps mouse coordinates to small rotations on X/Y axes (disabled/straight if static)
  const rotateX = useTransform(mouseY, [0, 800], isStatic ? [0, 0] : [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1200], isStatic ? [0, 0] : [-4, 4]);

  // Handle mouse movement trackers
  useEffect(() => {
    if (isStatic) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate local offsets
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;

      rawX.set(localX);
      rawY.set(localY);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [rawX, rawY, isStatic]);

  // Construct dynamic inline CSS gradient string for GPU-level spotlight tracing
  const glowColor = theme === 'night' ? '0, 201, 167' : '37, 99, 235';
  const glowSpotlight = useTransform(
    [mouseX, mouseY],
    ([x, y]) => {
      if (isStatic) {
        // Ambient centered gentle glow for static layout comfort
        return `radial-gradient(circle 500px at 50% 50%, rgba(${glowColor}, ${theme === 'night' ? 0.04 : 0.03}) 0%, rgba(${glowColor}, 0) 100%)`;
      }
      return `radial-gradient(circle 350px at ${x}px ${y}px, rgba(${glowColor}, ${theme === 'night' ? 0.08 : 0.06}) 0%, rgba(${glowColor}, 0) 100%)`;
    }
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-1"
      style={{ perspective: '1000px' }}
    >
      {/* 1. Main 3D Warp container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full transition-transform duration-300 ease-out flex items-center justify-center"
      >
        {/* 2. Cyber grid mesh lines pattern */}
        <div
          className={`absolute inset-0 w-full h-full opacity-35 transition-all duration-1000 ${
            theme === 'night'
              ? 'bg-[linear-gradient(to_right,#00c9a712_1px,transparent_1px),linear-gradient(to_bottom,#00c9a712_1px,transparent_1px)]'
              : 'bg-[linear-gradient(to_right,#2563eb12_1px,transparent_1px),linear-gradient(to_bottom,#2563eb12_1px,transparent_1px)]'
          }`}
          style={{
            backgroundSize: '40px 40px',
            transform: 'translateZ(-10px) scale(1.1)',
          }}
        />

        {/* 3. Sub-coordinate ticks for tech aesthetic (intermittent 120px grid) */}
        <div
          className={`absolute inset-0 w-full h-full opacity-15 transition-all duration-1000 ${
            theme === 'night'
              ? 'bg-[linear-gradient(to_right,#00c9a725_2px,transparent_2px),linear-gradient(to_bottom,#00c9a725_2px,transparent_2px)]'
              : 'bg-[linear-gradient(to_right,#2563eb25_2px,transparent_2px),linear-gradient(to_bottom,#2563eb25_2px,transparent_2px)]'
          }`}
          style={{
            backgroundSize: '160px 160px',
            transform: 'translateZ(-5px) scale(1.1)',
          }}
        />

        {/* 4. Mouse Spotlight overlay tracking the cursor */}
        <motion.div
          style={{
            background: glowSpotlight,
            transform: 'translateZ(10px) scale(1.15)',
          }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* 5. Telemetric crosshairs in corner points to frame the layout */}
        <div className={`absolute top-10 left-10 w-6 h-6 border-t-2 border-l-2 transition-colors duration-1000 opacity-30 ${
          theme === 'night' ? 'border-[#00C9A7]' : 'border-[#2563EB]'
        }`} />
        <div className={`absolute top-10 right-10 w-6 h-6 border-t-2 border-r-2 transition-colors duration-1000 opacity-30 ${
          theme === 'night' ? 'border-[#00C9A7]' : 'border-[#2563EB]'
        }`} />
        <div className={`absolute bottom-10 left-10 w-6 h-6 border-b-2 border-l-2 transition-colors duration-1000 opacity-30 ${
          theme === 'night' ? 'border-[#00C9A7]' : 'border-[#2563EB]'
        }`} />
        <div className={`absolute bottom-10 right-10 w-6 h-6 border-b-2 border-r-2 transition-colors duration-1000 opacity-30 ${
          theme === 'night' ? 'border-[#00C9A7]' : 'border-[#2563EB]'
        }`} />
      </motion.div>
    </div>
  );
}
