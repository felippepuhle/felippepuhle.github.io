import SimpleTable from "./common/SimpleTable";
import styles from "./Skills.module.css";

const SKILLS = [
  "ReactJS",
  "React Native",
  "GraphQL",
  "Relay",
  "Typescript",
  "Node.js",
];

export default function Skills() {
  return (
    <section className={styles.container}>
      <h2>Skills</h2>

      <SimpleTable list={SKILLS} />
    </section>
  );
}
