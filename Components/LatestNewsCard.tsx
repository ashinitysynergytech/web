import React from "react";
import Image, { StaticImageData } from "next/image";

interface NewsCardProps {
  title: string;
  subTitle?: string;
  description: string;
  image: StaticImageData;
  date: string;
  link?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  subTitle,
  description,
  image,
  date,
  link = "#",
}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-sm bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
      {/* Card Image */}
      <div className="relative h-[17rem] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Date Badge */}
        <div className="absolute right-3 top-3 rounded-full bg-[#008B94]/40 text-white font-semibold border border-white px-4 py-2 text-xs backdrop-blur-sm">
          {date}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex h-[13rem] flex-col p-5 bg-[#042B2E] text-white">
        <h3 className="mb-2 text-2xl font-bold line-clamp-2 uppercase">
          {title}
        </h3>
        {subTitle && (
          <h4 className="mb-2 text-[#80F7FF] font-medium line-clamp-2">
            {subTitle}
          </h4>
        )}
        <p className="mb-4 flex-1 text-sm line-clamp-4">{description}</p>

        {/* Link Icon */}
        <div className="flex items-end justify-start">
          <a
            href={link}
            className="flex items-center text-[#B46E0F] font-semibold hover:text-primary-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
