"use client";
import { Button } from "../ui/button";
import { CldUploadButton } from "next-cloudinary";
import { UploadResult } from "../Home/LandingPage/LandingPage";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";

const CloudinaryUploadBtn = () => {
  const router = useRouter();

  return (
    <Button asChild>
      <CldUploadButton
        onClick={() => console.log("click")}
        onUpload={() => {
          console.log("upload");
          setTimeout(() => {
            router.refresh();
          }, 1000);
        }}
        uploadPreset="u230m10b"
      >
        <div className="flex items-center gap-2">
          <Upload />
          Upload
        </div>
      </CldUploadButton>
    </Button>
  );
};

export default CloudinaryUploadBtn;
