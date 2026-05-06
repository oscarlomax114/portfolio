import ProjectCard from "./ProjectCard";
import type { Project } from "@/data/projects";
import styles from "./ProjectGrid.module.css";

interface ProjectGridProps {
  projects: Project[];
  showFeaturedStyle?: boolean;
}

export default function ProjectGrid({
  projects,
  showFeaturedStyle = false,
}: ProjectGridProps) {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
          featured={showFeaturedStyle && project.featured}
        />
      ))}
    </div>
  );
}
