import React from "react";
import PartnershipsIntro from "./PartnershipsIntro";
import PartnershipInfoStat from "./PartnershipInfoStat";

function PartnershipsNexus() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row space-x-4 items-center justify-between">
      <div className="w-full md:w-5/7 px-4 md:px-0">
        <PartnershipsIntro />
      </div>
      <div className="w-full md:w-2/7">
        <PartnershipInfoStat />
      </div>
    </div>
  );
}

export default PartnershipsNexus;
