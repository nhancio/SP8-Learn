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
    id: 'react-ai',
    title: 'React App Development with AI',
    icon: <Code2 className="w-8 h-8" />,
    details: [
      'Build a full fledged web application UI',
      'Setup the authentication, backend configurations, functions',
      'Deploy the application and link the domain',
      'Publish'
    ],
    benefits: [
      'Expert guidance from IIT Kanpur Alumni',
      'Projects to add in your resume',
      'Live hands-on experience to build the future',
      '  community and networking opportunity',
      'Potential internship and full-time opportunities'
    ]
  },
  {
    id: 'content-ai',
    title: 'Content Creation using AI',
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
      '  community and networking opportunity',
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            Transform Your Career with AI-Powered Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-ready training with expert mentorship from IIT Kanpur alumni and hands-on project experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-[1.02] group relative overflow-hidden"
            >
              {/* Floating background elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-mint/20 to-lavender/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-peach/20 to-mint/20 rounded-full blur-lg animate-drift"></div>
              
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

              {/* What You Get */}
              <div className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
                <h4 className="font-poppins font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-purple-500" />
                  What You Get:
                </h4>
                <ul className="space-y-2">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                      {benefitIcons[index]}
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Preview */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {course.id === 'react-ai' ? (
                    <>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">React</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">OpenAI</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">JavaScript</span>
                    </>
                  ) : (
                    <>
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium">ChatGPT</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">Midjourney</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">Canva</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Adobe</span>
                    </>
                  )}
                </div>
              </div>

              {/* Course Stats */}

              {/* Action Button */}
              <button onClick={handleEnroll} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-poppins font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow group-hover:scale-105">
                <Rocket className="w-5 h-5" />
                Enroll Now - ₹499
              </button>
            </div>
          ))}
        </div>
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
    </section>
  );
};

export default CourseCards;