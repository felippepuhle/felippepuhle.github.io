import clsx from "clsx";
import { Roboto } from "next/font/google";
import Image from "next/image";

import styles from "./Intro.module.css";

const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export default function Intro() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <Image
              src="/profile.jpg"
              width={60}
              height={60}
              quality={95}
              alt="Felippe Rodrigo Puhle"
              className={styles.avatar}
            />

            <div className={styles.nameAndBio}>
              <h1 className={clsx(roboto.className, styles.name)}>
                Felippe Rodrigo Puhle
              </h1>

              <span className={styles.bio}>SOFTWARE ENGINEER | FULL-STACK</span>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerItem}>
              <Image
                width={16}
                height={16}
                src="/icons/mail.png"
                alt="E-mail"
                quality={100}
              />
              <a href="mailto:felippe.puhle@gmail.com">
                felippe.puhle@gmail.com
              </a>
            </div>
            <div className={styles.footerItem}>
              <Image
                width={16}
                height={16}
                src="/icons/map-marker.png"
                alt="Location"
                quality={100}
              />
              Brazil
            </div>
            <div className={styles.footerItem}>
              <Image
                width={16}
                height={16}
                src="/icons/phone.png"
                alt="Phone"
                quality={100}
              />
              <a href="phone:+5549988608580">+55 (49) 98860-8580</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
