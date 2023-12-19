import Cursor from "./home/components/Cursor";
import Intro from "./home/components/Intro";
import ParticlesBackground from "./home/components/ParticlesBackground";
import SocialMedias from "./home/components/SocialMedias";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Cursor />
      <div className={styles.container}>
        <SocialMedias />
        <main className={styles.main}>
          <Intro />
        </main>
      </div>
    </>
  );
}
