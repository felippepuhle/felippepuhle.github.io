"use client";

import clsx from "clsx";
import Typed from "react-typed";

import { poppins } from "@/styles/fonts";

import styles from "./Intro.module.css";

const STRINGS = ["Software Engineer.", "Passionate.", "Leader."];

export default function Intro() {
  return (
    <div className={styles.container}>
      <h1 className={clsx(poppins.className, styles.title)}>
        <span className={styles.color}>Felippe</span> Puhle
      </h1>
      <h2 className={styles.subtitle}>
        I&apos;m a{" "}
        <Typed
          strings={STRINGS}
          backSpeed={50}
          typeSpeed={80}
          loop
          className={styles.color}
          backDelay={1500}
        />
      </h2>
    </div>
  );
}
