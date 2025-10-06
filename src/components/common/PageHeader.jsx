import React from 'react';
import Star from './Star';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative starry-background h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Étoiles animées */}
      {[...Array(30)].map((_, i) => (
        <Star key={i} size={i % 3 === 0 ? 'medium' : 'small'} delay={i * 0.2} />
      ))}

      {/* Contenu */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-elegant font-bold gold-text mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 animate-slide-up">
            {subtitle}
          </p>
        )}
      </div>

      {/* Globe terrestre subtil */}
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-earth-green-500 opacity-20 blur-3xl animate-float" />
    </div>
  );
};

export default PageHeader;