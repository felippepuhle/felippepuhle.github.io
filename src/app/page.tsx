import Cursor from "@/components/Cursor";
import ParticlesBackground from "@/components/ParticlesBackground";

import Intro from "./home/components/Intro";
import SocialMedias from "./home/components/SocialMedias";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <SocialMedias />
        <main className={styles.main}>
          <Intro />
        </main>
      </div>
    </div>
  );
}
