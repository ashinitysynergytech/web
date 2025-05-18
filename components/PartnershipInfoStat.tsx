import React from "react";
import PartnershipIntroVector from "@/public/assets/images/partnership-intro-vector.svg";
import Globe from "@/public/assets/images/globe.svg";
import Image from "next/image";

function PartnershipInfoStat() {
  return (
    <div className="flex flex-col space-y-8 items-center justify-between bg-[#0A2725] w-full md:w-[26rem] h-[35rem] pt-8">
      <div className="flex flex-col space-y-4 items-center w-3/4">
        <div className="flex flex-row space-x-3 items-center justify-center">
          <Image src={Globe} alt="Globe" width={100} height={100} />
          <p className="text-white">
            strategic partners driving innovation across Africa.
          </p>
        </div>
        <div className="flex flex-row space-x-3 items-center justify-center">
          <h2 className="text-white font-bold text-5xl">60%</h2>
          <p className="text-white">
            of collaborative projects scaled to national impact.
          </p>
        </div>
      </div>
      <Image
        src={PartnershipIntroVector}
        alt="Partnership Intro Vector"
        width={250}
        height={250}
      />
    </div>
  );
}

export default PartnershipInfoStat;
