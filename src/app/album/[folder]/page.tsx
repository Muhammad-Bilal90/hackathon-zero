import { ISearchResults } from "@/app/gallery/page";
import CloudinaryImage from "@/components/CloudinaryImage/CloudinaryImage";
import cloudinary from "cloudinary";

const Page = async ({ params }: { params: { folder: string } }) => {
  const result = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${params.folder}`)
    .sort_by("created_at", "desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as { resources: ISearchResults[] };

  return (
    <>
      <div className="flex justify-between pb-8">
        <h1 className="font-bold text-4xl">Album: {params.folder}</h1>
      </div>
      <div className="columns-1 sm:columns-4 space-y-4 mb-4">
        {result.resources.map((item) => (
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

export default Page;
