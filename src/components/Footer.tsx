import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.name}>Oscar Lomax</span>
            <span className={styles.tagline}>
              Designer / Builder / Multimedia
            </span>
          </div>
          <div className={styles.links}>
            <div className={styles.column}>
              <span className={styles.columnLabel}>Navigation</span>
              <Link href="/">Home</Link>
              <Link href="/work">Work</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={styles.column}>
              <span className={styles.columnLabel}>Contact</span>
              <a href="mailto:oscarlomax114@gmail.com">oscarlomax114@gmail.com</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>&copy; {new Date().getFullYear()} Oscar Lomax</span>
        </div>
      </div>
    </footer>
  );
}
