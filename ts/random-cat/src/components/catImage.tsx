"use client";
import { fetchImage } from "@/lib/fetchImage";
import Image from "next/image";
import { useState } from "react";
export const dynamic = "force-dynamic";
import styles from "@/app/page.module.css";

type CatImageProps = {
  url: string;
};

export function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState(url);

  const refreshImage = async () => {
    setImageUrl("");
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div className={styles.page}>
      <button onClick={refreshImage} className={styles.button}>
        他のにゃんこも見る
      </button>
      <div className={styles.frame}>
        {imageUrl && (
          <Image src={imageUrl} alt="猫画像" width={1000} height={0} />
        )}
      </div>
    </div>
  );
}
