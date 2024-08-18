"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    {
      name: "En Populer",
      url: "popular",
    },
    {
      name: "En Son",
      url: "latest",
    },
    {
      name: "Yakinda Gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 my-3 flex items-center justify-center m-5 gap-7">
      {tabs.map((tab, i) => (
        <Link key={tab.url}
          className={`cursor-pointer hover:opacity-80 transition-opacity ${
            tab.url === genre ? "underline underline-offset-8 text-amber-600" : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
