import React from "react";

import { ChartLine, DoorOpen, Handshake, Trophy } from "lucide-react";
import NexusBenefit from "./NexusBenefit";
import CustomUnderline from "./CustomUnderline";

const benefits = [
  {
    icon: <DoorOpen className="text-black" size={22} />,
    title: "Exclusive access",
    description:
      "Interact directly with Ashinity's R&D team and global experts.",
  },
  {
    icon: <ChartLine className="text-black" size={22} />,
    title: "Skill building",
    description: "Gain actionable insights from case studies and live demos.",
  },
  {
    icon: <Handshake className="text-black" size={22} />,
    title: "Networking",
    description: "Connect with 5,000+ developers, investors, and policymakers.",
  },
  {
    icon: <Trophy className="text-black" size={22} />,
    title: "Recognition",
    description: "Feature your project in our ‘Innovator Spotlight’ series.",
  },
];

function NexusBenefits() {
  return (
    <div className="max-w-7xl mx-auto flex flex-row space-x-4 items-start justify-between py-10">
      <div className="w-1/3 flex flex-col items-start justify-between h-72">
        <div>
          <h3 className="text-[35px] font-semibold text-[var(--color-primary)]">
            Why Be Part of Nexus?
          </h3>
          <CustomUnderline className="w-full" />
        </div>
        <div className="flex flex-col items-start space-y-3">
          <p className="font-medium">
            Ready to excel? Connect with us on X spaces!
          </p>
          <button className="bg-[#B46E0F] text-white p-4 rounded-full">
            Let&apos;s connect
          </button>
        </div>
      </div>
      <div className="w-2/3 grid grid-cols-2 gap-4">
        {benefits.map((benefit) => (
          <NexusBenefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
}

export default NexusBenefits;
