import Image from "next/image";

import styles from "./SocialMedias.module.css";

const LINKS = [
  {
    href: "https://github.com/felippepuhle",
    icon: "/icons/github.png",
  },
  {
    href: "https://twitter.com/felippepuhle",
    icon: "/icons/twitter.png",
  },
  {
    href: "https://linkedin.com/in/felippepuhle",
    icon: "/icons/linkedin.png",
  },
  {
    href: "https://medium.com/@felippepuhle",
    icon: "/icons/medium.png",
  },
];

export default function SocialMedias() {
  return (
    <div className={styles.container}>
      {LINKS.map((link) => (
        <a
          href={link.href}
          target="_blank"
          className={styles.link}
          key={link.href}
        >
          <Image
            width={21}
            height={21}
            src={link.icon}
            alt={link.icon}
            quality={100}
          />
        </a>
      ))}
    </div>
  );
}
