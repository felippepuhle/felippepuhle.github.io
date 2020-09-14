import React from 'react'

import { SEO } from 'components/common'
import { PrintLayout } from 'components/layout'
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

export default () => (
  <PrintLayout>
    <SEO title={`${defaultTitle} | Resume`} />

    <Intro />
    <Profile />
    <History />
    <Education />
    <Links />
    <Skills />
    <Languages />
  </PrintLayout>
)
