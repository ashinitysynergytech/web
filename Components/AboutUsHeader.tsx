import React from "react";
import AboutUsImg from "@/public/assets/images/about-us.png";
import Image from "next/image";
import CustomUnderline from "./CustomUnderline";

function AboutUsHeader() {
  return (
    <div className="mx-auto flex flex-row space-x-4 items-center justify-between">
      <div className="w-full lg:w-1/2">
        <h2 className="text-5xl lg:text-[64px] text-primary font-black uppercase leading-normal">
          About Us
        </h2>
        <CustomUnderline className="w-[85%]" />
        <p>
          <span className="text-primary">Ashinity</span> is a diversified
          conglomerate driving innovation and socio-economic impact through
          technology, allied services, real estate, and leadership development.
          As both a subsidiary and the umbrella organization for Ashinity.com,
          Apinature (Aggro Allied Services), Haaretz and Diamond (Real Estate),
          and Yeshiva Leadership Foundation (Leadership Academy), we harness
          cross-subsidiary synergies to deliver transformative solutions across
          Nigeria and beyond.
        </p>
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Image src={AboutUsImg} alt="About Us" width={400} height={400} />
      </div>
    </div>
  );
}

export default AboutUsHeader;
