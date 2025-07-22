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

const instagramReelIds = [
  'DMYbu59z0Ox', // Replace with actual Reel IDs
  'DMYY3ffzTKm',
  'DMYLZZDTWVp',
  'DMYJyk5ztn7',
];

const Showcase = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            Built with Nhancio + AI
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real content creation projects built by our students and instructors using the latest AI tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-[1.02] cursor-pointer flex flex-col animate-fade-in"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={`${project.image}&sig=${Math.random()}`}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Floating tech particles */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-twinkle"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-6 left-8 w-2 h-2 bg-pink-400 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  <ExternalLink className="w-5 h-5 text-white animate-float" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-mint to-lavender rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300 animate-float">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-bold text-gray-800 flex items-center gap-2">
                      {project.name}
                      <Sparkles className="w-4 h-4 text-yellow-400 animate-twinkle" />
                    </h3>
                    <p className="text-sm text-purple-600 font-inter font-medium">
                      {project.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>

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
          {/* Instagram Reels Tray */}
          <div className="mb-12">
            <h4 className="text-xl font-poppins font-bold text-gray-800 mb-6 text-center">Our Instagram Reels</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {instagramReelIds.map((id, idx) => (
                <div key={id} className="bg-white rounded-xl shadow-lg overflow-hidden w-[220px] h-[400px] flex items-center justify-center">
                  <iframe
                    src={`https://www.instagram.com/reel/${id}/embed`}
                    width="220"
                    height="400"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={`Instagram Reel ${idx + 1}`}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop&auto=format&q=80&sig=${Math.random()}`}
                  alt="Students coding with AI"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">React + AI Development</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format&q=80&sig=${Math.random()}`}
                  alt="Content creation workspace"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">AI Content Creation</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&auto=format&q=80&sig=${Math.random()}`}
                  alt="Team collaboration"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold">Collaborative Learning</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-56 bg-gray-900 flex items-center justify-center">
                <img
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&auto=format&q=80&sig=${Math.random()}`}
                  alt="Coding tutorial preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-poppins font-semibold text-gray-800 mb-2">React + AI Course Preview</h4>
                <p className="text-sm text-gray-600">Watch how we integrate AI APIs into React applications</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-56 bg-gray-900 flex items-center justify-center">
                <img
                  src={`https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format&q=80&sig=${Math.random()}`}
                  alt="Content creation tutorial"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-poppins font-semibold text-gray-800 mb-2">Content Creation Masterclass</h4>
                <p className="text-sm text-gray-600">Learn AI-powered content automation techniques</p>
              </div>
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
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-poppins font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;