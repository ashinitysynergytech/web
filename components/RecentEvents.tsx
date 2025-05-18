import React from "react";
import NewsGrid, { NewsItem } from "./RecentNewsGrid";
import UNDPEventImage from "@/public/assets/images/undp-event.png";
import BlockchainEventImage from "@/public/assets/images/blockchain-careers.png";
import AurallyTechcabalImage from "@/public/assets/images/aurally-techcabal.png";
import AlgorandPlateauImage from "@/public/assets/images/algorand-plateau.png";
import AlgorandBootcampImage from "@/public/assets/images/algorand-bootcamp.png";
import AlgorandSpacesImage from "@/public/assets/images/algorand-spaces.png";

import CustomUnderline from "./CustomUnderline";

const recentNewsData: NewsItem[] = [
  {
    title: "UNDP INVITATION",
    description:
      "Ashinify joined UN/UNDP leaders in Abuja to champion youth tech innovation through AI, Web3 & partnerships for Africa's growth.",
    image: UNDPEventImage,
    date: "10th of April, 2025",
    link: "#",
  },
  {
    title: "Blockchain careers and opportunities",
    description:
      "As guest speakers, Ashinity highlighted the burgeoning landscape of 'Blockchain Careers and Opportunities,' emphasizing the increasing need for skilled professionals across sectors.",
    image: BlockchainEventImage,
    date: "12th of August, 2024",
    link: "#",
  },
  {
    title: "Aurally - global hackathon winner",
    description:
      "Aurally, founded by M.I Abaga and Meshach Ishaya, launched in Abuja on 22/02/2024, merging music with Web3 via blockchain for artistic empowerment, real-time rewards, and NFT integration.",
    image: AurallyTechcabalImage,
    date: "12th of May, 2025",
    link: "#",
  },
  {
    title: "Plateau state x algorand",
    description:
      "Ashinity proudly facilitated the collaboration between the Plateau State Government and Algorand Foundation to explore blockchain programs in Nigeria, aiming to pilot use cases and train local developers.",
    image: AlgorandPlateauImage,
    date: "12th of December, 2024",
    link: "#",
  },
  {
    title: "Algorand bootcamp 2023",
    description:
      "Ashinity contributed to a 2023 Algorand bootcamp by leading teams in area of blockchain, to build capacity and to create innovative solutions.",
    image: AlgorandBootcampImage,
    date: "30th of September, 2024",
    link: "https://x.com/ashinitysynergy/status/1708087162976006459?s=46&t=ZT44lJ0Zf959WVtNyuxeBg",
  },
  {
    title: "Blockchain and Creatives",
    description:
      "Ashinity hosted a 'Blockchain and Creatives' event featuring M.I Abaga, fostering discussions and connections between the tech and creative industries.",
    image: AlgorandSpacesImage,
    date: "28th of August, 2023",
    link: "https://x.com/algorand_ng/status/1697292953994068241?s=46",
  },
];

function RecentEvents() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col space-y-4 items-start justify-center px-4 md:px-0">
      <h3 className="text-[42px] font-semibold text-[var(--color-primary)]">
        Recent Events
      </h3>
      <CustomUnderline className="w-[417px]" />
      <NewsGrid newsItems={recentNewsData} />
    </div>
  );
}

export default RecentEvents;
