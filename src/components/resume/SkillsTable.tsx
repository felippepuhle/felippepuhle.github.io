import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'
import social from 'data/social'

import { CONTAINER_SIZE } from './constants'

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media print, (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const Row = styled.p`
  margin-bottom: 0.5rem;
  width: 100%;

  @media print, (min-width: 768px) {
    width: 50%;
  }
`

type Props = {
  list: string[]
}

export const SkillsTable: React.FC<Props> = ({ list }) => (
  <Wrapper>
    {list.map((row) => (
      <Row key={row}>{row}</Row>
    ))}
  </Wrapper>
)
