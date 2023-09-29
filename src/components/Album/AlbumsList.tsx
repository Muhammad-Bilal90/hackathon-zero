import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IFoldersType } from "@/app/album/page";
import Link from "next/link";

const AlbumsList = ({ folder }: { folder: IFoldersType }) => {
  return (
    <>
      <Card className="">
        <CardHeader>
          <CardTitle>{folder.name}</CardTitle>
          <CardDescription>
            This album is regarding {folder.name}. You can explore all pictures
            regarding
            {folder.name} here.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Link href={`/album/${folder.name}`}>
            <Button>View Album</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default AlbumsList;
