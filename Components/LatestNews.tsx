import React from "react";
import LatestNewsGrid, { LatestNewsItem } from "./LatestNewsGrid";
import SpendaLaunchImage from "@/public/assets/images/spenda-launch.png";
import MeshachTrustTvImage from "@/public/assets/images/meshach-trusttv.png";

import CustomUnderline from "./CustomUnderline";

const latestNewsData: LatestNewsItem[] = [
  {
    title: "Spenda App Launch",
    description:
      "Ashinity proudly launched Spenda on May 1, 2024—a groundbreaking crypto app designed to bridge the gap between digital assets and everyday financial needs. Built entirely in-house by Ashinity’s R&D team, Spenda empowers users to instantly convert crypto to fiat, pay bills, send money, and make card payments seamlessly across Africa.",
    image: SpendaLaunchImage,
    date: "12th of May, 2025",
    link: "#",
  },
  {
    title: "FEATURED ON TRUST TV",
    subTitle: "Leveraging Emerging Technologies for Inclusive Growth",
    description:
      "Emerging technologies like AI, blockchain and IoT, Quantum Technology are poised to transform Africa’s key sectors—from precision agriculture and fintech to health and smart cities—if governments, investors and industry collaborate on universal power and connectivity, smart regulation and skills development. With over 60 % of the population under 25, a coordinated push on digital literacy, blended finance and inclusive design could turn today’s infrastructure gaps into tomorrow’s growth engines.",
    image: MeshachTrustTvImage,
    date: "12th of May, 2025",
    link: "#",
  },
];

function LatestNews() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col space-y-4 items-start justify-center">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-col space-y-3">
          <h3 className="text-[42px] font-semibold text-[var(--color-primary)]">
            Latest Updates
          </h3>
          <CustomUnderline className="w-[417px]" />
        </div>
        <h4 className="uppercase text-lg text-gray-800 font-medium">
          Featured Events
        </h4>
      </div>
      <LatestNewsGrid latestNewsItems={latestNewsData} />
    </div>
  );
}

export default LatestNews;
