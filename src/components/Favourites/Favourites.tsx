"use client";

import { ISearchResults } from "@/app/gallery/page";
import { useState } from "react";
import FavouritesImages from "./FavouritesImages";

const Favourites = ({ photos }: { photos: ISearchResults[] }) => {
  const [photosList, setPhotosList] = useState<ISearchResults[]>(photos);
  // console.log(photos);
  const removePhoto = (publicId: string) => {
    setPhotosList((photosList) =>
      photosList.filter((item: ISearchResults) => item.public_id !== publicId)
    );
  };
  return (
    <>
      <div className="flex justify-between pb-8">
        <h1 className="font-bold text-4xl">Favourites</h1>
      </div>
      <div className="columns-1 sm:columns-4 space-y-4 mb-4">
        {photosList.map((item: ISearchResults) => (
          <div key={item.public_id} className="break-inside-avoid">
            <FavouritesImages
              src={item.public_id}
              tags={item.tags}
              removePhoto={() => removePhoto(item.public_id)}
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

export default Favourites;
