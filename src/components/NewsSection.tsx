import React from 'react';
import { TrendingUp, Users, Briefcase, Zap } from 'lucide-react';

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: "AI Skills Gap: 85% of Jobs Will Require AI Knowledge by 2025",
      source: "TechCrunch",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Companies are struggling to find talent with AI and automation skills as demand skyrockets.",
      category: "Future of Work"
    },
    {
      id: 2,
      title: "React Developers with AI Skills Command 40% Higher Salaries",
      source: "Stack Overflow Survey",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Latest developer survey reveals AI integration skills are the most in-demand tech competency.",
      category: "Salary Trends"
    },
    {
      id: 3,
      title: "Content Creators Using AI Tools See 300% Growth in Engagement",
      source: "Social Media Today",
      image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "AI-powered content creation tools are revolutionizing how creators engage with audiences.",
      category: "Creator Economy"
    },
    {
      id: 4,
      title: "Indian IT Sector to Create 2.5M AI Jobs by 2025",
      source: "Economic Times",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      excerpt: "Government initiatives and private sector investment driving massive AI job creation.",
      category: "Job Market"
    }
  ];

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, value: "300%", label: "Job Growth in AI" },
    { icon: <Users className="w-6 h-6" />, value: "2.5M", label: "New AI Jobs by 2025" },
    { icon: <Briefcase className="w-6 h-6" />, value: "40%", label: "Higher Salaries" },
    { icon: <Zap className="w-6 h-6" />, value: "85%", label: "Jobs Need AI Skills" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            The AI Revolution is Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't get left behind. Industry reports show AI skills are becoming essential for career growth and job security.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-poppins font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 font-inter">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* News Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:scale-[1.02] cursor-pointer"
            >
              {/* Article Image */}
              <div className="relative overflow-hidden h-40">
                <img
                  src={`${article.image}&sig=${Math.random()}`}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-4">
                <div className="text-xs text-purple-600 font-medium mb-2">{article.source}</div>
                <h3 className="text-sm font-poppins font-bold text-gray-800 mb-2 line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-600 font-inter leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg animate-drift"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">
                Don't Wait. The Future is Now.
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                Join thousands of professionals who are already future-proofing their careers with AI skills.
              </p>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Start Your AI Journey Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;