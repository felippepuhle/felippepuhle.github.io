import React from 'react'

import { SEO } from 'components/common'
import { DefaultLayout } from 'components/layout'
import { About, Contact, Intro, Projects } from 'components/landing'

export default () => (
  <DefaultLayout>
    <SEO />
    <Intro />
    <Projects />
    <About />
    <Contact />
  </DefaultLayout>
)
