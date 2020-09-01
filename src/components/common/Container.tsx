import styled from 'styled-components'

export const Container = styled.div<{ maxWidth?: number }>`
  max-width: ${({ maxWidth }) => maxWidth || 1280}px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`
