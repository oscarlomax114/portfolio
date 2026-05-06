"use client";

import { useState } from "react";
import { projects, filterCategories, getFilteredProjects } from "@/data/projects";
import FilterTabs from "@/components/FilterTabs";
import ProjectGrid from "@/components/ProjectGrid";
import styles from "./page.module.css";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = getFilteredProjects(activeFilter);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="label">Index</span>
          <h1 className={styles.title}>Work</h1>
          <p className={styles.subtitle}>
            Selected projects across systems, product, brand, interface, motion,
            and experimental work.
          </p>
        </div>

        <FilterTabs
          categories={filterCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <ProjectGrid projects={filteredProjects} showFeaturedStyle={true} />

        {filteredProjects.length === 0 && (
          <p className={styles.empty}>No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
