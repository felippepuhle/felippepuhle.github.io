import PeriodDescription from "./common/PeriodDescription";

const EDUCATION = [
  {
    title: "Technologist, Internet Systems, UNISUL",
    period: {
      start: "January 2012",
      end: "July 2015",
    },
  },
];

export default function Education() {
  return (
    <section>
      <h2>Education</h2>

      {EDUCATION.map((row) => (
        <PeriodDescription
          title={row.title}
          period={row.period}
          key={row.title}
        />
      ))}
    </section>
  );
}
