import AboutNexus from "@/Components/AboutNexus";
import ContactUs from "@/Components/ContactUs";
import NexusBenefits from "@/Components/NexusBenefits";
import ProgramsHeader from "@/Components/ProgramsHeader";
import ProgramsSlides from "@/Components/ProgramsSlides";
import React from "react";

function ProgramsPage() {
  return (
    <div className="mx-auto flex flex-col gap-10">
      <ProgramsHeader />
      <div className="flex flex-col space-y-12 bg-gray-100 py-16">
        <AboutNexus />
      </div>
      <ProgramsSlides />
      <NexusBenefits />
      <ContactUs />
    </div>
  );
}

export default ProgramsPage;
