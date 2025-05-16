import React from "react";
import ProgramsHeaderImg from "@/public/assets/images/programs-header.png";
import NexusLogo from "@/public/assets/images/nexus-logo.png";
import Image from "next/image";
import CustomUnderline from "./CustomUnderline";

function ProgramsHeader() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row space-x-4 items-center justify-between space-y-6 md:space-y-0 py-10 md:py-20 px-8 md:px-0">
      <div className="w-full lg:w-1/2 space-y-4">
        <Image src={NexusLogo} alt="Nexus Logo" width={150} height={100} />
        <h2 className="text-4xl md:text-5xl lg:text-[50px] text-primary font-black uppercase leading-normal">
          Join The Future of Tech Conversations.
        </h2>
        <CustomUnderline className="w-[85%]" />
        <p className="font-medium">
          <span className="text-primary font-semibold">Nexus</span> by Ashinity
          is where innovators, leaders, and tech enthusiasts unite to shape
          tomorrow’s solutions. Engage in live debates, deep dives, and
          collaborative sessions on AI, quantum computing, Web3, and more.
        </p>
        <button className="bg-[#B46E0F] text-white p-4 rounded-full">
          Join the Next X Space
        </button>
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Image
          src={ProgramsHeaderImg}
          alt="Programs Header"
          width={700}
          height={500}
        />
      </div>
    </div>
  );
}

export default ProgramsHeader;
