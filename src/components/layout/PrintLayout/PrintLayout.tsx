import React from 'react'

import { GlobalStyles } from './GlobalStyles'

export const PrintLayout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)
