import React from "react";
import PartnershipsHeaderImg from "@/public/assets/images/partnerships-header.png";
import Image from "next/image";
import CustomUnderline from "./CustomUnderline";

function PartnershipsHeader() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row space-x-4 items-center justify-between py-10 md:py-20 px-8 md:px-0">
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-[50px] text-primary font-black uppercase leading-normal">
          Innovate Together. Transform Africa.
        </h2>
        <CustomUnderline className="w-[85%]" />
        <p className="font-medium">
          Join forces with Ashinity to drive scalable tech solutions, ethical
          innovation, and socio-economic growth across the continent.
        </p>
        <button className="bg-[#B46E0F] text-white p-4 rounded-full">
          Explore Partnerships Opportunities
        </button>
      </div>
      <div className="w-full flex items-center justify-center md:w-1/2">
        <Image
          src={PartnershipsHeaderImg}
          alt="Partnerships Header"
          width={700}
          height={500}
        />
      </div>
    </div>
  );
}

export default PartnershipsHeader;
