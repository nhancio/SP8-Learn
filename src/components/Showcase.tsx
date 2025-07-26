import React from 'react';
import { ExternalLink, Zap, Bot, Home, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 'homemates',
    name: 'Homemates AI',
    icon: <Home className="w-6 h-6 animate-bounce-gentle text-blue-500" />,
    tagline: 'Smart Home Management',
    description: 'AI assistant for managing roommates, expenses, and household tasks with automation',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://homematesapp.in'
  },
  {
    id: 'agentlybot',
    name: 'AgentlyBot',
    icon: <Bot className="w-6 h-6 animate-pulse-glow text-green-500" />,
    tagline: 'Intelligent Automation Bot',
    description: 'Multi-purpose AI bot for customer service, lead generation, and workflow automation',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: 'https://agentlybot.com'
  }
];

const googleDriveVideoIds = [
  '1-hcGC03zlTeepscMDqiIrts1l4I1KVML',
  '1-hdYvYkJKj1q2h9yYh3mkZpB8MvLQPBs',
  '1-h2bX5YwD_1rX3JzBR2-oEafpmXqJxZl',
  '1-fstPK5iQjY1vdW0tRpadTDDKbEPQqwk',
];

const Showcase = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Our Assets - moved from CourseCards */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">
              Our Assets
            </h3>
            <p className="text-gray-600">
              Real projects, real results from our AI-powered courses
            </p>
          </div>
          {/* Google Drive Videos Tray */}
          <div className="mb-12">
            <h4 className="text-xl font-poppins font-bold text-gray-800 mb-6 text-center">Our Video Assets</h4>
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {googleDriveVideoIds.map((id, idx) => (
                <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative w-full h-64">
                    <iframe
                      src={`https://drive.google.com/file/d/${id}/preview`}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay"
                      title={`Video Asset ${idx + 1}`}
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-4">
              Ready to build your own AI-powered applications?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of students who have already transformed their careers with our comprehensive AI and development courses.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-poppins font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => window.open('https://rzp.io/rzp/L7plMZLU', '_blank')}
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;