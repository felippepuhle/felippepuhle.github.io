import React from 'react'

import { Footer } from 'components/theme'

import { GlobalStyles } from './GlobalStyles'

import './fonts.css'

export const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
    <Footer />
  </>
)
