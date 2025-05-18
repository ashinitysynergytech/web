import React from "react";
import { ExternalLink } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  date: string;
  link?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  image,
  date,
  link = "#",
}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-sm bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      {/* Card Image */}
      <div className={cn("relative h-[16.5rem] w-full overflow-hidden")}>
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Date Badge */}
        <div className="absolute right-3 top-3 rounded-full bg-[#008B94]/40 text-white font-semibold border border-white px-3 py-1 text-xs backdrop-blur-sm">
          {date}
        </div>
      </div>

      {/* Card Content */}
      <div className="relative flex flex-1 flex-col p-5 bg-[#042B2E] text-white">
        <h3 className="mb-2 text-xl font-bold line-clamp-2 uppercase">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm line-clamp-3">{description}</p>

        {/* Link Icon */}
        <div className="absolute top-3 right-3 flex items-end justify-end">
          <a
            href={link}
            className="flex items-center text-primary-600 hover:text-primary-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-5 w-5 text-[#B46E0F]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
