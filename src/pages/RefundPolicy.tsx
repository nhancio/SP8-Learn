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
          <p className="text-gray-600 mt-2">Last Updated: 7/08/2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          
          {/* General Refund Rules */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">1. General Refund Rules</h2>
            <p className="text-gray-600 leading-relaxed">
              You may request a refund within 30 days of purchase.
            </p>
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-800 font-semibold">Important:</p>
              <p className="text-red-700">After 30 days, refunds may not be granted.</p>
            </div>
          </div>

          {/* Refund Eligibility */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-500" />
              2. Refund Eligibility
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-green-800 mb-2">✅ Eligible for Refund</h3>
                <p className="text-green-700 leading-relaxed">
                  Applicable only if course content hasn't been fully accessed or downloaded.
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-red-800 mb-2">❌ Not Eligible</h3>
                <p className="text-red-700 leading-relaxed">
                  In case of any refunds approved by NHANCIO TECHNOLOGIES PRIVATE LIMITED, it will take 7 days for the refund to be Credited  to you.
                  Refunds not applicable for digital content already consumed.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Process */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-purple-500" />
              3. Refund Process
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-blue-800 mb-2">Step 1: Email Request</h3>
                <p className="text-blue-700 leading-relaxed">
                  Email refund requests to hello@nhancio.com. Include order ID and reason.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-poppins font-semibold text-green-800 mb-2">Step 2: Processing</h3>
                <p className="text-green-700 leading-relaxed">
                  Refunds are processed via Razorpay and typically reflect within 5–7 working days.
                </p>
                <div className="mt-3 p-3 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-semibold text-sm">Third-Party Services:</p>
                  <ul className="list-disc list-inside text-green-700 space-y-1 ml-4 mt-1 text-sm">
                    <li>Razorpay (payment processing)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Fees & Deductions */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">4. Fees & Deductions</h2>
            <p className="text-gray-600 leading-relaxed">
              The payment gateway processing fee and applicable taxes (e.g., GST or Razorpay charges) are non‑refundable.
            </p>
          </div>

          {/* Refund Method */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">5. Refund Method</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Refund amount is credited back to the original payment method only (credit/debit card, UPI, etc.), 
              as per Razorpay policy.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-yellow-800 font-semibold">Third-Party Services:</p>
              <ul className="list-disc list-inside text-yellow-700 space-y-1 ml-4 mt-2">
                <li>Razorpay (payment processing)</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about our refund policy or need to request a refund, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <p className="text-gray-800 font-semibold">Email:</p>
              <p className="text-gray-600">hello@nhancio.com</p>
              <p className="text-gray-800 font-semibold mt-2">Business Hours:</p>
              <p className="text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy; 