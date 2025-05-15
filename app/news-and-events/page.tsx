import LatestNews from "@/components/LatestNews";
import NewsEventsHeader from "@/components/NewsEventsHeader";
import RecentNews from "@/components/RecentNews";
import React from "react";

function NewsEventsPage() {
  return (
    <div className="mx-auto flex flex-col gap-10">
      <NewsEventsHeader />
      <LatestNews />
      <RecentNews />
    </div>
  );
}

export default NewsEventsPage;
