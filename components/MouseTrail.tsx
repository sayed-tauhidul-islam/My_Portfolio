'use client';

import React, { useState, useEffect, useRef } from 'react';

const MouseTrail = () => {
  const [dots, setDots] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dotIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsMoving(true);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const newDot = {
        x: e.clientX,
        y: e.clientY,
        id: dotIdRef.current++,
      };

      setDots((prevDots) => {
        const updatedDots = [...prevDots, newDot];
        return updatedDots.slice(-20); // Increased trail length
      });

      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
        setDots([]);
      }, 200);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!isMoving) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {dots.map((dot, index) => {
        const progress = (index + 1) / dots.length;
        const size = 4 + progress * 8; // Size varies from 4px to 12px
        const rotation = (index * 30) % 360; // Rotating effect
        
        return (
          <div
            key={dot.id}
            className="absolute"
            style={{
              left: `${dot.x}px`,
              top: `${dot.y}px`,
              transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${progress})`,
              opacity: progress * 0.8,
              animation: 'trailFade 1s ease-out forwards',
            }}
          >
            {/* Multi-layer dot effect */}
            <div
              className="absolute rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 ${size * 2}px rgba(6, 182, 212, ${progress * 0.6})`,
              }}
            />
            {/* Inner glow */}
            <div
              className="absolute rounded-full bg-white"
              style={{
                width: `${size * 0.4}px`,
                height: `${size * 0.4}px`,
                transform: 'translate(-50%, -50%)',
                opacity: progress * 0.5,
              }}
            />
            {/* Outer ring */}
            <div
              className="absolute rounded-full border-2 border-cyan-400"
              style={{
                width: `${size * 1.5}px`,
                height: `${size * 1.5}px`,
                transform: 'translate(-50%, -50%)',
                opacity: progress * 0.3,
                animation: 'ringPulse 1s ease-out forwards',
              }}
            />
          </div>
        );
      })}
      
      <style jsx>{`
        @keyframes trailFade {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
        }
        
        @keyframes ringPulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MouseTrail;
