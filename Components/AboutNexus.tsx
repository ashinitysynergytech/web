import React from "react";
import AboutNexusImg from "@/public/assets/images/about-nexus.png";
import Image from "next/image";
import NexusIntro from "./NexusIntro";

function AboutNexus() {
  return (
    <div className="md:max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-between">
      <div className="w-full md:w-2/5">
        <Image
          src={AboutNexusImg}
          alt="About Nexus"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-3/5">
        <NexusIntro />
      </div>
    </div>
  );
}

export default AboutNexus;
