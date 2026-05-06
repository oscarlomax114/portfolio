import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label?: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      {label && <span className="label">{label}</span>}
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
