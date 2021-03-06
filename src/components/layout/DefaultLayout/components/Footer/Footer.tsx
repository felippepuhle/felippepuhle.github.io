import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'
import { GitHub, LinkedIn, Medium, Twitter } from 'components/common/Icons'
import social from 'data/social'

import footerIllustration from './assets/footer.svg'

const ICONS = {
  github: <GitHub />,
  linkedin: <LinkedIn />,
  medium: <Medium />,
  twitter: <Twitter />,
}

const Wrapper = styled.div`
  padding: 20rem 0 4rem 0;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding-top: 16rem;
  }

  @media (max-width: 1400px) {
    padding-top: 14rem;
  }

  @media (max-width: 960px) {
    padding-top: 10rem;
  }

  @media (max-width: 680px) {
    padding-top: 14rem;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`

const Details = styled.div`
  h2,
  a,
  span {
    color: #212121;
  }

  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.25rem;
    color: ${({ theme }) => theme.colors.main};
    transition: 0.2s opacity;

    :hover {
      opacity: 0.9;
    }
  }
`

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label='love' role='img'>
            💖
          </span>{' '}
          by{' '}
          <a
            href='https://smakosh.com/?ref=portfolio-dev'
            rel='noopener noreferrer'
            target='_blank'
          >
            Smakosh
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ name, link }) => (
          <a
            key={name}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`follow me on ${name}`}
          >
            {ICONS[name.toLowerCase()]}
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
)
