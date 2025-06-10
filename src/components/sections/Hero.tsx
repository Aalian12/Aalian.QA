import React from 'react';
import { Button } from '../ui/Button';
import { StatCard } from '../ui/StatCard';
import { Code, FileCheck, Bug } from 'lucide-react';
import profileImage from '../images/Aalian.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90 z-0"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-10 md:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Syed Aalian Haider
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">
              Automation Test Engineer
            </h2>
            <p className="text-lg mb-8 text-gray-100 max-w-lg">
              Specializing in Quality Assurance and Test Automation with expertise in building robust test frameworks 
              that ensure seamless software delivery and exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-White hover:bg-gray-100"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Portfolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:bg-opacity-10"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-white h-64 w-64 md:h-80 md:w-80">
              <img
                src={profileImage}
                alt="Syed Aalian Haider - Automation Test Engineer"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Projects Completed" 
            value={15} 
            icon={<Code size={24} />} 
          />
          <StatCard 
            title="Test Cases Automated" 
            value={100} 
            icon={<FileCheck size={24} />} 
          />
          <StatCard 
            title="Bugs Identified" 
            value={1200} 
            icon={<Bug size={24} />} 
          />
        </div>
      </div>
    </section>
  );
};