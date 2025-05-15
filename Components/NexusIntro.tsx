import React from "react";
import NexusFeatureCard from "./NexusFeatureCard";
import CustomUnderline from "./CustomUnderline";

const NexusIntro: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-5">
        {/* Badge */}
        <div className="w-fit bg-[#008B94] text-white px-3 py-2 font-medium self-start">
          What is Nexus?
        </div>
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#008B94] leading-tight">
          A Digital Hub for Tomorrow&apos;s Innovators
        </h1>
        <CustomUnderline className="w-full" />

        {/* Description */}
        <p className="text-gray-700 max-w-4xl">
          Nexus is Ashinity&apos;s platform for driving global tech dialogue.
          Through curated live sessions, thought-provoking articles, and
          interactive forums, we bridge the gap between cutting-edge technology
          and real-world impact. Whether you&apos;re a developer, entrepreneur,
          or tech leader, Nexus offers a space to learn, network, and lead.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
          <NexusFeatureCard
            title="Visibility"
            description="Amplify your voice in Africa's tech ecosystem."
          />
          <NexusFeatureCard
            title="Impact"
            description="Turn insights into action with community-driven projects."
          />
          <NexusFeatureCard
            title="Relevance"
            description="Stay ahead of trends like AI, quantum, and Web3."
          />
        </div>
      </div>
    </section>
  );
};

export default NexusIntro;
