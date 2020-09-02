import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'

import { CONTAINER_SIZE } from './constants'
import { PeriodDescriptionRow } from './PeriodDescriptionRow'

const HISTORY = [
  {
    title: 'Software Engineer, HelloMD',
    period: {
      start: 'July 2018',
      end: 'September 2020',
    },
    workedOn: [
      'Worked on the telehealth platform mainly as a front-end developer using React and ReactJS.',
      'Lead developer on a React Native app focused on creating videos (previously an on-line trivia game using WebSocket).',
      'Developed 60 FPS animations and gestures handling.',
      'Refactored the source code to Typescript, improving code quality.',
      'Brought GraphQL/Relay concepts to the team, improving app performance and UX.',
    ],
    technologies:
      'ReactJS, React Native, Redux, GraphQL, Relay, Reanimated, Typescript.',
  },
  {
    title: 'Software Engineer, Horizon Four',
    period: {
      start: 'April 2018',
      end: 'July 2018',
    },
    workedOn: [
      'Led some startups projects using React and React Native.',
      'Worked basically as a front-end developer.',
      'Also worked on Shawee (an internal project focused on hackathons and team management).',
    ],
    technologies: 'ReactJS, React Native, GraphQL, Apollo, Redux.',
  },
  {
    title: 'Software Engineer, Entria',
    period: {
      start: 'June 2017',
      end: 'July 2018',
    },
    workedOn: [
      'Worked as a senior developer that brought up creative solutions to solve complex problems.',
      'Joined challenging projects of many respected companies like Gol, Natura and Feedback House.',
      'Played both front-end and back-end roles, working mainly with React and React Native applications served by a Node.js GraphQL server.',
      'Had a lot of fun coding React Native animations.',
      'ReactJS, React Native, Relay, GraphQL, Redux, Flow, Typescript, MongoDB, MySQL, Postgres.',
    ],
    technologies:
      'ReactJS, React Native, Relay, GraphQL, Redux, Flow, Typescript, MongoDB, MySQL, Postgres.',
  },
  {
    title: 'Software Engineer, DBlinks Agência Digital',
    period: {
      start: 'November 2012',
      end: 'June 2017',
    },
    workedOn: [
      'Worked as the technical leader of the team, architecting new ways to develop software and mentoring the team.',
      'Introduced new technologies like ReactJS and GraphQL, which provided improvements to the platform such as performance and UX.',
    ],
    technologies:
      'ReactJS, Relay, GraphQL, Redux, MongoDB, SEO, Java, Spring Boot, CDI, Selenium, PHP, CodeIgniter, Symfony, Slim Framework, Cordova, IONIC, AngularJS, MySQL, ElasticSearch, AWS.',
  },
  {
    title: 'Web developer, SMO Internet Provider',
    period: {
      start: 'June 2011',
      end: 'November 2012',
    },
    workedOn: [
      'Developed and provided maintenance on websites.',
      'Worked on web systems that allowed the management of the servers, controlling bandwidth, access, and other features.',
    ],
    technologies:
      'PHP, MySQL, Javascript, LAN, WAN, Mikrotik, AP Router, Ubiquiti, Linux, Unix.',
  },
]

export const History = () => (
  <section>
    <Container maxWidth={CONTAINER_SIZE}>
      <h2>Employment History</h2>

      {HISTORY.map((row) => (
        <PeriodDescriptionRow
          key={row.title}
          title={row.title}
          period={row.period}
        >
          <p>
            {row.workedOn.map((workedOnRow, index) => (
              <span key={workedOnRow}>
                {index > 0 && <br />} - {workedOnRow}
              </span>
            ))}
          </p>
          <p>Key technologies: {row.technologies}</p>
        </PeriodDescriptionRow>
      ))}
    </Container>
  </section>
)
