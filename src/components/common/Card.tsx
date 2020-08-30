import styled from 'styled-components'

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme.isDarkMode ? '#181717' : '#fff')};
  height: 100%;
`
