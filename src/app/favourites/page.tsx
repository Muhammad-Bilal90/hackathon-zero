import Favourites from "@/components/Favourites/Favourites";
import cloudinary from "cloudinary";

export type ISearchResults = {
  public_id: string;
  tags: string[];
};

const page = async () => {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favourite")
    .sort_by("created_at", "desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as { resources: ISearchResults[] };

  //   console.log(result.resources);
  return <Favourites photos={result.resources} />;
};

export default page;
