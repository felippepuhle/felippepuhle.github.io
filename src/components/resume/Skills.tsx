import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'

import { CONTAINER_SIZE } from './constants'
import { SkillsTable } from './SkillsTable'

const SKILLS = [
  'ReactJS',
  'React Native',
  'GraphQL',
  'Relay',
  'Typescript',
  'Node.js',
]

export const Skills = () => (
  <section>
    <Container maxWidth={CONTAINER_SIZE}>
      <h2>Skills</h2>
      <SkillsTable list={SKILLS} />
    </Container>
  </section>
)
