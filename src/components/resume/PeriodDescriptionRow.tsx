import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0.5rem 0 1rem;
`

const Period = styled.div`
  margin: 0.5rem 0;
  font-size: 0.8rem;
  color: #777;
`

type Props = {
  title: string
  period: {
    start: string
    end: string
  }
}

export const PeriodDescriptionRow: React.FC<Props> = ({
  title,
  period,
  children,
}) => (
  <Wrapper>
    <h3>{title}</h3>
    <Period>
      {period.start} - {period.end}
    </Period>
    {children}
  </Wrapper>
)
