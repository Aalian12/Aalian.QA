import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard, Project } from '../ui/ProjectCard';

const projects: Project[] = [
  {
    id: 'ecommerce-automation',
    title: 'E-commerce Test Automation',
    description: 'End-to-end automation framework for a major e-commerce platform',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Selenium', 'Java', 'TestNG', 'Jenkins', 'Docker'],
    achievements: [
      'Reduced regression testing time by 70%',
      'Achieved 95% test coverage for critical flows',
      'Implemented data-driven testing approach'
    ],
    category: 'automation',
    link: '#'
  },
  {
    id: 'mobile-framework',
    title: 'Mobile Testing Framework',
    description: 'Cross-platform mobile automation framework for iOS and Android',
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Appium', 'Java', 'TestNG', 'BrowserStack'],
    achievements: [
      'Supported 20+ device configurations',
      'Integrated with CI/CD pipeline',
      'Reduced test execution time by 40%'
    ],
    category: 'framework',
    link: '#'
  },
  {
    id: 'api-testing',
    title: 'API Testing Suite',
    description: 'Comprehensive API test automation suite for microservices architecture',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['RestAssured', 'Java', 'JUnit', 'Postman', 'Newman'],
    achievements: [
      'Achieved 100% API coverage',
      'Implemented contract testing',
      'Reduced API defects by 60%'
    ],
    category: 'automation',
    link: '#'
  },
  {
    id: 'performance-testing',
    title: 'Performance Testing Initiative',
    description: 'Load and stress testing for high-traffic web application',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['JMeter', 'Gatling', 'AWS', 'Grafana', 'InfluxDB'],
    achievements: [
      'Identified performance bottlenecks',
      'Improved response time by 40%',
      'Created real-time performance dashboards'
    ],
    category: 'qa',
    link: '#'
  },
  {
    id: 'bdd-framework',
    title: 'BDD Testing Framework',
    description: 'Behavior-driven development framework using Cucumber and Gherkin',
    image: 'https://images.pexels.com/photos/7439135/pexels-photo-7439135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Cucumber', 'Java', 'Selenium', 'Gherkin'],
    achievements: [
      'Improved collaboration with business stakeholders',
      'Created 200+ reusable test steps',
      'Reduced onboarding time for new testers'
    ],
    category: 'framework',
    link: '#'
  },
  {
    id: 'security-testing',
    title: 'Security Testing Protocol',
    description: 'Automated security testing for financial applications',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['OWASP ZAP', 'Burp Suite', 'Python', 'Jenkins'],
    achievements: [
      'Identified 15 critical security vulnerabilities',
      'Integrated security testing into CI/CD pipeline',
      'Developed custom security testing reports'
    ],
    category: 'qa',
    link: '#'
  }
];

type ProjectCategory = 'all' | 'automation' | 'qa' | 'framework';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Project Portfolio"
          subtitle="A showcase of my test automation projects, QA initiatives, and framework development"
          centered
        />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'automation', label: 'Test Automation' },
            { id: 'qa', label: 'QA Initiatives' },
            { id: 'framework', label: 'Framework Development' }
          ].map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};