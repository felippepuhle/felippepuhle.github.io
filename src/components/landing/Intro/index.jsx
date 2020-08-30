import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

const TEXT = 'I’m Felippe and I’m a Software engineer!'

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hello!</h1>
        <h4>{TEXT}</h4>
        <Button as={AnchorLink} href='#contact'>
          Hire me
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt={TEXT} />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
)