import React from "react";
import CustomUnderline from "./CustomUnderline";
import ContactForm from "./ContactForm";

function ContactUsWithForm() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row space-x-4 py-10 items-start justify-between px-4 md:px-0">
      <div>
        <h3 className="text-[42px] font-bold text-[var(--color-primary)] uppercase">
          Let&apos;s build africa&apos;s tech future together
        </h3>
        <CustomUnderline className="max-w-[417px]" />
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactUsWithForm;
