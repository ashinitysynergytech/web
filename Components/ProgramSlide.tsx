import { cn } from "@/lib/utils";
import React from "react";

export interface ProgramSlideItem {
  title: string;
  description: string;
  image: string;
}

type Props = {
  item: ProgramSlideItem;
  className?: string;
};

function ProgramSlide({ item, className }: Props) {
  return (
    <div
      className={cn("relative w-[28rem] h-[16rem] md:h-[20rem]", className)}
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/10 absolute flex flex-col space-y-4 top-3 right-3 w-52 h-32 p-3 border-2 border-gray-100/30 backdrop-blur-sm">
        <h3 className="font-semibold text-sm text-[#80F7FF]">{item.title}</h3>
        <p className="text-xs text-white">
          Focus: <br />{" "}
          <span className="font-medium line-clamp-2">{item.description}</span>
        </p>
      </div>
    </div>
  );
}

export default ProgramSlide;
