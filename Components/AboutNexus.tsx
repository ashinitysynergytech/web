import React from "react";
import AboutNexusImg from "@/public/assets/images/about-nexus.png";
import Image from "next/image";
import NexusIntro from "./NexusIntro";

function AboutNexus() {
  return (
    <div className="max-w-7xl mx-auto flex flex-row space-x-4 items-center justify-between">
      <div className="w-2/5">
        <Image src={AboutNexusImg} alt="About Nexus" width={500} height={500} />
      </div>
      <div className="w-3/5">
        <NexusIntro />
      </div>
    </div>
  );
}

export default AboutNexus;
