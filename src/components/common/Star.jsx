import React from 'react';

const Star = ({ size = 'small', delay = 0 }) => {
  const sizeClasses = {
    small: 'w-1 h-1',
    medium: 'w-2 h-2',
    large: 'w-3 h-3',
  };

  return (
    <div 
      className={`${sizeClasses[size]} bg-white rounded-full absolute animate-twinkle`}
      style={{ 
        animationDelay: `${delay}s`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
      }}
    />
  );
};

export default Star;