import PeriodDescription from "./common/PeriodDescription";

const HISTORY = [
  {
    title: "Head of Engineering, Patio",
    period: {
      start: "September 2020",
      end: "December 2023",
    },
    description:
      "Patio was a 'Slack for College Students' app, boasting 1 million registered users and 100k+ daily active users, that was sold to YikYak after securing $10 million in funding from top Silicon Valley investors.",
    workedOn: [
      "Initially hired as a contractor, I was promoted to the role of Head of Engineering reporting to the CEO for the last 2 years.",
      "Led a 10-person remote engineering team based in the US/LatAm/Europe across three specialized teams: backend, mobile, and web.",
      "Streamlined the entire engineering operation, from design conception to development and release, facilitating the rapid launch of new features while maintaining high-quality standards through guidance and code reviews.",
      "Collaborated with tech leads to implement agile processes and authored PRD documents, ensuring alignment and coherence in development across design, marketing, and engineering.",
      "Effectively managed team culture and individual expectations through regular all-hands meetings and one-on-one sessions.",
      "Involved daily in hands-on critical coding tasks, which included optimizing app performance (TTI reduced from 3s to 1s), implementing advanced GraphQL patterns (caching, colocation, performance), introducing a robust componentization strategy (design system), and enhancing UX through captivating gestures and animations.",
    ],
    technologies: [
      "React Native",
      "ReactJS",
      "GraphQL",
      "Typescript",
      "Next.js",
      "Apollo Client",
      "Node.js",
      "PostgreSQL",
      "Redux",
      "Firebase",
      "Storybook",
      "Detox",
      "Cypress",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "Software Engineer, HelloMD",
    period: {
      start: "July 2018",
      end: "September 2020",
    },
    description:
      "HelloMD is a digital healthcare platform/community for medical marijuana patients, later expanding into a real-time trivia game made with React Native (with nearly zero latency), which subsequently evolved into a comprehensive video creation platform being used by around 14k users.",
    workedOn: [
      "Implemented GraphQL and Relay, significantly reducing the main screen load time by approximately 60% (from 4s to 2.5s), and optimizing other requests by an impressive 127%.",
      "Restructured the entire source code to Typescript, elevating code quality and contributing to bug-free application development.",
      "Enhanced the trivia game experience by implementing Websockets + WebRTC, reducing latency and ensuring smoother app performance through the integration of high-quality 60FPS animations using Reanimated + Gesture Handler.",
      "Guided and actively contributed to web front-end development using ReactJS on the telehealth platform, shifting from legacy code patterns (e.g., class components + recompose) to more modern approaches, including the adoption of hooks.",
    ],
    technologies: [
      "React Native",
      "ReactJS",
      "GraphQL",
      "Relay",
      "Typescript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Redux",
      "WebRTC",
      "Cypress",
      "Jest",
      "React Testing Library",
    ],
  },
  {
    title: "Software Engineer, Horizon Four",
    period: {
      start: "April 2018",
      end: "July 2018",
    },
    description:
      "Horizon Four was formerly a software house with a focus on developing solutions for startups which ended up giving rise to Shawee, later merging with Rocketseat (a well-known coding school in Brazil).",
    workedOn: [
      "Led the creation of multiple customized React and React Native applications. Collaborated to align technical solutions with each startup's unique business goals, enhancing project success.",
      "Managed projects from inception to completion, consistently meeting tight timelines, and delivering bug-free code with innovative features (5 projects in ~3 months).",
      "Collaborated closely with cross-functional teams, fostering open communication and teamwork to achieve successful project outcomes.",
      "Contributed significantly to internal projects like Shawee, a hackathon management platform, showcasing versatility in addressing client-facing and internal development needs.",
    ],
    technologies: [
      "React Native",
      "ReactJS",
      "GraphQL",
      "Apollo Client",
      "Redux",
    ],
    hideOnPrint: true,
  },
  {
    title: "Software Engineer, Entria",
    period: {
      start: "June 2017",
      end: "April 2018",
    },
    description:
      "Entria, a Software House based in Sao Paulo, was created by two founding members of the React community in Brazil. Now known as Woovi, it has evolved into a comprehensive platform for managing Pix payments, cashback, and credit.",
    workedOn: [
      "Significantly involved in the creation and improvement of solutions, actively participating in both front-end and back-end roles using bleeding-edge technologies, including (but not limited to) React, React Native, and GraphQL.",
      "Contributed to the development of the 'Força de Vendas' mobile app for Natura, the 9th largest beauty company globally. This app, still utilized by hundreds of thousands of sellers, provides comprehensive control over networks and sales. Subsequently, led the development of the 'Força de Vendas' web app from the ground up, aligning it with new designs.",
      "Played a pivotal role in the Gol Linhas Áereas mobile app, serving millions of users. Collaborated closely with the team to drive the implementation of various features, including flight status checks, check-ins, and luggage purchases. Tackled challenging tasks, such as implementing captivating animations for the seatmap, creating an engaging user experience with plane landing and take-off animations.",
    ],
    technologies: [
      "React Native",
      "ReactJS",
      "GraphQL",
      "Relay",
      "Typescript",
      "Node.js",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redux",
      "Flow",
    ],
  },
  {
    title: "Software Engineer, DB'links Sistemas",
    period: {
      start: "November 2012",
      end: "June 2017",
    },
    description:
      "DB'links initially operated as a software house, specializing in the development of web apps and websites.  Over time, it strategically shifted its focus and is now dedicated to serving the e-commerce needs of supermarkets, calling the product as OSuper.",
    workedOn: [
      "Led technical initiatives, guiding a team of 5 and introducing new technologies that significantly enhanced platform performance, user experience, development efficiency, and team engagement.",
      "Recognizing the constraints imposed by the existing framework (Codeigniter), I took the initiative to create 'Draco,' a robust framework built on top of the Slim Framework. This strategic move led to a remarkable ~100% improvement in project development speed, reducing the timeline from a month to a couple of weeks.",
      "Pioneered the development of DBcommerce (now OSuper), an in-house E-Commerce platform leveraging existing technologies. Its success prompted a strategic decision to undergo a complete rewrite for enhanced capabilities and an improved user experience. Taking the lead, I introduced React, GraphQL, and Relay to the team, actively contributing to the creation of its core features. Following these achievements, I transitioned from DB'links.",
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
    description:
      "The largest local ISP that also served diversified offerings, including websites development, hosting services and mailing solutions.",
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
    hideOnPrint: true,
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
          hideOnPrint={row.hideOnPrint}
          key={row.title}
        >
          {row.description ? <p>{row.description}</p> : null}
          {row.workedOn.length > 0 ? (
            <ul>
              {row.workedOn.map((workedOnRow, index) => (
                <li key={workedOnRow}>{workedOnRow}</li>
              ))}
            </ul>
          ) : null}
          <p>Key technologies: {row.technologies.join(", ")}.</p>
        </PeriodDescription>
      ))}
    </section>
  );
}
