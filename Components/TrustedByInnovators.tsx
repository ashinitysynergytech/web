import React from "react";
import CustomUnderline from "./CustomUnderline";

import testImg from "@/public/assets/images/stack-books-table-with-smartphone.png";
import schoolImg from "@/public/assets/icons/mock-school.svg";
import Image from "next/image";

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
          {testimonials.map((item, index) => {
            return (
              <div key={index + 1} className="">
                <div className="h-48">
                  <Image
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-[var(--color-primary)]/10 space-y-6">
                  <div>
                    {item.services.map((service, index) => (
                      <span key={index} className="text-sm">
                        {service}
                        {index < item.services.length - 1 && (
                          <span className="mx-2 text-[var(--color-primary)]">
                            •
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                  <hr className="text-[var(--color-primary)]" />
                  <div className="text-xl text-[var(--color-primary)] font-bold">
                    {item.project.name}
                  </div>
                  <div className="text-base font-normal ">
                    {item.project.description}
                  </div>
                  <hr className="text-[var(--color-primary)]" />
                  <div className="flex items-center gap-3">
                    <Image src={schoolImg} alt={""} />
                    <span>{item.client}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustedByInnovators;
