import Gallery from "@/components/Gallery/Gallery";
import cloudinary from "cloudinary";

export type ISearchResults = {
  public_id: string;
  tags: string[];
};

const page = async () => {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("created_at", "desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as { resources: ISearchResults[] };

  //   console.log(result.resources);
  return <Gallery photos={result.resources} />;
};

export default page;
