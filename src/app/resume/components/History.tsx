import PeriodDescription from "./common/PeriodDescription";

const HISTORY = [
  {
    title: "Head of Engineering, Patio",
    period: {
      start: "September 2020",
      end: "December 2023",
    },
    workedOn: [
      "Transitioned from React Native contractor (through G2i) to Head of Engineering.",
      "Drastically improved app performance, reducing TTI from 3s to 1s.",
      "Implemented a better componentization strategy(design system) and optimized GraphQL patterns (caching, colocation, performance).",
      "Improved UX by using better gestures and captivating animations.",
      "Automated CI/CD pipelines so we could ship faster.",
      "Managed engineering operations, releases, and contributed to Patio's successful acquisition (Yik Yak).",
    ],
    technologies: [
      "ReactJS",
      "React Native",
      "GraphQL",
      "Typescript",
      "Apollo Client",
      "Node.js",
      "Next.js",
      "PostgreSQL",
    ],
  },
  {
    title: "Software Engineer, HelloMD",
    period: {
      start: "July 2018",
      end: "September 2020",
    },
    workedOn: [
      "Led front-end development utilizing ReactJS for the telehealth platform.",
      "Drove the evolution of a React Native app, originally an online trivia game, into a comprehensive video creation platform.",
      "Improved code quality by refactoring source code to Typescript.",
      "Implemented advanced GraphQL/Relay concepts, optimizing app performance and user experience.",
      "Developed high-quality 60FPS animations using Reanimated, improving app responsiveness.",
    ],
    technologies: [
      "ReactJS",
      "React Native",
      "GraphQL",
      "Relay",
      "Typescript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Software Engineer, Horizon Four",
    period: {
      start: "April 2018",
      end: "July 2018",
    },
    workedOn: [
      "Led React and React Native projects for startups, specializing in front-end development and contributing to internal projects like Shawee.",
    ],
    technologies: [
      "ReactJS",
      "React Native",
      "GraphQL",
      "Apollo Client",
      "Redux",
    ],
  },
  {
    title: "Software Engineer, Entria",
    period: {
      start: "June 2017",
      end: "April 2018",
    },
    workedOn: [
      "Delivered creative solutions for complex challenges (for example, crafting captivating animations), engaging in both front-end and back-end roles across React and React Native applications.",
      "Contributed to projects of many respected companies like Gol and Natura.",
    ],
    technologies: [
      "ReactJS",
      "React Native",
      "GraphQL",
      "Relay",
      "Typescript",
      "Flow",
      "Node.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Software Engineer, DBlinks Agência Digital",
    period: {
      start: "November 2012",
      end: "June 2017",
    },
    workedOn: [
      "Led technical initiatives, introducing technologies like ReactJS and GraphQL, significantly enhancing platform performance and user experience.",
    ],
    technologies: [
      "ReactJS",
      "GraphQL",
      "Relay",
      "Redux",
      "Node.js",
      "MongoDB",
      "MySQL",
      "PHP",
      "Cordova",
      "AngularJS",
      "ElasticSearch",
      "AWS",
    ],
  },
  {
    title: "Web developer, SMO Internet Provider",
    period: {
      start: "June 2011",
      end: "November 2012",
    },
    workedOn: [
      "Developed and maintained websites, contributing to web systems for server management.",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "Javascript",
      "LAN-WAN",
      "Mikrotik",
      "Ubiquiti",
      "Linux",
      "Unix",
    ],
  },
];

export default function History() {
  return (
    <section>
      <h2>Employment History</h2>

      {HISTORY.map((row) => (
        <PeriodDescription
          title={row.title}
          period={row.period}
          key={row.title}
        >
          <p>
            {row.workedOn.map((workedOnRow, index) => (
              <span key={workedOnRow}>
                {index > 0 && <br />} - {workedOnRow}
              </span>
            ))}
          </p>
          <p>Key technologies: {row.technologies.join(", ")}.</p>
        </PeriodDescription>
      ))}
    </section>
  );
}
