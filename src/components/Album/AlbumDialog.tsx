"use client";
import { createFolder } from "@/app/gallery/action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FolderPlus } from "lucide-react";
import { useState } from "react";
import { revalidatePath } from "next/cache";

interface IProps {
  image: string;
}

const AlbumDialog: React.FC<IProps> = ({ image }) => {
  const [album, setAlbum] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-0 m-0">
          <FolderPlus className="cursor-pointer hover:text-red-500 duration-150" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Album</DialogTitle>
          <DialogDescription>Enter Album name?</DialogDescription>
        </DialogHeader>
        {/* <div className="grid gap-4 py-4"> */}
        {/* <div className="grid grid-cols-4 items-center gap-4"> */}
        <div>
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            required
            id="name"
            value={album}
            placeholder="Enter Album name..."
            className="col-span-3 mt-3"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAlbum(e.target.value)
            }
          />
        </div>
        {/* </div> */}
        {/* </div> */}
        <DialogFooter>
          <Button
            type="submit"
            onClick={async () => {
              setOpen(false);
              await createFolder(album, image);
              revalidatePath("/album");
            }}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AlbumDialog;
