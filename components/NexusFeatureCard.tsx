import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

const NexusFeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-[#008B94] text-white p-4 transition-all duration-300 hover:shadow-lg hover:bg-teal-700",
        className
      )}
    >
      <div className="border-b border-teal-400/30 pb-3 mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default NexusFeatureCard;
