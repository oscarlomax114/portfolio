import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const capabilities = [
  "System-driven brand design",
  "Product and packaging systems",
  "Digital platforms (design + development)",
  "Concept translation (idea → object → interface)",
  "AI-assisted creative workflows",
  "Motion and visual direction",
];

const toolGroups = [
  { group: "Adobe", items: "Illustrator, Photoshop, After Effects" },
  { group: "3D", items: "Blender" },
  { group: "Frontend", items: "React, Next.js" },
  { group: "Backend / Infrastructure", items: "Supabase, Stripe, Netlify" },
  { group: "AI", items: "Image, video, automation" },
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="label">About</span>
          <h1 className={styles.title}>Oscar Lomax</h1>
        </div>

        <div className={styles.content}>
          {/* ─── Bio ─────────────────────────────────────── */}
          <div className={styles.bio}>
            <p className={styles.intro}>
              I&apos;m a product-minded designer focused on building visual systems,
              digital products, and physical brand experiences.
            </p>
            <p className={styles.body}>
              My work spans graphic design, product design, and web development.
              I design and ship across the full stack — from identity and interface
              to packaging and merchandise — using AI-assisted workflows to move
              quickly from concept to execution.
            </p>
            <p className={styles.body}>
              I focus on systems that scale: brand identities that translate across
              touchpoints, products that function clearly, and physical outputs that
              feel intentional and consistent with the digital experience.
            </p>
            <div className={styles.portrait}>
              <Image
                src="/images/aboutme-v2.jpg"
                alt="Oscar Lomax"
                width={600}
                height={750}
                className={styles.portraitImage}
                priority
              />
            </div>
          </div>

          {/* ─── Capabilities + Tools ────────────────────── */}
          <div className={styles.lists}>
            <div className={styles.listBlock}>
              <span className="label">Capabilities</span>
              <ul className={styles.list}>
                {capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.listBlock}>
              <span className="label">Tools</span>
              <div className={styles.toolGroups}>
                {toolGroups.map((t) => (
                  <div key={t.group} className={styles.toolGroup}>
                    <span className={styles.toolGroupLabel}>{t.group}</span>
                    <span className={styles.toolGroupItems}>{t.items}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Resume + CTA ──────────────────────────────── */}
        <div className={styles.actions}>
          <a href="/Oscar_Lomax_Resume.pdf" className="btn" download>
            Download Resume
          </a>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
