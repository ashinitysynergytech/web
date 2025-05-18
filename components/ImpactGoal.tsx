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
    <div className={cn("flex items-center gap-4 p-1", className)}>
      <div className="relative flex">
        <div className="h-[60px] w-[60px] rounded-full bg-[#126469] flex items-center justify-center">
          <div className="h-[45px] w-[45px] rounded-full bg-[#B9E4E8] flex items-center justify-center">
            <span className="text-[#126469] text-2xl font-bold">{number}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-xs text-white">{description}</p>
      </div>
    </div>
  );
}

export default ImpactGoal;
