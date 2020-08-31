import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common/Container'

import dev from './assets/dev.svg'

const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: ${({ theme }) => (theme.isDarkMode ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme.isDarkMode ? 'difference' : 'unset'};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: ${({ theme }) => (theme.isDarkMode ? '#e6e6e6' : '#707070')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) =>
        theme.isDarkMode ? 'difference' : 'unset'};
    }

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`

const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`

type Props = {
  alt?: string
}

export const DevMessage: React.FC<Props> = ({ children, alt }) => (
  <Wrapper as={Container}>
    <Details>{children}</Details>
    <Thumbnail>
      <img src={dev} alt={alt} />
    </Thumbnail>
  </Wrapper>
)
