import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import EmptySchoolClassroom from "@/public/assets/images/empty-school-classroom.png";
import ResearchMedicalScienceBiotechnology from "@/public/assets/images/research-medical-science-biotechnology.png";
import MechanizedFarming from "@/public/assets/images/mechanized-farming.png";
import ModernComplexResidentialBuildings from "@/public/assets/images/modern-complex-residential-buildings.png";
import AshinityLogo from "@/public/assets/Ashinity.png";
import ApinatureLogo from "@/public/assets/images/apinature.png";
import YeshivaLogo from "@/public/assets/images/yeshiva.png";
import HaaretzLogo from "@/public/assets/images/haaretz.png";
import CustomUnderline from "./CustomUnderline";

const businessCards = [
  {
    id: 1,
    backgroundImage: ResearchMedicalScienceBiotechnology.src,
    description:
      "Pioneering technology and innovation through Research and Development in Tech and Science, delivering cutting-edge solutions in Web3, AI/ML, and quantum technologies, and offering Enterprise Scaling Consultation for business growth.",
    logoImage: AshinityLogo,
  },
  {
    id: 2,
    backgroundImage: MechanizedFarming.src,
    description:
      "Specializing in aggro allied services, delivering operational excellence and innovative solutions through technology integration.",
    logoImage: ApinatureLogo,
  },
  {
    id: 3,
    backgroundImage: ModernComplexResidentialBuildings.src,
    description:
      "Leading in smart real estate, creating sustainable, community-centric developments with advanced property management solutions.",
    logoImage: HaaretzLogo,
  },
  {
    id: 4,
    backgroundImage: EmptySchoolClassroom.src,
    description:
      "Transforming leadership training with programs that blend technical, entrepreneurial, and ethical skills for future leaders.",
    logoImage: YeshivaLogo,
  },
];

function OurBusinesses() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col space-y-4 items-start justify-center md:px-0 px-6">
      <h3 className="text-[42px] font-bold text-[var(--color-primary)]">
        Our Businesses
      </h3>
      <CustomUnderline className="w-[417px]" />
      <p className="font-medium">
        Each subsidiary contributes uniquely to our mission:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer px-2 md:px-0">
        {businessCards.map((card) => (
          <Card
            key={card.id}
            className="w-[26rem] h-[30rem] md:w-80 md:h-96 rounded-none overflow-hidden border-none"
          >
            <CardContent className="p-0 h-full relative">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${card.backgroundImage})` }}
              >
                <div className="w-full h-full bg-black opacity-80 absolute left-0 top-0"></div>
                <div className="absolute top-[17px] left-4">
                  <Image
                    src={card.logoImage}
                    alt="logo"
                    width={150}
                    height={150}
                    className="max-w-20 max-h-20"
                  />
                </div>
                <div className="absolute w-[250px] bottom-6 left-4 font-medium text-neutral-100 text-sm leading-normal">
                  {card.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default OurBusinesses;
