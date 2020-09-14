import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Button, DevMessage, SEO } from 'components/common'
import { DefaultLayout } from 'components/layout'
import { TopRightOverlay } from 'components/common/Overlays'

const Inner = styled(TopRightOverlay)`
  padding-top: 78px;

  @media (max-width: 960px) {
    padding-top: 48px;
  }
`

const TEXT = 'You just hit a route that doesn’t exist... the sadness.'

export default () => (
  <DefaultLayout>
    <SEO title='404: Not found' location='/404' />

    <Inner>
      <DevMessage alt={TEXT}>
        <DevMessage.Title>Not found!</DevMessage.Title>
        <DevMessage.Message>{TEXT}</DevMessage.Message>
        <Button as={Link} to='/'>
          Go back
        </Button>
      </DevMessage>
    </Inner>
  </DefaultLayout>
)
