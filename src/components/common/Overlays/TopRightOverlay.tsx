import styled from 'styled-components'

import overlay from './assets/top-right.svg'

export const TopRightOverlay = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlay});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`
