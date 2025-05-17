import React from "react";
import AboutUsHeader from "@/Components/AboutUsHeader";
import VisionSection from "@/Components/VisionSection";
import TrustedByInnovators from "@/Components/TrustedByInnovators";
import RecentProjects from "@/Components/RecentProjects";
import ContactUs from "@/Components/ContactUs";
import OurBusinesses from "@/Components/OurBusinesses";

function AboutUsPage() {
  return (
    <div className="mx-auto flex flex-col gap-10">
      <AboutUsHeader />
      <VisionSection />
      <OurBusinesses />
      <TrustedByInnovators />
      <RecentProjects />
      <ContactUs />
    </div>
  );
}

export default AboutUsPage;
