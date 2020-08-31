import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { ThemeContext } from 'providers/ThemeProvider'
import { Container, Card } from 'components/common'
import { Fork, Star } from 'components/common/Icons'

const Wrapper = styled.div`
  padding: 2rem 0;
`

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme.isDarkMode ? '#fff' : '#212121')};
  }

  p {
    color: ${({ theme }) => (theme.isDarkMode ? '#c7c7c7' : '#707070')};
  }
`

const Content = styled.div`
  padding: 1rem 0;
`

const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme.isDarkMode ? '#fff' : '#000')};
    }

    span {
      color: ${({ theme }) => (theme.isDarkMode ? '#fff' : '#000')};
      margin-left: 0.5rem;
    }
  }
`

export const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext)

  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(
              first: 6
              orderBy: { field: STARGAZERS, direction: DESC }
              privacy: PUBLIC
            ) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper as={Container} id='projects'>
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item
            key={node.id}
            as='a'
            href={node.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Card>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats>
                <div>
                  <Star color={isDarkMode ? '#fff' : '#000'} />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <Fork color={isDarkMode ? '#fff' : '#000'} />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  )
}
