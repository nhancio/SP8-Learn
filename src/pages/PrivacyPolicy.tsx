import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

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
          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy describes how NHANCIO TECHNOLOGIES PRIVATE LIMITED and its affiliates (collectively
              "NHANCIO TECHNOLOGIES PRIVATE LIMITED, we, our, us") collect, use, share, protect or otherwise process your
              information/personal data through our website
              <a href="https://learn.nhancio.com" className="text-purple-600 hover:underline"> https://learn.nhancio.com</a>
              (hereinafter referred to as "Platform"). Please note that you may be able to browse certain sections of the
              Platform without registering with us. We do not offer any product/service under this Platform outside India and
              your personal data will primarily be stored and processed in India. By visiting this Platform, providing your
              information or availing any product/service offered on the Platform, you expressly agree to be bound by the
              terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and
              conditions, and agree to be governed by the laws of India including but not limited to the laws applicable to
              data protection and privacy. If you do not agree please do not use or access our Platform.
            </p>
          </div>

          {/* Collection */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Collection</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We collect your personal data when you use our Platform, services or otherwise interact with us during the
              course of our relationship and related information provided from time to time. Some of the information that we
              may collect includes but is not limited to personal data/information provided to us during sign-up/registering
              or using our Platform such as name, date of birth, address, telephone/mobile number, email ID and/or any such
              information shared as proof of identity or address.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              Some of the sensitive personal data may be collected with your consent, such as your bank account or credit or
              debit card or other payment instrument information or biometric information such as your facial features or
              physiological information (in order to enable use of certain features when opted for, available on the Platform)
              etc., all of the above being in accordance with applicable law(s). You always have the option to not provide
              information, by choosing not to use a particular service or feature on the Platform.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              We may track your behaviour, preferences, and other information that you choose to provide on our Platform.
              This information is compiled and analysed on an aggregated basis. We will also collect your information
              related to your transactions on the Platform and such third-party business partner platforms. When such a
              third-party business partner collects your personal data directly from you, you will be governed by their
              privacy policies. We shall not be responsible for the third-party business partner’s privacy practices or the
              content of their privacy policies, and we request you to read their privacy policies prior to disclosing any
              information.
            </p>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-yellow-800">
                If you receive an email or a call from a person/association claiming to be NHANCIO TECHNOLOGIES PRIVATE
                LIMITED seeking any personal data like debit/credit card PIN, net-banking or mobile banking password, do not
                provide such information. If you have already revealed such information, report it immediately to an
                appropriate law enforcement agency.
              </p>
            </div>
          </div>

          {/* Usage */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Usage</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We use personal data to provide the services you request. To the extent we use your personal data to market to
              you, we will provide you the ability to opt-out of such uses.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Assist sellers and business partners in handling and fulfilling orders</li>
              <li>Enhance customer experience and resolve disputes</li>
              <li>Troubleshoot problems and inform you about offers, products, services, and updates</li>
              <li>Customise your experience and detect, prevent and protect against fraud and other criminal activity</li>
              <li>Enforce our terms and conditions, conduct research/analysis/surveys</li>
              <li>As otherwise described to you at the time of collection of information</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              You understand that your access to these products/services may be affected in the event permission is not
              provided to us.
            </p>
          </div>

          {/* Sharing */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We may share your personal data internally within our group entities, our other corporate entities, and
              affiliates to provide you access to the services and products offered by them. These entities and affiliates
              may market to you as a result of such sharing unless you explicitly opt-out.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              We may disclose personal data to third parties such as sellers, business partners, third party service
              providers including logistics partners, prepaid payment instrument issuers, third-party reward programs and
              other payment methods opted by you. These disclosures may be required for us to provide you access to our
              services and products offered to you, to comply with our legal obligations, to enforce our user agreement, to
              facilitate our marketing and advertising activities, and to prevent, detect, mitigate, and investigate
              fraudulent or illegal activities related to our services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We may disclose personal and sensitive personal data to government agencies or other authorised law enforcement
              agencies if required to do so by law or in the good faith belief that such disclosure is reasonably necessary
              to respond to subpoenas, court orders, or other legal process; or to protect the rights, property or personal
              safety of our users or the general public.
            </p>
          </div>

          {/* Security Precautions */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Security Precautions</h2>
            <p className="text-gray-600 leading-relaxed">
              To protect your personal data from unauthorised access or disclosure, loss or misuse we adopt reasonable
              security practices and procedures. Once your information is in our possession or whenever you access your
              account information, we adhere to our security guidelines to protect it against unauthorised access and offer
              the use of a secure server. However, transmission of information over the internet is not completely secure
              and there are risks beyond our control. By using the Platform, you accept these security implications and are
              responsible for protecting your login and password records for your account.
            </p>
          </div>

          {/* Data Deletion and Retention */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Data Deletion and Retention</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You have an option to delete your account by visiting your profile and settings on our Platform. This action
              would result in you losing all information related to your account. You may also write to us at the contact
              information provided below to assist you with these requests. In the event of any pending grievance, claims,
              pending shipments or any other services we may refuse or delay deletion of the account.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              Once the account is deleted, you will lose access to the account. We retain your personal data information for
              a period no longer than is required for the purpose for which it was collected or as required under any
              applicable law. However, we may retain data related to you if we believe it may be necessary to prevent fraud
              or future abuse or for other legitimate purposes. We may continue to retain your data in anonymised form for
              analytical and research purposes.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You may access, rectify, and update your personal data directly through the functionalities provided on the
              Platform.
            </p>
          </div>

          {/* Consent */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Consent</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              By visiting our Platform or by providing your information, you consent to the collection, use, storage,
              disclosure and otherwise processing of your information on the Platform in accordance with this Privacy Policy.
              If you disclose to us any personal data relating to other people, you represent that you have the authority to
              do so and permit us to use the information in accordance with this Privacy Policy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              You, while providing your personal data over the Platform or any partner platforms or establishments, consent
              to us (including our other corporate entities, affiliates, lending partners, technology partners, marketing
              channels, business partners and other third parties) to contact you through SMS, instant messaging apps, call
              and/or e-mail for the purposes specified in this Privacy Policy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You have an option to withdraw your consent that you have already provided by writing to the Grievance Officer
              at the contact information provided below with the subject line "Withdrawal of consent for processing personal
              data". We may verify such requests before acting on them. Please note that withdrawal of consent will not be
              retrospective and will be in accordance with the Terms of Use, this Privacy Policy, and applicable laws. In the
              event you withdraw consent given to us under this Privacy Policy, we reserve the right to restrict or deny the
              provision of our services for which we consider such information to be necessary.
            </p>
          </div>

          {/* Changes to this Privacy Policy */}
          <div className="mb-8">
            <h2 className="text-2xl font-poppins font-bold text-gray-800 mb-4">Changes to this Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes
              to our information practices. We may alert/notify you about the significant changes to the Privacy Policy, in
              the manner as may be required under applicable laws.
            </p>
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
              <p className="text-gray-600">NHANCIO TECHNOLOGIES PRIVATE LIMITED<br />
              Bengaluru, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 