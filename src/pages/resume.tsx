import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { SEO } from 'components/common'
import {
  Education,
  History,
  Intro,
  Languages,
  Links,
  Profile,
  Skills,
} from 'components/resume'
import { defaultTitle } from 'data/config'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  section {
    padding-top: 3rem;

    :first-of-type {
      padding-top: 4rem;
    }
    :last-of-type {
      padding-bottom: 4rem;
    }
  }

  h2,
  h3 {
    color: #171c1e;
  }
  h2 {
    font-size: 1.2rem;
    margin: 0 0 0.5rem;
  }
  h3 {
    font-size: 0.9rem;
    margin: 0;
  }

  p, a {
    font-size: 14px;
    line-height: 25px;
  }
  p {
    color: #444444;
    margin: 0 0 1.2rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }
  a {
    color: #6e6e6e;
  }

  @media print {
    @page {
      size: Legal;
      margin-left: 0;
      margin-right: 0;
    }

    @page :first {
      margin-top: 0;
    }

    body {
      -webkit-print-color-adjust: exact;
    }
  }
`

export default () => (
  <>
    <SEO title={`${defaultTitle} | Resume`} />
    <GlobalStyles />

    <Intro />
    <Profile />
    <History />
    <Education />
    <Links />
    <Skills />
    <Languages />
  </>
)
