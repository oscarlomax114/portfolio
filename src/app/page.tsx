import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import ProjectImage from "@/components/ProjectImage";
import styles from "./page.module.css";

const capabilities = [
  { label: "System", title: "Brand Systems" },
  { label: "Product", title: "Product Design" },
  { label: "Interface", title: "Web Development" },
  { label: "AI", title: "AI-Assisted Workflows" },
  { label: "Motion", title: "Motion / Interaction" },
  { label: "Physical", title: "Physical Merchandise" },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const selectedProjects = projects.filter((p) => !p.featured).slice(0, 4);

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className="label">Oscar Lomax</span>
          <h1 className={styles.heroTitle}>
            Product-minded designer building visual systems, digital products,
            and physical brand experiences.
          </h1>
          <p className={styles.heroSub}>
            I work across graphic design, product design, web development,
            motion, AI-assisted workflows, and physical merchandise.
          </p>
          <div className={styles.heroCta}>
            <Link href="/work" className="btn btn-primary">
              View Work
            </Link>
            <Link href="/contact" className="btn">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Featured Work ────────────────────────────────── */}
      <section className="section section-border">
        <div className="container">
          <SectionHeader label="Featured" title="Anchor Projects" />
          <div>
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Capabilities ─────────────────────────────────── */}
      <section className="section section-border">
        <div className="container">
          <SectionHeader label="Capabilities" title="What I Do" />
          <div className={styles.capGrid}>
            {capabilities.map((cap) => (
              <div key={cap.title} className={styles.capCard}>
                <span className="label">{cap.label}</span>
                <h3 className={styles.capTitle}>{cap.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Selected Projects ────────────────────────────── */}
      <section className="section section-border">
        <div className="container">
          <SectionHeader label="Selected" title="More Work" />
          <div className={styles.selectedGrid}>
            {selectedProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={styles.selectedCard}
              >
                <ProjectImage
                  src={project.heroImage}
                  alt={project.title}
                  aspectRatio="4/3"
                  scale={project.heroScale}
                  objectPosition={project.heroPosition}
                />
                <div className={styles.selectedInfo}>
                  <span className="label">{project.category}</span>
                  <h3 className={styles.selectedTitle}>{project.title}</h3>
                  <p className={styles.selectedDesc}>{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link href="/work" className="btn">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
