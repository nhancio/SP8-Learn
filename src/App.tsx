import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import CourseCards from './components/CourseCards';
import JourneyTimeline from './components/JourneyTimeline';
import NewsSection from './components/NewsSection';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyUs from './components/WhyUs';
import { AlertTriangle } from 'lucide-react';

function RegistrationCountdown() {
  // Set your registration closing date/time here (YYYY-MM-DDTHH:MM:SSZ)
  const deadline = new Date('2024-07-31T23:59:59Z').getTime();
  const [timeLeft, setTimeLeft] = useState(deadline - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(deadline - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((timeLeft / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60));

  return (
    <div className="w-full bg-red-700 text-white py-4 px-2 flex flex-col items-center justify-center text-center">
      <div className="flex items-center justify-center gap-2 text-lg md:text-2xl font-bold mb-2">
        <AlertTriangle className="w-6 h-6 text-yellow-300 animate-wiggle" />
        Registration Closing in...
      </div>
      <div className="flex gap-6 justify-center text-lg md:text-xl tracking-widest font-mono">
        <div><span className="block text-2xl md:text-3xl font-bold">{days}</span><span className="text-xs md:text-sm">DAYS</span></div>
        <div><span className="block text-2xl md:text-3xl font-bold">{hours}</span><span className="text-xs md:text-sm">HOURS</span></div>
        <div><span className="block text-2xl md:text-3xl font-bold">{minutes}</span><span className="text-xs md:text-sm">MINUTES</span></div>
        <div><span className="block text-2xl md:text-3xl font-bold">{seconds}</span><span className="text-xs md:text-sm">SECONDS</span></div>
      </div>
    </div>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-light-gray font-inter transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <RegistrationCountdown />
      <Hero />
      <WhyUs />
      <CourseCards />
      <JourneyTimeline />
      <NewsSection />
      <Showcase />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;