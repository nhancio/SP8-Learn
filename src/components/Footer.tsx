import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Courses', id: 'courses' },
    { label: 'Journey', id: 'journey' },
    { label: 'Showcase', id: 'showcase' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold"> </h3>
            </div>
            <p className="text-gray-300 font-inter leading-relaxed mb-4 text-sm">
              Empowering the next generation of developers and creators with AI-powered education and hands-on experience.
            </p>
            <div className="text-gray-400 text-xs">
              <p>&copy; 2025  . All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-base font-poppins font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 font-inter text-sm"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-base font-poppins font-semibold mb-4">Get Started Today</h4>
            <div className="space-y-2">
              <p className="text-gray-300 font-inter text-sm">
                Ready to transform your career with AI and development skills?
              </p>
              <button
                onClick={() => scrollToSection('courses')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-poppins font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-6 text-xs text-gray-400 font-inter">
              <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="/terms-conditions" className="hover:text-white transition-colors duration-200">Terms & Conditions</a>
              <a href="/refund-policy" className="hover:text-white transition-colors duration-200">Refund Policy</a>
              <a href="mailto:nithindidigam@gmail.com" className="hover:text-white transition-colors duration-200">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;