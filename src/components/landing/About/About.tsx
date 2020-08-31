import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import { Container, Button } from 'components/common'
import { LeftOverlay } from 'components/common/Overlays'

import skills from './assets/skills.svg'

const Inner = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`

const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h2 {
    color: ${({ theme }) => (theme.isDarkMode ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme.isDarkMode ? 'difference' : 'unset'};
    }
  }

  p {
    font-size: 22px;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme.isDarkMode ? '#c7c7c7' : '#707070')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme.isDarkMode ? 'difference' : 'unset'};
    }
  }
`

const ButtonWrapper = styled.div`
  margin-top: 2.5rem;
`

export const About = () => (
  <LeftOverlay id='about'>
    <Inner as={Container}>
      <Thumbnail>
        <img src={skills} alt='I’m John and I’m a Backend & Devops engineer!' />
      </Thumbnail>
      <Details>
        <h2>More about me</h2>
        <p>
          I'm a Software Engineer with industry experience building web and
          mobile apps using ReactJS, React Native, and GraphQL.
        </p>
        <p>
          I love to develop software with clean code, and I'm fascinated with
          learning as many things as I can. I also love helping others to learn
          in the same way.
        </p>
        <p>
          I consider myself a communicative person, always doing my best to make
          things happen.
        </p>

        <ButtonWrapper>
          <Button as={AnchorLink} href='#contact'>
            Hire me
          </Button>
        </ButtonWrapper>
      </Details>
    </Inner>
  </LeftOverlay>
)
