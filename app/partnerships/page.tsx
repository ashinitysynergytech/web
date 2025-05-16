import PartnershipsHeader from "@/components/PartnershipsHeader";
import PartnershipsNexus from "@/components/PartnershipsNexus";

import React from "react";

function PartnershipsPage() {
  return (
    <div className="mx-auto flex flex-col gap-10">
      <PartnershipsHeader />
      <div className="flex flex-col space-y-12 bg-[#E5F3F4] py-16">
        <PartnershipsNexus />
      </div>
    </div>
  );
}

export default PartnershipsPage;
