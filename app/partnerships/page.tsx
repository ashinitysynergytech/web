import ContactUsWithForm from "@/Components/ContactUsWithForm";
import PartnershipsHeader from "@/Components/PartnershipsHeader";
import PartnershipsNexus from "@/Components/PartnershipsNexus";
import VisionImpactSlides from "@/Components/VisionImpactSlides";

import React from "react";

function PartnershipsPage() {
  return (
    <div className="mx-auto flex flex-col gap-10">
      <PartnershipsHeader />
      <div className="flex flex-col space-y-12 bg-[#E5F3F4] py-16">
        <PartnershipsNexus />
      </div>
      <VisionImpactSlides />
      <ContactUsWithForm />
    </div>
  );
}

export default PartnershipsPage;
