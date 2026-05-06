"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <span className="label">Contact</span>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            Open to freelance, collaboration, and full-time opportunities.
          </p>
        </div>

        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="name">
                Name
              </label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">
                Email
              </label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="message">
                Message
              </label>
              <textarea
                className="input"
                id="message"
                name="message"
                placeholder="What are you working on?"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className={styles.success}>Message sent.</p>
            )}
            {status === "error" && (
              <p className={styles.errorMsg}>Something went wrong. Try again or email directly.</p>
            )}
          </form>

          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <span className="label">Email</span>
              <a href="mailto:oscarlomax114@gmail.com" className={styles.infoLink}>
                oscarlomax114@gmail.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
