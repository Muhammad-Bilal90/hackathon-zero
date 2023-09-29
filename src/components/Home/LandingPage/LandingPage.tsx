"use client";
import { CldUploadButton, CldImage } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

const LandingPage = () => {
  const [imageID, setImageID] = useState("");
  return (
    <>
      <h1 className="font-bold text-xl">Pictures Gallery</h1>
      <div></div>
      <div></div>
    </>
  );
};

export default LandingPage;
