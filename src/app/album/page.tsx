import AlbumsList from "@/components/Album/AlbumsList";
import cloudinary from "cloudinary";

export interface IFoldersType {
  name: string;
  path: string;
}

const Page = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: IFoldersType[];
  };

  return (
    <>
      <div className="flex justify-between pb-8">
        <h1 className="font-bold text-4xl">Albums</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-5 ">
        {folders.map((item, index) => (
          <div key={index}>
            <AlbumsList folder={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
