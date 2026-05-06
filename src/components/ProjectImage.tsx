import Image from "next/image";
import MediaPlaceholder from "./MediaPlaceholder";
import styles from "./ProjectImage.module.css";

interface ProjectImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  animated?: boolean;
  scale?: number;
  objectPosition?: string;
  contain?: boolean; // use object-fit: contain to show full image
}

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif", ".svg"];

function isRealImage(src: string): boolean {
  if (!src.startsWith("/images/")) return false;
  return imageExtensions.some((ext) => src.toLowerCase().endsWith(ext));
}

export default function ProjectImage({
  src,
  alt,
  aspectRatio = "16/10",
  animated = false,
  scale,
  objectPosition,
  contain = false,
}: ProjectImageProps) {
  if (!isRealImage(src)) {
    return <MediaPlaceholder label={alt} aspectRatio={aspectRatio} />;
  }

  const imageStyle: React.CSSProperties = {
    ...(scale ? { transform: `scale(${scale})` } : {}),
    ...(objectPosition ? { objectPosition, transformOrigin: objectPosition } : {}),
    ...(contain ? { objectFit: "contain" as const } : {}),
  };

  if (animated) {
    return (
      <div className={styles.wrapper} style={{ aspectRatio }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={styles.animatedImage}
          style={imageStyle}
        />
      </div>
    );
  }

  return (
    <div className={styles.wrapper} style={{ aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        className={styles.image}
        style={imageStyle}
      />
    </div>
  );
}
