import React from "react";
import ContactForm from "./ContactForm";

const ContactFormResponsive: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-sm rounded-lg p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Contact Us
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactFormResponsive;
