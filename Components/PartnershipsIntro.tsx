import React from "react";
import CustomUnderline from "./CustomUnderline";

const PartnershipsIntro: React.FC = () => {
  return (
    <section className="max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-5">
        {/* Badge */}
        <div className="w-fit bg-[#008B94] text-white px-3 py-2 font-medium self-start">
          Why Partner with Ashinity?
        </div>
        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#008B94] leading-tight">
          Collaborate for Impact
        </h1>
        <CustomUnderline className="w-full" />

        <div className="flex flex-col space-y-4">
          <p className="text-gray-800 max-w-4xl">
            <span className="font-bold">Visibility</span> <br />
            Amplify your brand through joint campaigns, thought leadership, and
            high-profile events like Nexus X Spaces.
          </p>
          <p className="text-gray-800 max-w-4xl">
            <span className="font-bold">Impact</span> <br />
            Co-create projects that deliver measurable outcomes in tech
            adoption, talent development, and community welfare.
          </p>
          <p className="text-gray-800 max-w-4xl">
            <span className="font-bold">Relevance</span> <br />
            Align with Africa’s fastest-growing tech innovator in AI, Web3,
            SaaS, and quantum solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsIntro;
