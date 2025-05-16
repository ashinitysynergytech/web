import React from "react";


type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function NexusBenefit({ icon, title, description }: Props) {
  return (
    <div className="w-[24rem] h-[10rem] bg-gray-50 mx-auto border border-[#4A979C] p-8">
      <div className="flex items-center gap-4 mb-2">
        <div className="text-[#4A979C] text-3xl">{icon}</div>
        <h2 className="text-[#4A979C] text-xl font-black uppercase">{title}</h2>
      </div>
      <div className="border-b border-[#4A979C] mb-3"></div>
      <h3 className="text-[#333333] font-medium">{description}</h3>
    </div>
  );
}

export default NexusBenefit;
