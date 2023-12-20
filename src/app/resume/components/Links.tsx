import { SOCIAL } from "@/constants";

import styles from "./Links.module.css";

export default function Links() {
  return (
    <section className={styles.container}>
      <h2>Links</h2>

      <div className={styles.content}>
        {SOCIAL.map((link) => (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            key={link.label}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
