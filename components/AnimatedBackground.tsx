'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const AnimatedBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0 transition-colors duration-300 ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50' 
          : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
      }`} />
      
      {/* Animated Orbs */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === 'light' ? 'bg-cyan-200/20' : 'bg-cyan-500/10'
        }`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          theme === 'light' ? 'bg-blue-200/20' : 'bg-blue-500/10'
        }`}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute top-1/2 right-1/3 w-96 h-96 rounded-full blur-3xl ${
          theme === 'light' ? 'bg-purple-200/20' : 'bg-purple-500/10'
        }`}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Pattern */}
      <div className={`absolute inset-0 bg-grid-pattern ${
        theme === 'light' ? 'opacity-[0.05]' : 'opacity-[0.02]'
      }`} />
    </div>
  );
};

export default AnimatedBackground;
