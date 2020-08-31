import React from 'react'

import { Layout, SEO } from 'components/common'
import { About, Contact, Intro, Projects } from 'components/landing'

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <About />
    <Contact />
  </Layout>
)
