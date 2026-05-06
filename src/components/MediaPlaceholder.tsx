import styles from "./MediaPlaceholder.module.css";

interface MediaPlaceholderProps {
  label?: string;
  aspectRatio?: string; // e.g. "16/10", "1/1", "4/3"
  className?: string;
}

export default function MediaPlaceholder({
  label = "Image",
  aspectRatio = "16/10",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`${styles.placeholder} ${className}`}
      style={{ aspectRatio }}
    >
      <span className={styles.label}>{label}</span>
    </div>
  );
}
