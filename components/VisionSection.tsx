import React from "react";
import Image from "next/image";
import visionImage from "@/public/assets/images/vision.png";
import missionImage from "@/public/assets/images/mission.png";
import CustomUnderline from "./CustomUnderline";

function VisionSection() {
  return (
    <div className="flex flex-col space-y-8 bg-[#008B94]/10 py-12">
      <div className="mx-auto max-w-3xl flex flex-col lg:flex-row items-center justify-center md:space-x-16 space-x-8 px-8 md:px-0">
        <div className="hidden md:flex w-full items-center">
          <Image
            src={visionImage}
            alt="Vision"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:hidden w-full flex items-center justify-center">
          <div className="lg:w-auto w-[350px] h-[175px] relative lg:rounded-lg rounded-t-full overflow-hidden">
            <Image
              src={visionImage}
              alt="Vision"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="lg:static lg:w-[350px] lg:h-[350px]"
            />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-4xl lg:text-5xl text-[var(--color-primary)] font-black capitalize leading-normal">
            Our Vision
          </h2>
          <p className="font-medium]">
            Our vision is to leverage the collective strengths of our
            subsidiaries to drive transformative initiatives and contribute to
            Africa&apos;s socio-economic development.
          </p>
        </div>
      </div>
      <div className="w-[80%] my-5 md:my-16 mx-auto">
        <CustomUnderline className="w-full" />
      </div>
      {/* <div className="hidden md:block w-[80%] mx-auto h-[1px] bg-[#008B94] my-16" /> */}
      <div className="mx-auto max-w-3xl flex flex-col lg:flex-row items-center justify-center md:space-x-16 space-x-8">
        <div className="md:hidden w-full flex items-center justify-center md:justify-end">
          <div className="lg:w-auto w-[350px] h-[175px] relative lg:rounded-lg rounded-t-full overflow-hidden">
            <Image
              src={missionImage}
              alt="Mission"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="lg:static lg:w-[350px] lg:h-[350px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 px-8 md:px-0 md:w-full">
          <h2 className="text-4xl lg:text-5xl text-[var(--color-primary)] font-black capitalize leading-normal">
            Our Mission
          </h2>
          <span>We are guided by three pillars:</span>
          <div className="flex flex-col space-y-4">
            <p className="flex flex-col gap-2">
              <span className="font-semibold">Visibility</span>
              <span>
                We elevate the Ashinity Group brand across sectors through
                integrated digital marketing, thought leadership, and a
                multi-channel presence, ensuring a unified and impactful public
                profile.
              </span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="font-semibold">Impact</span>
              <span>
                We deliver measurable socio-economic outcomes by developing
                talent, forging strategic partnerships, and providing services
                that enhance employment, education, and community welfare.
              </span>
            </p>
            <p className="flex flex-col gap-2">
              <span className="font-semibold">Relevance</span>
              <span>
                We stay ahead of market trends through adaptive innovation,
                ethical practices, and cross-sector collaboration, creating
                integrated solutions for evolving needs.
              </span>
            </p>
          </div>
        </div>
        <div className="hidden md:flex w-full items-center justify-end">
          <Image
            src={missionImage}
            alt="Vision"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default VisionSection;
