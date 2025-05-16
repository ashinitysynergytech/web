import React from "react";
import NewsEventsImg from "@/public/assets/images/news-and-events.png";
import Image from "next/image";
import CustomUnderline from "./CustomUnderline";

function NewsEventsHeader() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row space-x-4 items-center justify-between py-20 px-4 md:px-0">
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] text-primary font-black uppercase leading-normal">
          Driving Innovation, Shaping Futures.
        </h2>
        <CustomUnderline className="w-[85%]" />
        <p className="font-medium">
          Explore Ashinity’s latest milestones, collaborations, and thought
          leadership across Africa’s tech ecosystem.
        </p>
      </div>
      <div className="w-full flex items-center justify-center md:w-1/2 mb-4 md:mb-0">
        <Image
          src={NewsEventsImg}
          alt="News and Events"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default NewsEventsHeader;
