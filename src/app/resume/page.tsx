import clsx from "clsx";

import { poppins } from "@/styles/fonts";

import Education from "./components/Education";
import History from "./components/History";
import Intro from "./components/Intro";
import Languages from "./components/Languages";
import Links from "./components/Links";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import styles from "./page.module.css";
import "./page.print.css";

export default function Resume() {
  return (
    <div className={clsx(poppins.className, styles.container)}>
      <Intro />
      <main className={styles.main}>
        <div className={styles.content}>
          <Profile />
          <History />
          <Education />
          <Links />
          <Skills />
          <Languages />
        </div>
      </main>
    </div>
  );
}
