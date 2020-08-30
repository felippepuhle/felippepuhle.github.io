import React, { useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { ThemeContext } from 'providers/ThemeProvider'
import { Container, Card } from 'components/common'
import { Fork, Star } from 'components/common/Icons'

import { Wrapper, Grid, Item, Content, Stats } from './styles'

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
              first: 8
              orderBy: { field: STARGAZERS, direction: DESC }
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
