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
              Let’s talk
            </h3>
            <p className="flex flex-col text-[var(--text-white)] mb-6">
              <span>Are you in need of an experienced tech team?</span>
              <span>Let&apos;s have a conversation.</span>
            </p>
            <div>
              <form
                action="post"
                className="text-sm text-[var(--text-white)] lg:w-96 space-y-2"
              >
                <div className="w-full flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0">
                  Hey, my name is
                  <TextInput
                    placeholder="your name"
                    className="w-full sm:w-lg lg:w-28 lg:mx-2"
                  />
                  and i am looking for
                </div>
                <div>
                  <TextArea
                    placeholder="your message"
                    className="w-full sm:w-lg lg:w-96 h-42 lg:h-fit"
                  />
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-0">
                  here&apos;s my email
                  <TextInput
                    placeholder="your email"
                    className="w-full sm:w-lg lg:w-28 lg:mx-2"
                  />
                  and my phone no
                </div>
                <TextInput
                  placeholder="your phone"
                  className="w-full sm:w-lg lg:w-28"
                />
                <button className="px-4 py-2 bg-[var(--btn-color)] text-white rounded-full mt-6 lg:mt-0">
                  Submit
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
