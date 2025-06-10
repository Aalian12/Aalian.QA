import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-3xl">{subtitle}</p>}
      <div className={`h-1 w-24 bg-primary mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};