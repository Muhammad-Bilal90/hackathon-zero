"use client";
import EditTabs from "@/components/Edit/EditTabs";
import React from "react";

const Page = ({
  searchParams: { publicId },
}: {
  searchParams: { publicId: string };
}) => {
  return (
    <>
      <div className="flex justify-between pb-8">
        <h1 className="font-bold text-4xl">Favourites</h1>
      </div>
      <EditTabs publicId={publicId} />
    </>
  );
};

export default Page;
