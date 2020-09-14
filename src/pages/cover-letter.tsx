import React from 'react'

import { SEO } from 'components/common'
import { PrintLayout } from 'components/layout'
import { Intro, Text } from 'components/cover-letter'
import { defaultTitle } from 'data/config'

export default () => (
  <PrintLayout>
    <SEO title={`${defaultTitle} | Cover letter`} />

    <Intro />
    <Text />
  </PrintLayout>
)
