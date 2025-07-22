import React from 'react';
import { Phone, Mail, Instagram, Linkedin, Github, Rocket } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      href: '#',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: '#',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: '#',
      color: 'from-gray-700 to-gray-800'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-mint/30 via-peach/30 to-lavender/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We're here to help you start your AI journey
          </p>
        </div>

        {/* Horizontal Contact Info */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 relative overflow-hidden flex flex-col justify-between animate-fade-in">
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-mint/20 to-lavender/20 rounded-full blur-lg animate-float"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-peach/20 to-mint/20 rounded-full blur-md animate-drift"></div>
            <h3 className="text-2xl font-poppins font-bold text-gray-800 mb-8 flex items-center gap-2">
              <Rocket className="w-6 h-6 text-purple-500 animate-bounce-gentle" />
              Ready to Transform Your Career?
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-inter">Call us directly</p>
                  <a
                    href="tel:7095288950"
                    className="text-lg font-poppins font-semibold text-gray-800 hover:text-green-600 transition-colors duration-200"
                  >
                    +91 70952 88950
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-inter">Send us an email</p>
                  <a
                    href="mailto:nithindidigam@gmail.com"
                    className="text-lg font-poppins font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 break-all"
                  >
                    nithindidigam@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-poppins font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-pink-500 animate-pulse-glow" />
                Follow Us
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-float`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            {/* Enrollment CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 flex items-center gap-4 animate-fade-in">
              <Rocket className="w-8 h-8 text-purple-500 animate-bounce-gentle" />
              <div className="flex-1">
                <h4 className="font-poppins font-semibold text-gray-800 mb-2">
                  Start Your Journey Today
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Join hundreds of students already transforming their careers with AI skills.
                </p>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-poppins font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                  Enroll Now - ₹499
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;