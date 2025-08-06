import React, { useState } from 'react';
import { Code2, Brain, Lightbulb, Rocket, Users, Award, Briefcase, Network, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  icon: React.ReactNode;
  details: string[];
  benefits: string[];
}

const courses: Course[] = [
  {
    id: 'content-ai',
    title: 'AI Video Making',
    icon: <Brain className="w-8 h-8" />,
    details: [
      'Create stunning images using latest AI models',
      'Create graphical and visually pleasing videos',
      'Create social media automations using agents'
    ],
    benefits: [
      'Expert guidance from IIT Kanpur Alumni',
      'Projects to add in your resume',
      'Live hands-on experience to build the future',
      'Nhancio community and networking opportunity',
      'Potential internship and full-time opportunities'
    ]
  }
];

const CourseCards = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleExpand = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const benefitIcons = [
    <Award className="w-5 h-5 text-purple-500" />,
    <Briefcase className="w-5 h-5 text-purple-500" />,
    <Rocket className="w-5 h-5 text-purple-500" />,
    <Users className="w-5 h-5 text-purple-500" />,
    <Network className="w-5 h-5 text-purple-500" />
  ];

  const handleEnroll = () => {
    window.open('https://rzp.io/l/ 499', '_blank'); // Replace with your actual Razorpay payment link
  };

  return (
    <section id="courses" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading and Subheading - Full Width */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            AI Video making course
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-ready training with expert mentorship from IIT Kanpur alumni and hands-on AI video creation experience
          </p>
        </div>

        {/* Full Width Course Card */}
        <div className="w-full">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-[1.02] group relative overflow-hidden"
            >
              {/* Floating background elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-mint/20 to-lavender/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-peach/20 to-mint/20 rounded-full blur-lg animate-drift"></div>
              
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Course Content */}
                <div className="flex-1">
                  {/* Course Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-mint to-lavender rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  {/* Course Title */}
                  <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-6">
                    {course.title}
                  </h3>
                  {/* Course Details */}
                  <div className="mb-6">
                    <h4 className="font-poppins font-semibold text-gray-800 mb-3">What you'll learn:</h4>
                    <ul className="space-y-2 mb-6">
                      {course.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Tech Stack Preview */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">Shorts</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Product Videos</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Reels</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Characters</span>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Video Preview */}
                <div className="flex-1">
                  <h4 className="font-poppins font-semibold text-gray-800 mb-3">Course Preview:</h4>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <iframe
                      src="https://drive.google.com/file/d/1M_UuJudk307GRnNLIa3RBx7Zo-1FhlEi/preview"
                      width="100%"
                      height="300"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="AI Video Making Course Preview"
                      frameBorder="0"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              {/* Action Button - Full Width */}
              <div className="mt-8">
                <button onClick={handleEnroll} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-poppins font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow group-hover:scale-105">
                  <Rocket className="w-5 h-5" />
                  Enroll Now - ₹499
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* What You Get Section - separate and highlighted */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-10 text-white shadow-2xl border border-purple-200 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-6 text-center">What You Get</h3>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><Rocket className="w-6 h-6" /></span>
                Expert guidance from IIT Kanpur Alumni
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><Users className="w-6 h-6" /></span>
                Projects to add in your resume
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><Sparkles className="w-6 h-6" /></span>
                Live hands-on experience to build the future
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><BookOpen className="w-6 h-6" /></span>
                community and networking opportunity
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><Rocket className="w-6 h-6" /></span>
                Potential internship and full-time opportunities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCards;