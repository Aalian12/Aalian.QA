import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { FileText, GraduationCap, Award } from 'lucide-react';
import cvFile from '../cv/resume-2.pdf';

interface Education {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  expires?: string;
  link?: string;
}

const educationList: Education[] = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'PMAS Arid Agriculture University',
    year: '2021 - 2025',
    description: 'Graduated with honors. Final project focused on automated testing frameworks for web applications.'
  },
  
];

const certificationsList: Certification[] = [
  {
    name: 'NAVTTAC Certified in Python',
    issuer: 'NAVTTAC',
    year: '2023',
    expires: '2030',
    link: '#'
  },
  
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Education & Certifications"
          subtitle="Academic background and professional certifications in software testing and quality assurance"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary text-white rounded-full mr-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>
            
            <div className="space-y-8">
              {educationList.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-gray-200">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold text-gray-800 mb-1">{item.degree}</h4>
                    <div className="flex items-center text-primary font-medium mb-2">
                      <span>{item.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{item.year}</span>
                    </div>
                    {item.description && <p className="text-gray-600">{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary text-white rounded-full mr-4">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certificationsList.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h4>
                  <div className="flex flex-wrap items-center text-gray-600 mb-3">
                    <span className="mr-3">{cert.issuer}</span>
                    <span className="mr-3">•</span>
                    <span>{cert.year}</span>
                    {cert.expires && (
                      <>
                        <span className="mx-3">•</span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                          Expires: {cert.expires}
                        </span>
                      </>
                    )}
                  </div>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center text-sm"
                    >
                      Verify Certificate <FileText size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              ))}
            </div>
            
            {/* Download CV */}
            <div className="mt-8 text-center">
              <Button
                variant="primary"
                size="lg"
                className="inline-flex items-center"
                onClick={() => window.open(cvFile, '_blank')}
              >
                Download Full CV <FileText size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};