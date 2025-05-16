import React from "react";
import PartnershipsIntro from "./PartnershipsIntro";
import PartnershipInfoStat from "./PartnershipInfoStat";

function PartnershipsNexus() {
  return (
    <div className="max-w-7xl mx-auto flex flex-row space-x-4 items-center justify-between">
      <div className="w-5/7">
        <PartnershipsIntro />
      </div>
      <div className="w-2/7">
        <PartnershipInfoStat />
      </div>
    </div>
  );
}

export default PartnershipsNexus;
