import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';

interface Job {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
}

const experiences: Job[] = [
  {
    id: 'eConceptions',
    company: 'eConceptions',
    position: 'Automation Test Engineer',
    period: 'April 2025 - Present',
    description: 'Leading test automation initiatives for enterprise telecom solutions, ensuring quality and performance across multiple platforms.',
    responsibilities: [
      'Develop and maintain automated test frameworks using Selenium, TestNG, and Python',
      'Design and implement CI/CD pipelines for continuous testing in Jenkins',
      'Conduct performance testing using JMeter and analyze results for optimization',
      'Collaborate with development teams to ensure quality throughout the SDLC'
    ],
    achievements: [
      'Reduced regression testing time by 60% through test automation',
      'Implemented BDD framework with Cucumber, increasing test coverage by 40%',
      'Designed a custom reporting solution that improved defect tracking efficiency by 35%',
      'Led the implementation of mobile automation testing using Appium'
    ]
  },
  // {
  //   id: 'techsolutions',
  //   company: 'Tech Solutions Inc.',
  //   position: 'QA Automation Engineer',
  //   period: 'March 2018 - December 2020',
  //   description: 'Responsible for automating test cases and building test frameworks for web and mobile applications.',
  //   responsibilities: [
  //     'Created and executed automated test scripts using Selenium WebDriver',
  //     'Performed API testing using Postman and RestAssured',
  //     'Participated in Agile ceremonies and sprint planning',
  //     'Documented test cases and reported defects in JIRA'
  //   ],
  //   achievements: [
  //     'Automated 300+ test cases for critical business applications',
  //     'Reduced manual testing effort by 45% through automation',
  //     'Improved test data management by implementing a database-driven approach',
  //     'Received recognition for identifying critical security vulnerabilities'
  //   ]
  // }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Professional Experience"
          subtitle="Building quality into software through strategic test automation and quality assurance initiatives"
        />
        
        <div className="space-y-12">
          {experiences.map((job) => (
            <div key={job.id} className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start mb-6">
                <div className="bg-primary text-white p-3 rounded-lg mb-4 md:mb-0 md:mr-6 inline-flex">
                  <Briefcase size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{job.position}</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-2" />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl text-primary font-medium mb-4">{job.company}</h4>
                  <p className="text-gray-700 mb-6">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Key Responsibilities</h5>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Achievements</h5>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        {job.achievements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};