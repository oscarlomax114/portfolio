import styles from "./MetadataBlock.module.css";

interface MetadataBlockProps {
  role: string;
  tools: string[];
  year: string;
  type: string;
}

export default function MetadataBlock({
  role,
  tools,
  year,
  type,
}: MetadataBlockProps) {
  const items = [
    { label: "Role", value: role },
    { label: "Type", value: type },
    { label: "Tools", value: tools.join(", ") },
  ];

  return (
    <div className={styles.block}>
      {items.map((item) => (
        <div key={item.label} className={styles.item}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.value}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
