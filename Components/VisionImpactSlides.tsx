import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import { CustomCarousel } from "./Carousel";
import VisionImpact1Image from "@/public/assets/images/vision-impact-1.png";
import VisionImpact2Image from "@/public/assets/images/vision-impact-2.png";
import VisionImpact3Image from "@/public/assets/images/vision-impact-3.png";
import VisionImpact4Image from "@/public/assets/images/vision-impact-4.png";
import CustomUnderline from "./CustomUnderline";
import VisionImpactSlide, { VisionImpactSlideItem } from "./VisionImpactSlide";

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: 1,
  loop: true,
  align: "start",
};

const slideData: VisionImpactSlideItem[] = [
  {
    number: 1,
    title: "Align Goals",
    description: "Share your objectives via our inquiry form.",
    image: VisionImpact1Image.src,
  },
  {
    number: 2,
    title: "Co-Design",
    description: "Joint workshops to refine scope, KPIs, and timelines.",
    image: VisionImpact2Image.src,
  },
  {
    number: 3,
    title: "Execute & Scale",
    description: "Leverage Ashinity’s tech, talent, and infrastructure.",
    image: VisionImpact3Image.src,
  },
  {
    number: 4,
    title: "Measure Success",
    description: "Transparent reporting and iterative improvements.",
    image: VisionImpact4Image.src,
  },
];

function VisionImpactSlides() {
  return (
    <div className="max-w-7xl mx-auto space-y-4 items-start justify-between">
      <h3 className="text-[35px] font-bold text-[var(--color-primary)]">
        From Vision To Impact
      </h3>
      <CustomUnderline className="max-w-[417px]" />
      <CustomCarousel options={OPTIONS}>
        {slideData.map((item) => (
          <VisionImpactSlide
            className="embla__slide space-x-10"
            key={item.title}
            item={item}
          />
        ))}
      </CustomCarousel>
    </div>
  );
}

export default VisionImpactSlides;
