import React from "react";
import CustomUnderline from "./CustomUnderline";

import testImg from "@/public/assets/images/stack-books-table-with-smartphone.png";

const testimonials = [
  {
    image: testImg,
    services: ["Web development", "UI/UX design", "Web apps", "Education"],
    project: {
      name: "EIT Campus Platform",
      description:
        "EIT Campus Platform educational platform developed by Smultron Web Development on behalf of EIT Urban Mobility, on...",
    },
    client: "Client name here",
  },
  {
    image: testImg,
    services: ["Web development", "UI/UX design", "Web apps", "Education"],
    project: {
      name: "EIT Campus Platform",
      description:
        "EIT Campus Platform educational platform developed by Smultron Web Development on behalf of EIT Urban Mobility, on...",
    },
    client: "Client name here",
  },
  {
    image: testImg,
    services: ["Web development", "UI/UX design", "Web apps", "Education"],
    project: {
      name: "EIT Campus Platform",
      description:
        "EIT Campus Platform educational platform developed by Smultron Web Development on behalf of EIT Urban Mobility, on...",
    },
    icon: "",
    client: "Client name here",
  },
];

function TrustedByInnovators() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-0">
        <h3 className="text-[42px] font-bold text-[var(--color-primary)]">
          Trusted by Innovators
        </h3>
        <CustomUnderline className="max-w-[417px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(() => {
            return null;
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustedByInnovators;
