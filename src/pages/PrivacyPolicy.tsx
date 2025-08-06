import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Users } from 'lucide-react';

const PrivacyPolicy = () => {
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
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-poppins font-bold text-gray-800">Privacy Policy</h1>
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
              At Nhancio, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              AI Video Making course and related services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-purple-500" />
              Information We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Payment and billing information</li>
                  <li>Educational background and experience</li>
                  <li>Course progress and completion data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Technical Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Usage data and analytics</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-purple-500" />
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Provide and maintain our educational services</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send important course updates and notifications</li>
              <li>Improve our course content and user experience</li>
              <li>Provide customer support and technical assistance</li>
              <li>Comply with legal obligations and regulations</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in our operations</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-purple-500" />
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, 
              secure servers, and regular security assessments.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Access and review your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Request data portability</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-800 font-semibold">Email:</p>
              <p className="text-gray-600">privacy@nhancio.com</p>
              <p className="text-gray-800 font-semibold mt-2">Address:</p>
              <p className="text-gray-600">Nhancio Education Pvt Ltd<br />
              [Your Business Address]<br />
              India</p>
            </div>
          </div>

          {/* Updates */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this 
              Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 