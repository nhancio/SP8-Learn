import React from 'react';
import { Users, Rocket, Sparkles, BookOpen } from 'lucide-react';

const WhyUs = () => (
  <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/90 rounded-3xl shadow-2xl p-10 border border-purple-100 flex flex-col md:flex-row items-center gap-8 animate-fade-in">
        <div className="flex flex-col items-center md:items-start gap-4 flex-1">
          <div className="flex gap-3 mb-2">
            <Rocket className="w-8 h-8 text-purple-500 animate-bounce-gentle" />
            <Users className="w-8 h-8 text-pink-500 animate-float" />
            <Sparkles className="w-8 h-8 text-yellow-400 animate-twinkle" />
            <BookOpen className="w-8 h-8 text-green-500 animate-float" />
          </div>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-800 mb-2">Why Us?</h2>
          <p className="text-lg text-gray-700 font-inter">
            Nhancio began as a passion project by a group of IITians who wanted to make AI content creation accessible to everyone. What started as a single course has now grown into a thriving team, building real-world content projects and empowering hundreds of learners to transform their careers. Our mission is to blend hands-on learning, mentorship, and the latest AI technology to help you succeed in the digital age.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs; 