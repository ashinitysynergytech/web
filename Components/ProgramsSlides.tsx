import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import { CustomCarousel } from "./Carousel";
import ProgramSlide, { ProgramSlideItem } from "./ProgramSlide";
import AIMLInnvoationImage from "@/public/assets/images/ai-ml-innovation.png";
import QuantumComputingImage from "@/public/assets/images/quantum-computing.png";
import BlockchainWeb3Image from "@/public/assets/images/blockchain-web3.png";
import LeadershipSynergyImage from "@/public/assets/images/leadership-synergy.png";
import CustomUnderline from "./CustomUnderline";

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 1,
  loop: true,
  align: "start",
};

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
  {
    title: "Blockchain & Web3",
    description: "Decentralized solutions for African markets.",
    image: BlockchainWeb3Image.src,
  },
  {
    title: "Leadership & Cross-Synergy",
    description: "Leading tech teams in a hybrid world.",
    image: LeadershipSynergyImage.src,
  },
];

function ProgramsSlides() {
  return (
    <div className="max-w-7xl mx-auto space-y-4 items-start justify-between md:px-0 px-4 w-[25rem] md:w-full">
      <h3 className="text-[35px] font-bold text-[var(--color-primary)]">
        Fueling Innovation, <br /> One Week at a Time
      </h3>
      <CustomUnderline className="max-w-[417px]" />

      <CustomCarousel options={OPTIONS}>
        {slideData.map((item) => (
          <ProgramSlide
            className="embla__slide space-x-10"
            key={item.title}
            item={item}
          />
        ))}
      </CustomCarousel>
    </div>
  );
}

export default ProgramsSlides;
