import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Button, DevMessage, Layout, SEO } from 'components/common'
import { TopRightOverlay } from 'components/common/Overlays'

const Inner = styled(TopRightOverlay)`
  padding-top: 78px;

  @media (max-width: 960px) {
    padding-top: 48px;
  }
`

const TEXT = 'You just hit a route that doesn’t exist... the sadness.'

export default () => (
  <Layout>
    <SEO title='404: Not found' location='/404' />

    <Inner>
      <DevMessage alt={TEXT}>
        <h1>Not found!</h1>
        <h4>{TEXT}</h4>
        <Button as={Link} to='/'>
          Go back
        </Button>
      </DevMessage>
    </Inner>
  </Layout>
)
