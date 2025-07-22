import React, { useState } from 'react';
import { Check, Sparkles, Award, Users, Briefcase, Rocket, Network } from 'lucide-react';

const Pricing = () => {
  const benefits = [
    { icon: <Award className="w-5 h-5" />, text: "Expert guidance from IIT Kanpur Alumni" },
    { icon: <Briefcase className="w-5 h-5" />, text: "Projects to add in your resume" },
    { icon: <Rocket className="w-5 h-5" />, text: "Live hands-on experience to build the future" },
    { icon: <Users className="w-5 h-5" />, text: "  community and networking opportunity" },
    { icon: <Network className="w-5 h-5" />, text: "Potential internship and full-time opportunities" }
  ];

  const handleEnroll = () => {
    // Scroll to contact section or handle enrollment
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-mint/30 to-lavender/30 rounded-full blur-xl animate-drift"></div>
      <div className="absolute top-1/2 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-twinkle"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-purple-600 font-poppins font-semibold">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            Just ₹499
          </h2>
          <p className="text-2xl text-gray-600 mb-6">
            Less than a meal with friends
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Invest in your future - less than a dinner out, but worth a lifetime of opportunities.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
          {/* Floating elements inside card */}
          <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-full blur-lg animate-float"></div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-center">
            <h3 className="text-2xl font-poppins font-bold text-white mb-4">
              Complete AI + Development Bundle
            </h3>
            <div className="flex items-center justify-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>React + AI Course</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Content Creation Course</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* What You Get Section */}
            <div className="mb-8">
              <h4 className="text-xl font-poppins font-bold text-gray-800 mb-6 text-center">
                What You Get:
              </h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700 font-inter font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h5 className="font-poppins font-semibold text-gray-800 mb-3">React + AI Course</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    8+ Real-world projects
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    AI API integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Deployment & hosting
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h5 className="font-poppins font-semibold text-gray-800 mb-3">Content Creation</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    AI content automation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Video editing workflows
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Monetization strategies
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-poppins font-semibold text-gray-800">Total Investment:</span>
                <div className="text-right">
                  <span className="text-3xl font-poppins font-bold text-purple-600">₹499</span>
                  <p className="text-sm text-gray-500">One-time payment • Lifetime access</p>
                </div>
              </div>

              <button
                onClick={handleEnroll}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-8 rounded-2xl font-poppins font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-3 animate-pulse-glow"
              >
                <Rocket className="w-6 h-6" />
                Enroll Now - ₹499
              </button>

              <div className="grid grid-cols-3 gap-4 mt-6 text-center text-sm text-gray-500">
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Secure Payment
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Instant Access
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;