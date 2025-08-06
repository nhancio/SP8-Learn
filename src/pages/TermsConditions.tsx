import React from 'react';
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';

const TermsConditions = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-poppins font-bold text-gray-800">Terms & Conditions</h1>
          </div>
          <p className="text-gray-600 mt-2">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms and Conditions govern your use of Nhancio's AI Video Making course and related services. 
              By accessing or using our services, you agree to be bound by these terms. If you disagree with any 
              part of these terms, you may not access our services.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-purple-500" />
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By enrolling in our AI Video Making course, you acknowledge that you have read, understood, and agree 
              to be bound by these Terms and Conditions. These terms apply to all users of our services, including 
              students, instructors, and visitors.
            </p>
          </div>

          {/* Course Access and Usage */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Course Access and Usage</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">License</h3>
                <p className="text-gray-600 leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable license to access and use our course 
                  materials for personal, non-commercial educational purposes only.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Restrictions</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>You may not share, distribute, or resell course materials</li>
                  <li>You may not reverse engineer or attempt to extract source code</li>
                  <li>You may not use our services for any illegal or unauthorized purpose</li>
                  <li>You may not interfere with or disrupt our services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Payment Terms</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Course Fees</h3>
                <p className="text-gray-600 leading-relaxed">
                  Course fees are payable in advance. All prices are in Indian Rupees (₹) and are subject to 
                  applicable taxes. Payment is processed securely through our payment partners.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Refund Policy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Please refer to our separate Refund Policy for detailed information about refund eligibility 
                  and procedures.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All content, materials, and intellectual property in our courses are owned by Nhancio or our 
              licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Course materials are for personal use only</li>
              <li>You may not reproduce, distribute, or create derivative works</li>
              <li>Your own projects created during the course remain your property</li>
              <li>We may use anonymized student work for promotional purposes</li>
            </ul>
          </div>

          {/* User Conduct */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-purple-500" />
              User Conduct
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree to use our services in a manner that is lawful, respectful, and appropriate. 
              Prohibited activities include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Harassment or discrimination of other users</li>
              <li>Sharing inappropriate or offensive content</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Violating any applicable laws or regulations</li>
              <li>Interfering with the learning experience of others</li>
            </ul>
          </div>

          {/* Disclaimers */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Disclaimers</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Educational Content</h3>
                <p className="text-gray-600 leading-relaxed">
                  While we strive to provide accurate and up-to-date information, we make no guarantees about 
                  the completeness, accuracy, or reliability of our course content. The information is provided 
                  "as is" for educational purposes only.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Career Outcomes</h3>
                <p className="text-gray-600 leading-relaxed">
                  We cannot guarantee specific career outcomes, job placements, or salary increases. Success 
                  depends on individual effort, market conditions, and other factors beyond our control.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the maximum extent permitted by law, Nhancio shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to loss of profits, data, 
              or use, arising out of or relating to your use of our services.
            </p>
          </div>

          {/* Termination */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-purple-500" />
              Termination
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may terminate or suspend your access to our services at any time, with or without cause, 
              with or without notice. Upon termination, your right to use our services will cease immediately.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You may terminate your account at any time by contacting our support team. Upon termination, 
              certain provisions of these terms will continue to apply.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. We will notify users 
              of any material changes by posting the new terms on our website. Your continued use of our 
              services after such changes constitutes acceptance of the new terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
              Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts 
              in [Your City], India.
            </p>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-800 font-semibold">Email:</p>
              <p className="text-gray-600">legal@nhancio.com</p>
              <p className="text-gray-800 font-semibold mt-2">Address:</p>
              <p className="text-gray-600">Nhancio Education Pvt Ltd<br />
              [Your Business Address]<br />
              India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions; 