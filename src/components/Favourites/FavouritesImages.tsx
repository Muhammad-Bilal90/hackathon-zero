"use client";
import { CldImage } from "next-cloudinary";
import { Heart } from "lucide-react";
import { useState } from "react";
import FilledHeart from "../FilledHeart/FilledHeart";
import { AddTags } from "@/app/gallery/action";
import { ISearchResults } from "@/app/gallery/page";

interface IImageProps {
  src: string;
  tags: string[];
  width: string;
  height: string;
  removePhoto: VoidFunction;
  alt: string;
}

const FavouritesImages: React.FC<IImageProps> = ({
  src,
  tags,
  removePhoto,
  width,
  height,
  alt,
}) => {
  const [fav, setFav] = useState(tags.includes("favourite"));

  return (
    <div className="relative">
      <CldImage
        src={src}
        width={Number(width)}
        height={Number(height)}
        alt={alt}
      />
      <div
        className="absolute top-1 right-2"
        onClick={() => {
          removePhoto();
          AddTags(src, fav);
        }}
      >
        {fav ? (
          <FilledHeart />
        ) : (
          <Heart className="cursor-pointer text-white hover:text-red-500 duration-150" />
        )}
      </div>
    </div>
  );
};

export default FavouritesImages;
