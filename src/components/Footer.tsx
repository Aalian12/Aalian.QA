import React from 'react';
import { Linkedin, GithubIcon, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aalian.QA</h3>
            <p className="text-gray-400 mb-4">
              Automation Test Engineer specializing in Quality Assurance and Test Automation
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/syed-aalian-haider-6b4b44235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Aalian12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href="mailto:haideraalian033@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Experience', 'Expertise', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Email: haideraalian033@gmail.com</p>
            <p className="text-gray-400 mb-2">Location: Islamabad, Pakistan</p>
            <p className="text-gray-400">Available for remote opportunities</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {currentYear} Aalian.QA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};