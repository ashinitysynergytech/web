import LatestNews from "@/Components/LatestNews";
import NewsEventsHeader from "@/Components/NewsEventsHeader";
import RecentEvents from "@/Components/RecentEvents";
import React from "react";

function NewsEventsPage() {
  return (
    <div className="mx-auto flex flex-col gap-10">
      <NewsEventsHeader />
      <div className="flex flex-col space-y-12 bg-gray-100 py-16">
        <LatestNews />
        <RecentEvents />
      </div>
    </div>
  );
}

export default NewsEventsPage;
