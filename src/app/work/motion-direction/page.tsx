"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import ProjectImage from "@/components/ProjectImage";
import styles from "./page.module.css";

const spiteVideo = "/images/projects/motion/spite-loop.mp4";

const geminiImages = [
  "/images/projects/motion/gemini-gif.gif",
  "/images/projects/motion/gemini-gif-2.webp",
  "/images/projects/motion/gemini-gif-3.webp",
  "/images/projects/motion/gemini-still.webp",
  "/images/projects/motion/gemini-still-2.avif",
  "/images/projects/motion/gemini-still-3.avif",
  "/images/projects/motion/gemini-still-4.avif",
];

const animatedExts = [".gif", ".webp"];
function isAnimated(src: string) {
  return animatedExts.some((ext) => src.toLowerCase().endsWith(ext));
}

const geminiVideoUrl = "https://www.youtube.com/watch?v=EeL2GE8iRV4";

export default function MotionDirectionPage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = geminiImages[activeIndex];

  return (
    <article className={styles.article}>
      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className="label">Motion</span>
          <h1 className={styles.heroTitle}>Motion / Direction</h1>
        </div>
      </section>

      <div className="container">
        <div className={styles.heroSplit}>
          <div className={styles.heroSplitLeft}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/projects/motion/gemini-gif.gif"
              alt="Gemini — Motion"
              className={styles.heroSplitMedia}
            />
          </div>
          <div className={styles.heroSplitRight}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.heroSplitMedia}
            >
              <source src={spiteVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <section className={styles.descriptor}>
        <div className="container">
          <p className={styles.descriptorText}>
            Motion design and visual direction across digital animation and live
            production. Focused on translating client ideas into clear, on-beat
            motion with clean, controlled execution.
          </p>
        </div>
      </section>

      {/* ─── Spite Podcast Animation ─────────────────────── */}
      <section className={styles.subsection}>
        <div className="container">
          <span className="label">
            Spite Podcast — Motion Design
          </span>
          <p className={styles.subsectionDesc}>
            Logo animation built around a single action: a can enters, settles,
            and triggers the title reveal. Designed to feel quick, punchy, and
            readable at small scale.
          </p>
          <div className={styles.videoWrap}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
            >
              <source src={spiteVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ─── Gemini Music Video ──────────────────────────── */}
      <section className={styles.subsection}>
        <div className="container">
          <div className={styles.geminiTitleRow}>
            <span className="label">
              Gemini — Music Video (Direction Support / Editing / Shooting)
            </span>
            <a
              href={geminiVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Full Video &rarr;
            </a>
          </div>
          <p className={styles.subsectionDesc}>
            Collaborative music video project involving on-set shooting,
            editing, and creative direction support.
          </p>

          <div className={styles.geminiHero}>
            <ProjectImage
              src={activeImage}
              alt="Gemini — Featured"
              aspectRatio="16/9"
              animated={isAnimated(activeImage)}
            />
          </div>

          {/* Horizontal scroll gallery */}
          <div className={styles.gallery} ref={galleryRef}>
            {geminiImages.map((src, i) => (
              <button
                key={src}
                className={`${styles.galleryItem} ${i === activeIndex ? styles.galleryItemActive : ""}`}
                onClick={() => setActiveIndex(i)}
                type="button"
              >
                <ProjectImage
                  src={src}
                  alt={`Gemini — Still ${i + 1}`}
                  aspectRatio="16/9"
                  animated={isAnimated(src)}
                />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Back ─────────────────────────────────────────── */}
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
