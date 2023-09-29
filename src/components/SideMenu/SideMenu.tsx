import Link from "next/link";
import { Button } from "../ui/button";
import { Image, FolderClosed, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SideMenu = () => {
  return (
    <>
      <div className="pb-12 hidden sm:block">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Manage
            </h2>
            <div className="space-y-1">
              <Link href="/gallery">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Image />
                  Gallery
                </Button>
              </Link>
              <Link href="/album">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <FolderClosed />
                  Albums
                </Button>
              </Link>
              <Link href="/favourites">
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <Heart />
                  Favourites
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Tabs defaultValue="gallery" className="w-full sm:hidden px-2 py-2">
        <TabsList className="w-full grid grid-cols-3">
          <Link href="/gallery">
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </Link>
          <Link href="/album">
            <TabsTrigger value="album">Albums</TabsTrigger>
          </Link>
          <Link href="/favourites">
            <TabsTrigger value="favourites">Favourites</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>
    </>
  );
};

export default SideMenu;
