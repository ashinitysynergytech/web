import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  number: number | string;
  title: string;
  description: string;
  className?: string;
};

function ImpactGoal({ number, title, description, className }: Props) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <div className="relative flex">
        <div className="h-[120px] w-[120px] rounded-full bg-[#B9E4E8] flex items-center justify-center">
          <div className="h-[100px] w-[100px] rounded-full bg-[#2B656E] flex items-center justify-center">
            <span className="text-[#B9E4E8] text-6xl font-bold">{number}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-5xl font-bold text-[#2B656E] mb-2">{title}</h3>
        <p className="text-2xl text-[#2B656E]">{description}</p>
      </div>
    </div>
  );
}

export default ImpactGoal;
