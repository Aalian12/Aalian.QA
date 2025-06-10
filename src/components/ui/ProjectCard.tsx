import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from './Button';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: string[];
  category: 'automation' | 'qa' | 'framework';
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            project.category === 'automation' ? 'bg-blue-100 text-blue-800' :
            project.category === 'qa' ? 'bg-green-100 text-green-800' :
            'bg-purple-100 text-purple-800'
          }`}>
            {project.category === 'automation' ? 'Automation' :
             project.category === 'qa' ? 'QA Initiative' :
             'Framework'}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements</h4>
          <ul className="text-sm text-gray-600 pl-5 list-disc">
            {project.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        
        {/* Link button */}
        {project.link && (
          <Button 
            variant="outline" 
            size="sm"
            className="mt-2 w-full"
            onClick={() => window.open(project.link, '_blank')}
          >
            View Details <ExternalLink size={16} className="ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};