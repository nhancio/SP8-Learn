import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Zap, Bot, Home, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

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

const driveVideoLinks = [
  // Google Drive video links in embed format
  // Format: https://drive.google.com/file/d/FILE_ID/preview
  'https://drive.google.com/file/d/1-fstPK5iQjY1vdW0tRpadTDDKbEPQqwk/preview',
  'https://drive.google.com/file/d/1-hdYvYkJKj1q2h9yYh3mkZpB8MvLQPBs/preview',
  'https://drive.google.com/file/d/1-hcGC03zlTeepscMDqiIrts1l4I1KVML/preview',
  'https://drive.google.com/file/d/1-h2bX5YwD_1rX3JzBR2-oEafpmXqJxZl/preview',
];

const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < driveVideoLinks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === driveVideoLinks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? driveVideoLinks.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="showcase" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Google Drive Videos Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            Our Student Video Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real content creation projects built by our students and instructors using the latest AI tools
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-wrap justify-center gap-8">
          {driveVideoLinks.map((link, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden w-[480px] h-[270px] flex items-center justify-center">
              <iframe
                src={link}
                width="480"
                height="270"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`Student Project Video ${idx + 1}`}
                frameBorder="0"
              ></iframe>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div 
            ref={carouselRef}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel Container */}
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {driveVideoLinks.map((link, idx) => (
                <div 
                  key={idx} 
                  className="w-full flex-shrink-0 bg-white flex items-center justify-center"
                  style={{ minHeight: '70vh' }}
                >
                  <div className="w-full max-w-lg mx-auto p-4">
                    <iframe
                      src={link}
                      width="100%"
                      height="200"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={`Student Project Video ${idx + 1}`}
                      frameBorder="0"
                      className="rounded-xl shadow-lg"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 z-10"
              aria-label="Previous video"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 z-10"
              aria-label="Next video"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {driveVideoLinks.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    idx === currentIndex 
                      ? 'bg-white shadow-lg scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to video ${idx + 1}`}
                />
              ))}
            </div>

            {/* Video Counter */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-10">
              {currentIndex + 1} / {driveVideoLinks.length}
            </div>
          </div>

          {/* Swipe Instructions */}
          <div className="text-center mt-6 text-gray-600 text-sm">
            <p className="flex items-center justify-center gap-2">
              <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">←</span>
              Swipe to navigate
              <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">→</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;