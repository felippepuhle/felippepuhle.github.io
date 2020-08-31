import React from 'react'
import styled from 'styled-components'

import { Container } from 'components/common'
import { defaultTitle, defaultDescription } from 'data/config'

import { ContactForm } from './ContactForm'

import contact from './assets/contact.svg'

const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    padding-bottom: 0;
  }
`

const Details = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 960px) {
    padding-right: unset;
    width: 100%;
    order: 1;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: #707070;
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

export const Contact = () => (
  <Wrapper as={Container} id='contact'>
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt={`${defaultTitle} - ${defaultDescription}`} />
    </Thumbnail>
  </Wrapper>
)
