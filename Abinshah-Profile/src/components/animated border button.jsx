import React from 'react';

export default function AnimatedBorderButton({ children, className = '', ...props }) {
  return (
    <button 
      className={`group relative overflow-hidden px-6 py-3 rounded-full font-medium text-white bg-transparent transition-all duration-300 outline-none cursor-pointer ${className}`}
      {...props}
    >
      {/* Animated SVG Border Layer */}
      <svg className="absolute inset-0 w-full h-full rounded-full" xmlns="http://www.w3.org/2000/svg">
        <rect 
          rx="9999" 
          ry="9999" 
          className="w-full h-full fill-none stroke-primary/30 stroke-[2] transition-all duration-500 group-hover:stroke-primary" 
        />
      </svg>

      {/* Hover Background Accent Glow */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500 rounded-full" />

      <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
        {children}
      </span>
    </button>
  );
}