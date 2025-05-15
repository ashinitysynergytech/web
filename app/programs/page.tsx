import AboutNexus from "@/components/AboutNexus";
import ProgramsHeader from "@/components/ProgramsHeader";
import ProgramsSlides from "@/components/ProgramsSlides";
import React from "react";

function ProgramsPage() {
  return (
    <div className="mx-auto flex flex-col gap-10">
      <ProgramsHeader />
      <div className="flex flex-col space-y-12 bg-gray-100 py-16">
        <AboutNexus />
      </div>
      <ProgramsSlides />
    </div>
  );
}

export default ProgramsPage;
