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
          <p className="text-gray-600 mt-2">Last Updated: 7/08/2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          
          {/* Overview */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">1. Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              We collect only the information necessary to provide and process your purchases (e.g. name, email, payment data). 
              Payments are processed via Razorpay; sensitive data like card details are handled by Razorpay and not stored by us. 
              Razorpay adheres to industry‑standard data protection and applicable Indian laws.
            </p>
          </div>

          {/* What We Collect */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-purple-500" />
              2. What We Collect
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Name, email, transaction history</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Usage Data</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>IP address, browser, timestamps for site operation/security</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Third-Party Services</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Razorpay (payment processing)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Purpose of Use */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-purple-500" />
              3. Purpose of Use
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To enable course purchase, delivery, customer support, fraud prevention, and occasional updates or offers via opt‑in communication.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800 font-semibold">Third-Party Services:</p>
              <ul className="list-disc list-inside text-blue-700 space-y-1 ml-4 mt-2">
                <li>Razorpay (payment processing)</li>
              </ul>
            </div>
          </div>

          {/* Data Retention & Erasure */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">4. Data Retention & Erasure</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain user data only as long as needed to fulfill transactions and regulatory obligations. On request, 
              data can be erased upon account closure.
            </p>
          </div>

          {/* Disclosure to Third Parties */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">5. Disclosure to Third Parties</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We share personal data only with Razorpay (for payment processing) and with compliance-required parties. 
              We do not sell or make your data public.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-yellow-800 font-semibold">Third-Party Services:</p>
              <ul className="list-disc list-inside text-yellow-700 space-y-1 ml-4 mt-2">
                <li>Razorpay (payment processing)</li>
              </ul>
            </div>
          </div>

          {/* Cookies & Tracking */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">6. Cookies & Tracking</h2>
            <p className="text-gray-600 leading-relaxed">
              We use essential cookies for site functionality and analytics. No tracking of sensitive personal data.
            </p>
          </div>

          {/* Policy Updates */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">7. Policy Updates</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Policy; changes will be effective immediately. Continued use implies consent.
            </p>
          </div>

          {/* Jurisdiction */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">8. Jurisdiction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Indian law applies; disputes subject to courts in Bengaluru, India.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-green-800 font-semibold">Third-Party Services:</p>
              <ul className="list-disc list-inside text-green-700 space-y-1 ml-4 mt-2">
                <li>Razorpay (payment processing)</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-800 font-semibold">Email:</p>
              <p className="text-gray-600">hello@nhancio.com</p>
              <p className="text-gray-800 font-semibold mt-2">Address:</p>
              <p className="text-gray-600">Nhancio Technologies Pvt Ltd<br />
              Bengaluru, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 