import React, { useState, useRef, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Mail, Linkedin, Github, MapPin, Phone, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    success?: string;
    error?: string;
  }>({});
  
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    emailjs.init("4U0Z_j4iAs3bWUzsV");
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus({});
    
    try {
      if (!formRef.current) return;
      
      const result = await emailjs.sendForm(
        'service_13wxn4w',
        'template_kh1tnxk',
        formRef.current
      );
      
      if (result.status === 200) {
        setFormStatus({
          success: 'Your message has been sent successfully! I will get back to you soon.'
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus({
        error: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsLoading(false);
      
      // Clear success/error message after 5 seconds
      setTimeout(() => {
        setFormStatus({});
      }, 5000);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Get In Touch"
          subtitle="Let's discuss how we can work together on your next project"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-primary-light text-primary rounded-full mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Email</h4>
                  <a href="mailto:haideraalian033@gmail.com" className="text-gray-600 hover:text-primary">
                    haideraalian033@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary-light text-primary rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Phone</h4>
                  <a href="tel:+923066795663" className="text-gray-600 hover:text-primary">
                    +92 03066795663
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary-light text-primary rounded-full mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Location</h4>
                  <p className="text-gray-600">Islamabad, Pakistan</p>
                  <p className="text-gray-600">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold text-gray-700 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/syed-aalian-haider-6b4b44235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 text-gray-700 hover:bg-primary hover:text-white rounded-full transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/Aalian12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 text-gray-700 hover:bg-primary hover:text-white rounded-full transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {formStatus.success && (
                <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
                  {formStatus.success}
                </div>
              )}
              
              {formStatus.error && (
                <div className="bg-red-100 text-red-800 p-4 rounded-md mb-6">
                  {formStatus.error}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};