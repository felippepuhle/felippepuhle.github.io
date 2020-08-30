import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id='about'>
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt='I’m John and I’m a Backend & Devops engineer!' />
      </Thumbnail>
      <Details>
        <h1>More about me</h1>
        <p>
          I'm a Software Engineer with industry experience building web and
          mobile apps using ReactJS, React Native, and GraphQL.
          <br />
          <br />I love to develop software with clean code, and I'm fascinated
          with learning as many things as I can. I also love helping others to
          learn in the same way.
          <br />
          <br />I consider myself a communicative person, always doing my best
          to make things happen.
        </p>
        <Button as={AnchorLink} href='#contact'>
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
