"use client";

import React, { useState } from "react";
import { FormInput, FormSelect, FormTextarea, SubmitButton } from "./Forms";

const partnershipOptions = ["Tech", "Academia", "Government", "Corporate"];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    partnershipInterest: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Organization is required";
    }

    if (!formData.partnershipInterest) {
      newErrors.partnershipInterest = "Please select a partnership interest";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the data to your server
      console.log("Form submitted:", formData);
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        organization: "",
        partnershipInterest: "",
        message: "",
      });
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div className="flex flex-col space-y-4">
        <FormInput
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <FormInput
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormInput
          name="organization"
          placeholder="Organization"
          value={formData.organization}
          onChange={handleChange}
          error={errors.organization}
        />

        <FormSelect
          name="partnershipInterest"
          placeholder="Partnership Interest"
          options={partnershipOptions}
          value={formData.partnershipInterest}
          onChange={handleChange}
          error={errors.partnershipInterest}
        />

        <FormTextarea
          name="message"
          placeholder="Message Details"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          rows={10}
        />

        <SubmitButton text="Submit Inquiry" />
      </div>
    </form>
  );
};

export default ContactForm;
