import { cn } from "@/lib/utils";
import React from "react";
import ImpactGoal from "./ImpactGoal";

export interface VisionImpactSlideItem {
  number: number | string;
  title: string;
  description: string;
  image: string;
}

type Props = {
  item: VisionImpactSlideItem;
  className?: string;
};

function VisionImpactSlide({ item, className }: Props) {
  return (
    <div
      className={cn("relative w-[28rem] h-[20rem]", className)}
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-3 left-3 w-2/3 border-2 border-gray-50/80 rounded-full pl-1 pr-3 bg-[#008B94]/30 backdrop-blur-sm">
        <ImpactGoal
          number={item.number}
          title={item.title}
          description={item.description}
        />
      </div>
    </div>
  );
}

export default VisionImpactSlide;
