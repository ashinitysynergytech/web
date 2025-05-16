import React from "react";
import { twMerge } from "tailwind-merge";

type IUnderline = {
  className?: string;
};

const CustomUnderline: React.FC<IUnderline> = ({ className }) => {
  return (
    <div className="flex items-center gap-2 mt-2 mb-5">
      <div className="flex gap-1">
        <div className="size-1 rounded-full bg-[var(--btn-color)]" />
        <div className="size-1 rounded-full bg-[var(--btn-color)]" />
        <div className="size-1 rounded-full bg-[var(--btn-color)]" />
      </div>
      <hr
        className={twMerge("w-full text-[var(--color-primary)]", className)}
      />
    </div>
  );
};

export default CustomUnderline;
