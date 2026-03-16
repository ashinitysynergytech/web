import React from "react";
import Image from "next/image";

import contactImg from "../public/assets/images/contact-us-ashinity.png";

//components

import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";

function ContactUs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-12 xl:px-0">
        <div className="relative bg-[var(--color-secondary)] flex p-8">
          <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2">
            <Image
              src={contactImg}
              alt="contact us"
              className="w-72 h-72 xl:w-full xl:h-full"
            />
          </div>
          <div className="absolute top-6 right-32 rounded-full size-16 border border-[var(--color-primary)] flex items-center justify-center">
            <div className="relative rounded-full bg-yellow-500 size-8" />
          </div>
          <div className="absolute bottom-28 right-12 rounded-full size-6 border border-[var(--color-primary)] flex items-center justify-center" />
          <div className="absolute bottom-18 right-32 rounded-full size-6 bg-[var(--accent-p)] flex items-center justify-center" />
          <div className="absolute bottom-6 right-12 rounded-full size-16 bg-yellow-500 flex items-center justify-center" />
          <div className="hidden lg:block w-[40%]" />
          <div className="w-full lg:w-[60%]">
            <h3 className="text-[42px] font-bold text-[var(--color-primary)]">
              Discuss your innovation mandate
            </h3>
            <p className="flex flex-col text-[var(--text-white)] mb-6">
              <span>
                Planning a programme, platform, or systems intervention?
              </span>
              <span>
                Share the brief and Ashinity can scope the right starting point.
              </span>
            </p>
            <div>
              <form
                action="post"
                className="text-sm text-[var(--text-white)] lg:w-96 space-y-2"
              >
                <div className="w-full flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0">
                  My name is
                  <TextInput
                    placeholder="your name"
                    className="w-full sm:w-lg lg:w-28 lg:mx-2"
                  />
                  and I need help with
                </div>
                <div>
                  <TextArea
                    placeholder="your programme, policy, or delivery brief"
                    className="w-full sm:w-lg lg:w-96 h-42 lg:h-fit"
                  />
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0">
                  My email is
                  <TextInput
                    placeholder="your email"
                    className="w-full sm:w-lg lg:w-28 lg:mx-2"
                  />
                  and my phone number is
                </div>
                <TextInput
                  placeholder="your phone"
                  className="w-full sm:w-lg lg:w-28"
                />
                <button className="px-4 py-2 bg-[var(--btn-color)] text-white rounded-full mt-6 lg:mt-0">
                  Request a scoping call
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
