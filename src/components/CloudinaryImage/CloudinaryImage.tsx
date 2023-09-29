"use client";
import { CldImage } from "next-cloudinary";
import { Heart, Pencil, FolderPlus } from "lucide-react";
import { useState } from "react";
import FilledHeart from "../FilledHeart/FilledHeart";
import { AddTags } from "@/app/gallery/action";
import Link from "next/link";
import AlbumDialog from "../Album/AlbumDialog";

interface IImageProps {
  src: string;
  tags: string[];
  width: string;
  height: string;
  alt: string;
}

const CloudinaryImage: React.FC<IImageProps> = ({
  src,
  tags,
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
          setFav(!fav);
          AddTags(src, fav);
        }}
      >
        {fav ? (
          <FilledHeart />
        ) : (
          <Heart className="cursor-pointer text-white hover:text-red-500 duration-150" />
        )}
      </div>
      <div className="absolute top-1 left-2">
        <Link href={`/edit?publicId=${src}`}>
          <Pencil className="cursor-pointer hover:text-red-500 duration-150" />
        </Link>
      </div>
      <div className="absolute bottom-1 left-2">
        <AlbumDialog image={src} />
      </div>
    </div>
  );
};

export default CloudinaryImage;
