import PeriodDescription from "./common/PeriodDescription";

const EDUCATION = [
  {
    title: "Universidade do Sul de Santa Catarina",
    subtitle: "Bachelor of Technology, Internet Systems, GPA: 3.76",
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
          subtitle={row.subtitle}
          period={row.period}
          key={row.title}
        />
      ))}
    </section>
  );
}
