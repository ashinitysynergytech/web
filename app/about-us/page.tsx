import React from "react";
import AboutUsHeader from "@/components/AboutUsHeader";
import VisionSection from "@/components/VisionSection";
import TrustedByInnovators from "@/components/TrustedByInnovators";
import RecentProjects from "@/components/RecentProjects";
import ContactUs from "@/components/ContactUs";
import OurBusinesses from "@/components/OurBusinesses";

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
