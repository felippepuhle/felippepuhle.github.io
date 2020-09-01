import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Layout, SEO } from 'components/common'
import { History, Intro, Profile } from 'components/resume'
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

  a {
    text-decoration: none;
  }

  section {
    padding-top: 3rem;

    :first-of-type {
      padding-top: 4rem;
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

  p {
    font-size: 14px;
    color: #444444;
    line-height: 24px;
    margin: 0 0 1.2rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }

  @media print {
    @page {
      size: auto;
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
  </>
)
