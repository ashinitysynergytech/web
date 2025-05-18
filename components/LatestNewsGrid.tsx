import React from "react";
import LatestNewsCard from "./LatestNewsCard";
import { StaticImageData } from "next/image";

export interface LatestNewsItem {
  title: string;
  subTitle?: string;
  description: string;
  image: StaticImageData;
  date: string;
  link?: string;
}

interface LatestNewsGridProps {
  latestNewsItems: LatestNewsItem[];
}

const LatestNewsGrid: React.FC<LatestNewsGridProps> = ({ latestNewsItems }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
      {latestNewsItems.map((item, index) => (
        <LatestNewsCard
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          description={item.description}
          image={item.image}
          date={item.date}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default LatestNewsGrid;
