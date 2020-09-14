import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Container } from 'components/common'
import { Email, Marker, Phone } from 'components/common/Icons'
import { Header } from 'components/print'
import { defaultTitle, defaultDescription } from 'data/config'

import { CONTAINER_SIZE } from './constants'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`

const Name = styled.h1`
  margin: 1rem 0 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  color: #fefefe;
`

const Description = styled.span`
  letter-spacing: 0.1rem;
  font-size: 11px;
  font-weight: 300;
  text-align: center;
  color: #a5a5a5;
`

export const Intro = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Header>
      <Container maxWidth={CONTAINER_SIZE}>
        <Content>
          <Avatar>
            <Img fixed={data.file.childImageSharp.fixed} />
          </Avatar>

          <Name>{defaultTitle}</Name>
          <Description>{defaultDescription.toUpperCase()}</Description>
        </Content>
      </Container>
    </Header>
  )
}
