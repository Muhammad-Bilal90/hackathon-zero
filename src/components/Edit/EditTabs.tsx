"use client ";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CldImage } from "next-cloudinary";
import { useRef, useState } from "react";

interface IProps {
  publicId: string;
}

const EditTabs: React.FC<IProps> = ({ publicId }) => {
  return (
    <Tabs defaultValue="original" className="w-full py-4 px-4">
      <TabsList className="w-full sm:grid sm:grid-cols-4">
        <TabsTrigger value="original">Original</TabsTrigger>
        <TabsTrigger value="blur" className="bg-red">
          Blur
        </TabsTrigger>
        <TabsTrigger value="grayscale">Gray Scale</TabsTrigger>
        <TabsTrigger value="pixelate">Pixelate</TabsTrigger>
      </TabsList>
      <div className="mt-8">
        <TabsContent value="original">
          <div className="flex flex-col justify-evenly sm:flex-row">
            <CldImage
              src={publicId}
              width="400"
              height="300"
              alt="Image for something"
            />
          </div>
        </TabsContent>
        <TabsContent value="blur">
          <div className="flex flex-col justify-center sm:flex-row gap-8">
            <CldImage
              src={publicId}
              width="400"
              height="300"
              alt="Image for something"
            />
            <CldImage
              src={publicId}
              width="400"
              height="300"
              alt="Image for something"
              effects={[{ blur: "800" }]}
            />
          </div>
        </TabsContent>
        <TabsContent value="grayscale">
          <div className="flex flex-col justify-center sm:flex-row gap-8">
            <CldImage
              src={publicId}
              width="400"
              height="300"
              alt="Image for something"
            />
            <CldImage
              src={publicId}
              width="400"
              height="300"
              alt="Image for something"
              effects={[{ grayscale: true }]}
            />
          </div>
        </TabsContent>
        <TabsContent value="pixelate">
          <div className="flex flex-col justify-center sm:flex-row gap-8">
            <CldImage
              src={publicId}
              width="400"
              height="300"
              alt="Image for something"
            />
            <CldImage
              src={publicId}
              width="400"
              height="300"
              alt="Image for something"
              effects={[{ pixelate: "20" }]}
            />
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default EditTabs;
