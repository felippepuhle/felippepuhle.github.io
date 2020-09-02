import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'

import { PeriodDescriptionRow } from './PeriodDescriptionRow'

const EDUCATION = [
  {
    title: 'Technologist, Internet Systems, UNISUL',
    period: {
      start: 'January 2012',
      end: 'July 2015',
    },
  },
]

export const Education = () => (
  <section>
    <Container maxWidth={625}>
      <h2>Education</h2>

      {EDUCATION.map((row) => (
        <PeriodDescriptionRow
          key={row.title}
          title={row.title}
          period={row.period}
        />
      ))}
    </Container>
  </section>
)
