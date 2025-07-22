import React from 'react';
import { Brain, Code2, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-peach via-mint to-lavender flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float">
        <img
          src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop&auto=format&q=80&sig=${Math.random()}`}
          alt="Space technology"
          className="w-full h-full object-cover rounded-full opacity-20"
        />
      </div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-lavender/20 rounded-full blur-2xl animate-drift" style={{animationDelay: '1s'}}>
        <img
          src={`https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=200&fit=crop&auto=format&q=80&sig=${Math.random()}`}
          alt="AI technology"
          className="w-full h-full object-cover rounded-full opacity-20"
        />
      </div>
      
      {/* Space Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-300 rounded-full animate-twinkle"></div>
      <div className="absolute top-40 left-10 w-2 h-2 bg-blue-300 rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-40 right-10 w-3 h-3 bg-purple-300 rounded-full animate-twinkle" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-60 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
      
      {/* Floating Tech Icons */}
      <div className="absolute top-32 left-1/3 animate-orbit opacity-20">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
          <Code2 className="w-4 h-4 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 right-1/3 animate-orbit opacity-20" style={{animationDelay: '10s', animationDirection: 'reverse'}}>
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg flex items-center justify-center">
          <Brain className="w-4 h-4 text-white" />
        </div>
      </div>
      
      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Logo Animation */}
        <div className="mb-8 animate-slide-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Brain className="w-10 h-10 text-purple-600 animate-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-gray-800 mb-4 leading-tight">
            Level Up Your Career with
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> AI + Hands-On Skills</span>
          </h1>
        </div>

        {/* Subheader */}
        <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
          <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-gray-700 mb-8 flex items-center justify-center flex-wrap gap-4">
            <span className="flex items-center gap-2">
              <Code2 className="w-6 h-6" />
              React App Development
            </span>
            <span className="text-gray-400">●</span>
            <span className="flex items-center gap-2">
              <Brain className="w-6 h-6" />
              Content Creation
            </span>
          </h2>
        </div>

        {/* Quote */}
        <div className="animate-fade-in mb-12" style={{animationDelay: '0.6s'}}>
          <blockquote className="text-xl md:text-2xl font-inter italic text-gray-600 bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            "AI will make smart people smarter and broke people more broke. Choose your side."
          </blockquote>
        </div>

        {/* CTA Buttons */}
        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{animationDelay: '0.9s'}}>
          <button
            onClick={() => scrollToSection('courses')}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:animate-wiggle"
          >
            Enroll in React + AI
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('courses')}
            className="group bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:animate-wiggle"
          >
            Enroll in Content Creation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;