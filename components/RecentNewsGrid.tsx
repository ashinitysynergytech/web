import React from "react";
import NewsCard from "./RecentNewsCard";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export interface NewsItem {
  title: string;
  description: string;
  image: StaticImageData;
  date: string;
  link?: string;
}

interface NewsGridProps {
  newsItems: NewsItem[];
}

const NewsGrid: React.FC<NewsGridProps> = ({ newsItems }) => {
  return (
    <div className={cn("grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3")}>
      {newsItems.map((item, index) => (
        <NewsCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          date={item.date}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default NewsGrid;
