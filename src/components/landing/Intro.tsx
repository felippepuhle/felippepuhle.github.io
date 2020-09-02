import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import { Header } from 'components/theme'
import { TopRightOverlay } from 'components/common/Overlays'
import { Button, DevMessage } from 'components/common'

const TEXT = 'I’m Felippe Puhle and I’m a Software engineer!'

const Wrapper = styled(TopRightOverlay)`
  @media (min-width: 993px) {
    padding-bottom: 4rem;
  }
`

export const Intro = () => (
  <Wrapper>
    <Header />

    <DevMessage alt={TEXT}>
      <DevMessage.Title>Hi there!</DevMessage.Title>
      <DevMessage.Message>{TEXT}</DevMessage.Message>
      <Button as={AnchorLink} href='#contact'>
        Hire me
      </Button>
    </DevMessage>
  </Wrapper>
)
