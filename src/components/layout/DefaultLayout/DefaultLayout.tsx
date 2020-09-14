import React from 'react'

import { Footer } from './components/Footer/Footer'

import { GlobalStyles } from './GlobalStyles'

import './fonts.css'

export const DefaultLayout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
    <Footer />
  </>
)
