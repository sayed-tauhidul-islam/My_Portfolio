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
        return updatedDots.slice(-15);
      });

      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
        setDots([]);
      }, 150);
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
      {dots.map((dot, index) => (
        <div
          key={dot.id}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / dots.length,
            animation: 'fadeOut 0.8s ease-out forwards',
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
