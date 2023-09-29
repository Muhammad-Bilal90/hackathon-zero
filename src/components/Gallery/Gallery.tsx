"use client";

import CloudinaryUploadBtn from "../CloudinaryUploadBtn/CloudinaryUploadBtn";
import CloudinaryImage from "../CloudinaryImage/CloudinaryImage";
import { ISearchResults } from "@/app/gallery/page";

const Gallery = ({ photos }: { photos: ISearchResults[] }) => {
  // console.log(photos);
  return (
    <>
      <div className="flex justify-between pb-8">
        <h1 className="font-bold text-4xl">Gallery</h1>
        <CloudinaryUploadBtn />
      </div>
      <div className="columns-1 sm:columns-4 space-y-4 mb-4">
        {photos.map((item) => (
          <div key={item.public_id} className="break-inside-avoid">
            <CloudinaryImage
              src={item.public_id}
              tags={item.tags}
              width="400"
              height="300"
              alt="Image for something"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
