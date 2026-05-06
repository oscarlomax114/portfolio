import Link from "next/link";
import ProjectImage from "./ProjectImage";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`${styles.card} ${featured ? styles.featured : ""}`}
    >
      <div className={styles.imageWrap}>
        {project.slug === "motion-direction" ? (
          <div className={styles.heroSplit}>
            <div className={styles.heroSplitHalf}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/projects/motion/gemini-gif.gif"
                alt="Gemini"
                className={styles.heroSplitMedia}
              />
            </div>
            <div className={styles.heroSplitHalf}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.heroSplitMedia}
              >
                <source src="/images/projects/motion/spite-loop.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        ) : (
          <ProjectImage
            src={project.heroImage}
            alt={project.title}
            aspectRatio={featured ? "16/9" : "16/10"}
            scale={project.heroScale}
            objectPosition={project.heroPosition}
          />
        )}
      </div>
      <div className={styles.info}>
        <span className="label">{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
