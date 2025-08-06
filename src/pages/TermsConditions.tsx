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
          <p className="text-gray-600 mt-2">Effective Date: 7/08/2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          
          {/* Acceptance */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">1. Acceptance</h2>
            <p className="text-gray-600 leading-relaxed">
              By using this site and making a purchase, you agree to these Terms and our Privacy Policy.
            </p>
          </div>

          {/* Services & Payment */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">2. Services & Payment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We sell access to video-based learning courses. Payments are processed via Razorpay's platform. 
              Usage of Razorpay is governed by their Terms & Conditions.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800 font-semibold">Third-Party Services:</p>
              <ul className="list-disc list-inside text-blue-700 space-y-1 ml-4 mt-2">
                <li>Razorpay (payment processing)</li>
              </ul>
            </div>
          </div>

          {/* User Obligations */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-purple-500" />
              3. User Obligations
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You must provide accurate information. You agree not to use the service unlawfully or infringe 
              intellectual property rights. Violating activity may result in suspension or termination without liability.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-yellow-800 font-semibold">Third-Party Services:</p>
              <ul className="list-disc list-inside text-yellow-700 space-y-1 ml-4 mt-2">
                <li>Razorpay (payment processing)</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All course content and site design are our intellectual property. You receive a limited license 
              to access content for personal use only. Any unauthorized redistribution is prohibited.
            </p>
          </div>

          {/* Liability Limitation */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">5. Liability Limitation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our liability—whether in contract, tort, or otherwise—will not exceed the amount you paid for the course. 
              We disclaim indirect, incidental, or consequential damages.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 font-semibold">Third-Party Services:</p>
              <ul className="list-disc list-inside text-green-700 space-y-1 ml-4 mt-2">
                <li>Razorpay (payment processing)</li>
              </ul>
            </div>
          </div>

          {/* Modifications to Terms */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">6. Modifications to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may change these Terms at any time by updating this page. Continued use constitutes acceptance.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">7. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              Indian law governs these Terms. Disputes to be resolved by Hyderabad courts.
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
              <p className="text-gray-600">hello@nhancio.com</p>
              <p className="text-gray-800 font-semibold mt-2">Address:</p>
              <p className="text-gray-600">Nhancio Technologies Pvt Ltd<br />
              Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions; 