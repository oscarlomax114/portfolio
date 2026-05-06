"use client";

import styles from "./FilterTabs.module.css";

interface FilterTabsProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterTabs({
  categories,
  activeFilter,
  onFilterChange,
}: FilterTabsProps) {
  return (
    <div className={styles.tabs}>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`${styles.tab} ${
            activeFilter === cat ? styles.tabActive : ""
          }`}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
