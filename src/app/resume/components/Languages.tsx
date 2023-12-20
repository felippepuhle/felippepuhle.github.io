import SimpleTable from "./common/SimpleTable";

const LANGUAGES = ["Portuguese", "English"];

export default function Languages() {
  return (
    <section>
      <h2>Languages</h2>

      <SimpleTable list={LANGUAGES} />
    </section>
  );
}
