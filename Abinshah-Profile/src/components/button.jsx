import React from 'react';

export default function Button({ children, size = 'default', className = '', ...props }) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`relative overflow-hidden rounded-full font-medium bg-primary text-background shadow-lg shadow-primary/25 hover:bg-primary/90 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size] || sizeClasses.default} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}