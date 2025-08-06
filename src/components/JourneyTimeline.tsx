import React, { useEffect, useRef, useState } from 'react';
import { User, BookOpen, Trophy, Briefcase, Sparkles, Rocket, Users } from 'lucide-react';

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: <User className="w-8 h-8 animate-bounce-gentle text-blue-500" />,
    title: 'Begin as a Fresher',
    description: 'Start your journey with zero experience. We welcome complete beginners.'
  },
  {
    id: 2,
    icon: <BookOpen className="w-8 h-8 animate-float text-purple-500" />,
    title: 'Learn with Us',
    description: 'Master content creation using the latest AI tools and hands-on projects.'
  },
  {
    id: 3,
    icon: <Trophy className="w-8 h-8 animate-pulse-glow text-yellow-500" />,
    title: 'Showcase Skills in Public',
    description: 'Build an impressive portfolio and establish your presence on social media.'
  },
  {
    id: 4,
    icon: <Briefcase className="w-8 h-8 animate-wiggle text-green-500" />,
    title: 'Land Your Dream Job',
    description: 'Get hired by top companies with confidence and a proven skill set in AI content creation.'
  }
];

const stepColors = [
  'bg-cyan-500',
  'bg-yellow-400',
  'bg-green-500',
  'bg-purple-500'
];
const stepBoxColors = [
  'bg-cyan-100',
  'bg-yellow-100',
  'bg-green-100',
  'bg-purple-100'
];

const JourneyTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps((prev) => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="journey" className="py-20 px-4 bg-gradient-to-br from-mint/20 via-peach/20 to-lavender/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            Your Journey to Success
          </h2>
          <p className="text-xl text-gray-600">
            Transform from a complete beginner to a confident professional in just months
          </p>
        </div>
        {/* Roadmap as cards in a row with connecting line */}
        <div className="relative flex flex-col items-center">
          {/* Horizontal connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 z-0" style={{transform: 'translateY(-50%)'}}></div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full relative z-10 gap-10 md:gap-20">
            {steps.map((step, idx) => (
              <div key={step.id} className={`flex flex-col items-center bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-8 w-full min-w-[220px] max-w-[240px] md:w-60 md:h-64 h-60 justify-center z-10`}>
                <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-lg font-bold ${stepColors[idx]} shadow-lg border-4 border-white mb-4`}>{step.id}</div>
                <div className="mb-2">{step.icon}</div>
                <h3 className="font-poppins font-bold text-lg text-gray-800 mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;