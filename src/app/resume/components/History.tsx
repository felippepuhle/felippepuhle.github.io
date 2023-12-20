import PeriodDescription from "./common/PeriodDescription";

const HISTORY = [
  {
    title: "Software Engineer, G2i",
    period: {
      start: "September 2020",
      end: "current",
    },
    workedOn: ["Part of the awesome G2i collective."],
    technologies:
      "ReactJS, React Native, Node.js, Next.js, GraphQL, Apollo Client, Typescript.",
  },
  {
    title: "Software Engineer, Patio",
    period: {
      start: "March 2021",
      end: "April 2023",
    },
    workedOn: [
      "Joined Patio in Sep 2020 as a React Native contractor trough G2i and got hired directly later.",
      "Worked on many projects and teams, becoming the tech lead of the web team, later the tech lead of the mobile team and ended up unifying all teams as the head of engineering.",
      "Brought up new concepts and improved some existing ones, such as: better componentization (design system), better GraphQL patterns (caching, colocation, performance), better CI/CD pipelines, automating processes and more.",
      "Improved the UX of the mobile app by adding some cool gestures and animations.",
      "Improved the TTI of the app in more than 200% (~3s to ~1s).",
      "Refactored Patio website, using Next.js 13 and server components.",
      "Worked closely to the product team, managing the engineering team, releases and expectations.",
      "Patio got sold to Yik Yak.",
    ],
    technologies:
      "ReactJS, React Native, Node.js, Next.js, GraphQL, Apollo Client, Typescript.",
  },
  {
    title: "Software Engineer, HelloMD",
    period: {
      start: "July 2018",
      end: "September 2020",
    },
    workedOn: [
      "Worked on the telehealth platform mainly as a front-end developer using React and ReactJS.",
      "Lead developer on a React Native app focused on creating videos (previously an on-line trivia game using WebSocket).",
      "Developed some cool animations and gestures with 60 FPS.",
      "Refactored the source code to Typescript, improving code quality.",
      "Brought GraphQL/Relay concepts to the team, improving app performance and UX.",
    ],
    technologies:
      "ReactJS, React Native, Redux, GraphQL, Relay, Reanimated, Typescript.",
  },
  {
    title: "Software Engineer, Horizon Four",
    period: {
      start: "April 2018",
      end: "July 2018",
    },
    workedOn: [
      "Led some startups projects using React and React Native.",
      "Worked basically as a front-end developer.",
      "Also worked on Shawee (an internal project focused on hackathons and team management).",
    ],
    technologies: "ReactJS, React Native, GraphQL, Apollo, Redux.",
  },
  {
    title: "Software Engineer, Entria",
    period: {
      start: "June 2017",
      end: "April 2018",
    },
    workedOn: [
      "Worked as a senior developer that brought up creative solutions to solve complex problems.",
      "Joined challenging projects of many respected companies like Gol, Natura and Feedback House.",
      "Played both front-end and back-end roles, working mainly with React and React Native applications served by a Node.js GraphQL server.",
      "Had a lot of fun coding React Native animations.",
    ],
    technologies:
      "ReactJS, React Native, Relay, GraphQL, Redux, Flow, Typescript, MongoDB, MySQL, Postgres.",
  },
  {
    title: "Software Engineer, DBlinks Agência Digital",
    period: {
      start: "November 2012",
      end: "June 2017",
    },
    workedOn: [
      "Worked as the technical leader of the team, architecting new ways to develop software and mentoring the team.",
      "Introduced new technologies like ReactJS and GraphQL, which provided improvements to the platform such as performance and UX.",
    ],
    technologies:
      "ReactJS, Relay, GraphQL, Redux, MongoDB, SEO, Java, Spring Boot, CDI, Selenium, PHP, CodeIgniter, Symfony, Slim Framework, Cordova, IONIC, AngularJS, MySQL, ElasticSearch, AWS.",
  },
  {
    title: "Web developer, SMO Internet Provider",
    period: {
      start: "June 2011",
      end: "November 2012",
    },
    workedOn: [
      "Developed and provided maintenance on websites.",
      "Worked on web systems that allowed the management of the servers, controlling bandwidth, access, and other features.",
    ],
    technologies:
      "PHP, MySQL, Javascript, LAN, WAN, Mikrotik, AP Router, Ubiquiti, Linux, Unix.",
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
          <p>Key technologies: {row.technologies}</p>
        </PeriodDescription>
      ))}
    </section>
  );
}
