"use client";

import { useState } from "react";
import ProjectImage from "./ProjectImage";
import Lightbox from "./Lightbox";
import styles from "./GalleryGrid.module.css";

interface GalleryGridProps {
  images: string[];
  projectTitle: string;
  animated?: boolean[];
}

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"];

function isRealImage(src: string): boolean {
  if (!src.startsWith("/images/")) return false;
  return imageExtensions.some((ext) => src.toLowerCase().endsWith(ext));
}

export default function GalleryGrid({
  images,
  projectTitle,
  animated,
}: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const realImages = images.filter(isRealImage);

  return (
    <>
      <div className={styles.grid}>
        {images.map((img, i) => {
          const isReal = isRealImage(img);
          const realIndex = isReal ? realImages.indexOf(img) : -1;

          return (
            <button
              key={i}
              className={`${styles.item} ${isReal ? styles.clickable : ""}`}
              onClick={() => {
                if (isReal && realIndex >= 0) setLightboxIndex(realIndex);
              }}
              disabled={!isReal}
              aria-label={`View ${projectTitle} image ${i + 1}`}
            >
              <ProjectImage
                src={img}
                alt={`${projectTitle} — Gallery ${i + 1}`}
                aspectRatio="4/3"
                animated={animated?.[i] ?? false}
              />
            </button>
          );
        })}
      </div>

      {lightboxIndex !== null && realImages.length > 0 && (
        <Lightbox
          images={realImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
