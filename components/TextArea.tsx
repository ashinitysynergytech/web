import React from "react";
import { twMerge } from "tailwind-merge";

type ItextArea = {
  className?: string;
  placeholder?: string;
};

const TextArea: React.FC<ItextArea> = ({ className, placeholder }) => {
  return (
    <div>
      <textarea
        rows={1}
        placeholder={placeholder}
        className={twMerge(
          "bg-[var(--color-primary)] rounded-md border-none outline-none px-2 py-1 text-xs placeholder:text-white/20",
          className
        )}
      ></textarea>
    </div>
  );
};

export default TextArea;
