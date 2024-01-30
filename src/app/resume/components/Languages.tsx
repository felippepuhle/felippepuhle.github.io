import SimpleTable from "./common/SimpleTable";

const LANGUAGES = ["English\n(fluent written and verbal)", "Portuguese"];

export default function Languages() {
  return (
    <section>
      <h2>Languages</h2>

      <SimpleTable list={LANGUAGES} />
    </section>
  );
}
