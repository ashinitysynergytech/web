import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import { CustomCarousel } from "./Carousel";
import ProgramSlide, { ProgramSlideItem } from "./ProgramSlide";
import AIMLInnvoationImage from "@/public/assets/images/ai-ml-innovation.png";
import QuantumComputingImage from "@/public/assets/images/quantum-computing.png";
import BlockchainWeb3Image from "@/public/assets/images/blockchain-web3.png";
import LeadershipSynergyImage from "@/public/assets/images/leadership-synergy.png";

const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const slideData: ProgramSlideItem[] = [
  {
    title: "AI/ML & Ethical Innovation",
    description: "How ethical AI can transform industries.",
    image: AIMLInnvoationImage.src,
  },
  {
    title: "Quantum Computing & Emerging Tech",
    description: "Quantum’s role in cybersecurity and optimization.",
    image: QuantumComputingImage.src,
  },
//   {
//     title: "Blockchain & Web3",
//     description: "Decentralized solutions for African markets.",
//     image: BlockchainWeb3Image.src,
//   },
//   {
//     title: "Leadership & Cross-Synergy",
//     description: "Leading tech teams in a hybrid world.",
//     image: LeadershipSynergyImage.src,
//   },
];

function ProgramsSlides() {
  return (
    <div className="max-w-7xl mx-auto flex flex-row space-x-4 items-start justify-between">
      <CustomCarousel slides={SLIDES} options={OPTIONS}>
        {slideData.map((item) => (
          <ProgramSlide key={item.title} item={item} />
        ))}
      </CustomCarousel>
    </div>
  );
}

export default ProgramsSlides;
