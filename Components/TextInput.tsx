import React from "react";
import { twMerge } from "tailwind-merge";

type ItextInput = {
  className?: string;
  placeholder?: string;
};

const TextInput: React.FC<ItextInput> = ({ className, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={twMerge(
          "bg-[var(--color-primary)] rounded-md border-none outline-none px-2 py-1 text-xs placeholder:text-white/20",
          className
        )}
      />
    </div>
  );
};

export default TextInput;
