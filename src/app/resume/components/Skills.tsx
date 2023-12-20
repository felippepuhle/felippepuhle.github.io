import SimpleTable from "./common/SimpleTable";

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
    <section>
      <h2>Skills</h2>

      <SimpleTable list={SKILLS} />
    </section>
  );
}
