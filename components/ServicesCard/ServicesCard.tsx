import React from "react";
import icon from "../../public/assets/icons/Group.svg";
import helloImg from "../../public/assets/images/say-hello-ashinity.png";
import "./card.css";
import Image from "next/image";
import { ServicesData } from "../../lib/data/services";
import { IoIosArrowForward } from "react-icons/io";

const ServicesCard = () => {
  return (
    <div className="grid-container">
      <div className="box-1 bg-white p-6">
        <div className="flex items-center gap-3 mb-8 ">
          <div className="aspect-square rounded-full p-2 bg-[var(--color-primary)]/10">
            <Image
              src={icon}
              alt="Icon"
              className="w-full h-full aspect-square"
            />
          </div>
          <h2 className="text-lg font-semibold">
            Science Policy Research and Advocacy
          </h2>
        </div>

        <div className="space-y-6">
          {ServicesData.policy.map((service) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-start gap-3"
            >
              <div className="flex items-center gap-2 min-w-[180px]">
                <span className="text-base text-[var(--color-primary)] font-normal">
                  {service.title}
                </span>
              </div>
              <span className="text-gray-600">{service.description}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[var(--btn-color)] hover:underline"
          >
            <span>Learn More</span> <IoIosArrowForward />
          </a>
        </div>
      </div>

      <div className="box-2 bg-white p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="aspect-square rounded-full p-2 bg-[var(--color-primary)]/10">
            <Image
              src={icon}
              alt="Icon"
              className="w-full h-full aspect-square"
            />
          </div>
          <h2 className="text-lg font-semibold">
            Research and Development in Tech and Science
          </h2>
        </div>

        <div className="space-y-6">
          {ServicesData.research.map((service) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-start gap-3"
            >
              <div className="flex items-center gap-2 min-w-[180px]">
                <span className="text-base text-[var(--color-primary)] font-normal">
                  {service.title}
                </span>
              </div>
              <span className="text-gray-600">{service.description}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[var(--btn-color)] hover:underline"
          >
            <span>Learn More</span> <IoIosArrowForward />
          </a>
        </div>
      </div>

      <div className="box-3 bg-white p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="aspect-square rounded-full p-2 bg-[var(--color-primary)]/10">
            <Image
              src={icon}
              alt="Icon"
              className="w-full h-full aspect-square"
            />
          </div>
          <h2 className="text-lg font-semibold">
            Enterprise Scaling Consultation
          </h2>
        </div>

        <div className="space-y-6">
          {ServicesData.enterprise.map((service) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-start gap-8"
            >
              <div className="flex items-center gap-2 min-w-[220px]">
                <span className="text-base text-[var(--color-primary)] font-normal">
                  {service.title}
                </span>
              </div>
              <span className="text-gray-600">{service.description}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[var(--btn-color)] hover:underline"
          >
            <span>Learn More</span> <IoIosArrowForward />
          </a>
        </div>
      </div>

      <div className="h-[35rem] md:h-auto box-4 relative bg-[var(--color-secondary)] text-[var(--text-white)] p-6 overflow-hidden">
        <div className="mb-6">
          <span className="text-xl font-semibold">
            We are ready for new challenges – together we can create something
            truly exceptional!
          </span>
        </div>
        <div className="flex flex-col gap-1 mb-32 md:mb-44 lg:mb-0">
          <span>hello@ashinity.com</span>
          <span>+234 533 097 111</span>
        </div>
        <div className="w-96 h-auto absolute md:-bottom-36 lg:bottom-0 md:left-48 lg:left-1/2 lg:transform lg:-translate-x-1/2 ">
          <Image src={helloImg} alt="Contact us" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
