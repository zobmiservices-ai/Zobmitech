import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  theme: 'morning' | 'night';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ theme, size = 'md' }: LogoProps) {
  // Dimensions & padding configs
  const boxSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-14 h-14' : 'w-10 h-10';
  const strokeW = size === 'sm' ? 2 : 2.5;

  // Adapt colors based on theme
  const stopColor1 = theme === 'night' ? '#00C9A7' : '#2563EB';
  const stopColor2 = theme === 'night' ? '#2563EB' : '#1D4ED8';
  const glowShadow = theme === 'night' 
    ? 'drop-shadow-[0_0_6px_rgba(0,201,167,0.65)]' 
    : 'drop-shadow-[0_0_6px_rgba(37,99,235,0.4)]';

  return (
    <div className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-md transition-all duration-300 border ${boxSize} ${
      theme === 'night'
        ? 'bg-slate-950 border-emerald-500/30 shadow-[0_0_15px_rgba(0,201,167,0.15)] group-hover:border-emerald-500/60'
        : 'bg-white border-slate-200 shadow-sm group-hover:border-blue-500/45'
    }`}>
      {/* Absolute tech dashboard laser scans */}
      <motion.div
        animate={{
          y: [-40, 40],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute left-0 right-0 h-[1px] opacity-25 pointer-events-none ${
          theme === 'night' ? 'bg-[#00C9A7]' : 'bg-[#2563EB]'
        }`}
      />

      <svg className="w-full h-full p-1" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoPremiumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={stopColor1} />
            <stop offset="100%" stopColor={stopColor2} />
          </linearGradient>
        </defs>

        {/* Tech grid/hologram outer dashes */}
        <motion.circle
          cx="20"
          cy="20"
          r="16"
          stroke="url(#logoPremiumGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="opacity-40"
        />

        {/* Dynamic micro inner circles */}
        <circle
          cx="20"
          cy="20"
          r="12"
          stroke="url(#logoPremiumGrad)"
          strokeWidth="0.8"
          strokeDasharray="2 12"
          className="opacity-30"
        />

        {/* Intersecting dual geometric blades/wedges forming a hyper-modern "Z" */}
        {/* Shard 1 (Top and angled bar) */}
        <motion.path
          d="M10 12 H28 L14 28"
          stroke="url(#logoPremiumGrad)"
          strokeWidth={strokeW}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={glowShadow}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Shard 2 (Angled bar and bottom) */}
        <motion.path
          d="M26 12 L12 28 H30"
          stroke="url(#logoPremiumGrad)"
          strokeWidth={strokeW}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={glowShadow}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />

        {/* Pulsing tech node core in the geometrical intersection point (approx center: 20, 20) */}
        <motion.circle
          cx="20"
          cy="20"
          r="2.5"
          fill={stopColor1}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={glowShadow}
        />
      </svg>
    </div>
  );
}
