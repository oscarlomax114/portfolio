import Link from "next/link";
import { notFound } from "next/navigation";
import {
  projects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projects";
import MetadataBlock from "@/components/MetadataBlock";
import ProjectImage from "@/components/ProjectImage";
import GalleryGrid from "@/components/GalleryGrid";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Oscar Lomax`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.relatedProjects);

  return (
    <article className={styles.article}>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className="label">{project.category}</span>
          <div className={styles.heroTitleRow}>
            <h1 className={styles.heroTitle}>{project.title}</h1>
            {project.links.length > 0 && (
              <div className={styles.heroLinks}>
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            )}
          </div>
          <p className={styles.heroSummary}>{project.description}</p>
          <div className={styles.heroTags}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <ProjectImage
          src={project.heroImage}
          alt={`${project.title} — Hero`}
          aspectRatio={project.heroAspectRatio || "16/9"}
          scale={project.heroScale}
          objectPosition={project.heroPosition}
        />
      </div>

      {/* ─── Metadata ─────────────────────────────────────── */}
      <section className={styles.meta}>
        <div className="container">
          <MetadataBlock
            role={project.role}
            tools={project.tools}
            year={project.year}
            type={project.type}
          />
        </div>
      </section>


      {/* ─── Content Sections ─────────────────────────────── */}
      {project.sections.reduce<{ elements: React.ReactNode[]; counter: number }>(
        (acc, section, i) => {
          const isSubsection = section.subsection ?? false;
          const sectionNumber = isSubsection ? null : ++acc.counter;

          acc.elements.push(
            <section
              key={i}
              className={`${styles.contentSection} ${isSubsection ? styles.subsection : ""}`}
            >
              <div className="container">
                <div className={styles.sectionGrid}>
                  <div className={styles.sectionLabel}>
                    {sectionNumber !== null && (
                      <span className="label">
                        {String(sectionNumber).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <div className={styles.sectionBody}>
                    <div className={styles.sectionHeadingRow}>
                      <h2 className={isSubsection ? styles.subsectionHeading : styles.sectionHeading}>
                        {section.heading}
                      </h2>
                      {section.link && (
                        <a
                          href={section.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          {section.link.label} &rarr;
                        </a>
                      )}
                    </div>
                    {section.body && (
                      <p className={styles.sectionText} style={section.body.includes("\n") ? { whiteSpace: "pre-line" } : undefined}>
                        {section.body}
                      </p>
                    )}
                {section.images && section.images.length > 0 && (
                  <div
                    className={styles.sectionImages}
                    style={section.imageColumns ? { '--img-cols': section.imageColumns } as React.CSSProperties : undefined}
                  >
                    {section.images.map((img, j) => (
                      <ProjectImage
                        key={j}
                        src={img}
                        alt={`${section.heading} — Image ${j + 1}`}
                        aspectRatio={section.imageAspectRatio || "16/10"}
                        animated={section.animated?.[j] ?? false}
                        contain={section.imageContain?.[j] ?? false}
                        scale={section.imageScale}
                        objectPosition={section.imagePosition}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
          );

          return acc;
        },
        { elements: [], counter: 0 }
      ).elements}

      {/* ─── Gallery ──────────────────────────────────────── */}
      {project.galleryImages.length > 0 && (
        <section className={styles.gallery}>
          <div className="container">
            <span className="label">Gallery</span>
            <GalleryGrid
              images={project.galleryImages}
              projectTitle={project.title}
              animated={project.galleryAnimated}
            />
          </div>
        </section>
      )}

      {/* ─── Related Projects ─────────────────────────────── */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className="container">
            <span className="label">Related Projects</span>
            <div className={styles.relatedGrid}>
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/work/${rp.slug}`}
                  className={styles.relatedCard}
                >
                  <ProjectImage
                    src={rp.heroImage}
                    alt={rp.title}
                    aspectRatio="16/10"
                  />
                  <span className="label">{rp.category}</span>
                  <h3 className={styles.relatedTitle}>{rp.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Back to Work ─────────────────────────────────── */}
      <section className={styles.back}>
        <div className="container">
          <Link href="/work" className="btn">
            &larr; Back to Work
          </Link>
        </div>
      </section>
    </article>
  );
}
