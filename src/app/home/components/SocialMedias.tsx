import Image from "next/image";

import { SOCIAL } from "@/constants";

import styles from "./SocialMedias.module.css";

export default function SocialMedias() {
  return (
    <div className={styles.container}>
      {SOCIAL.map((social) => (
        <a
          href={social.href}
          target="_blank"
          className={styles.link}
          key={social.href}
        >
          <Image
            width={21}
            height={21}
            src={social.icon}
            alt={social.label}
            quality={100}
          />
        </a>
      ))}
    </div>
  );
}
