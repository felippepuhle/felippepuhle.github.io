import SimpleTable from "./common/SimpleTable";

const LANGUAGES = ["Portuguese", "English\n(fluent written and verbal)"];

export default function Languages() {
  return (
    <section>
      <h2>Languages</h2>

      <SimpleTable list={LANGUAGES} />
    </section>
  );
}
