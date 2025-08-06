import React from 'react';
import { ArrowLeft, RefreshCw, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const RefundPolicy = () => {
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
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-poppins font-bold text-gray-800">Refund Policy</h1>
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
              At Nhancio, we are committed to providing high-quality educational experiences. We understand that 
              sometimes circumstances may require a refund. This policy outlines our refund terms and conditions 
              for our AI Video Making course.
            </p>
          </div>

          {/* Refund Eligibility */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Refund Eligibility
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-green-800 mb-2">✅ Full Refund (100%)</h3>
                <p className="text-green-700 leading-relaxed">
                  Available within 7 days of purchase if you haven't accessed more than 20% of the course content.
                </p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-yellow-800 mb-2">⚠️ Partial Refund (50%)</h3>
                <p className="text-yellow-700 leading-relaxed">
                  Available within 14 days of purchase if you've accessed between 20-50% of the course content.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-red-800 mb-2">❌ No Refund</h3>
                <p className="text-red-700 leading-relaxed">
                  After 14 days or if you've accessed more than 50% of the course content.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Timeline */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-purple-500" />
              Refund Timeline
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-poppins font-semibold text-gray-800 mb-2">Submit Request</h3>
                <p className="text-gray-600 text-sm">Contact our support team with your refund request</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-poppins font-semibold text-gray-800 mb-2">Review Process</h3>
                <p className="text-gray-600 text-sm">We review your request within 3-5 business days</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-poppins font-semibold text-gray-800 mb-2">Process Refund</h3>
                <p className="text-gray-600 text-sm">Refund processed within 7-10 business days</p>
              </div>
            </div>
          </div>

          {/* How to Request a Refund */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">How to Request a Refund</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-blue-800 mb-2">Step 1: Contact Support</h3>
                <p className="text-blue-700 leading-relaxed">
                  Email us at support@nhancio.com with the subject line "Refund Request" and include:
                </p>
                <ul className="list-disc list-inside text-blue-700 space-y-1 ml-4 mt-2">
                  <li>Your full name and email address</li>
                  <li>Order number or transaction ID</li>
                  <li>Reason for refund request</li>
                  <li>Date of purchase</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-green-800 mb-2">Step 2: Provide Information</h3>
                <p className="text-green-700 leading-relaxed">
                  Our team will review your request and may ask for additional information to process your refund.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-purple-800 mb-2">Step 3: Refund Processing</h3>
                <p className="text-purple-700 leading-relaxed">
                  Once approved, your refund will be processed to the original payment method within 7-10 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Refundable Circumstances */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-500" />
              Non-Refundable Circumstances
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Course completion beyond 50%</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Requests made after 14 days from purchase</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Violation of our Terms of Service</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Sharing or distributing course materials</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Technical issues on user's device or internet</p>
              </div>
            </div>
          </div>

          {/* Special Circumstances */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
              Special Circumstances
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may consider refunds in special circumstances such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Technical issues on our platform preventing course access</li>
              <li>Medical emergencies with proper documentation</li>
              <li>Course cancellation by Nhancio</li>
              <li>Duplicate purchases or billing errors</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Each case will be evaluated individually, and decisions are made at our discretion.
            </p>
          </div>

          {/* Refund Methods */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Refund Methods</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Original Payment Method</h3>
                <p className="text-gray-600 leading-relaxed">
                  Refunds are processed to the original payment method used for the purchase. This may include 
                  credit cards, debit cards, UPI, or other digital payment methods.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Processing Time</h3>
                <p className="text-gray-600 leading-relaxed">
                  Refunds typically appear in your account within 7-10 business days, depending on your bank 
                  or payment processor.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about our refund policy or need to request a refund, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Email Support</h3>
                <p className="text-gray-600">support@nhancio.com</p>
                <p className="text-gray-500 text-sm mt-1">Response within 24 hours</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-gray-500 text-sm">9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Refund Policy from time to time. We will notify users of any changes by posting 
              the new policy on our website and updating the "Last updated" date. Changes will be effective 
              immediately upon posting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy; 