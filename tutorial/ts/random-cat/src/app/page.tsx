import { fetchImage } from "@/lib/fetchImage";
import { CatImage } from "@/components/catImage";
export const dynamic = "force-dynamic";

export default async function Home() {
  const image = await fetchImage();
  return (
    <>
      <CatImage url={image.url} />
    </>
  );
}
