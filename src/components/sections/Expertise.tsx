import React, { useState, useEffect, useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillMeter } from '../ui/SkillMeter';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'automation',
    title: 'Automation Tools',
    skills: [
      { name: 'Selenium WebDriver', level: 95 },
      { name: 'TestNG', level: 90 },
      { name: 'Pytest', level: 85 },
      { name: 'Cucumber', level: 80 },
      { name: 'Appium', level: 75 },
      { name: 'Protractor', level: 70 }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'C#', level: 65 }
    ]
  },
  {
    id: 'testing',
    title: 'Testing Types',
    skills: [
      { name: 'Functional Testing', level: 95 },
      { name: 'Integration Testing', level: 90 },
      { name: 'API Testing', level: 85 },
      { name: 'Performance Testing', level: 80 },
      { name: 'Security Testing', level: 70 },
      { name: 'Mobile Testing', level: 75 }
    ]
  },
  {
    id: 'tools',
    title: 'Frameworks & Tools',
    skills: [
      { name: 'Jenkins', level: 90 },
      { name: 'Git', level: 85 },
      { name: 'JIRA', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Azure DevOps', level: 80 }
    ]
  }
];

export const Expertise: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>('automation');
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // When the section is visible, animate the first category
          setOpenCategory('automation');
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Technical Expertise"
          subtitle="A comprehensive overview of my technical skills and proficiency levels"
          centered
        />
        
        <div ref={skillsRef} className="max-w-3xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.id} className="mb-6">
              <button
                className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow transition-shadow"
                onClick={() => toggleCategory(category.id)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                {openCategory === category.id ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              
              <div 
                className={`bg-white p-6 rounded-b-lg shadow-sm mt-1 transition-all overflow-hidden ${
                  openCategory === category.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  {category.skills.map((skill) => (
                    <SkillMeter 
                      key={skill.name} 
                      name={skill.name} 
                      level={skill.level} 
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};