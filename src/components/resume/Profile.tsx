import React from 'react'

import { Container } from 'components/common'

import { CONTAINER_SIZE } from './constants'

export const Profile = () => (
  <section>
    <Container maxWidth={CONTAINER_SIZE}>
      <h2>Profile</h2>

      <p>
        I'm a Software Engineer with industry experience building web and mobile
        apps using ReactJS, React Native, and GraphQL.
      </p>
      <p>
        I love to develop software with clean code, and I'm fascinated with
        learning as many things as I can. I also love helping others to learn in
        the same way.
      </p>
      <p>
        I consider myself a communicative person, always doing my best to make
        things happen.
      </p>
    </Container>
  </section>
)
