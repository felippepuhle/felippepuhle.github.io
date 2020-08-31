import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import { ToggleDarkMode } from './ToggleDarkMode'

const Wrapper = styled.div<{ desktop?: boolean }>`
  a {
    color: #000;
    font-size: 1.1rem;
    text-decoration: none;
    transition: 0.2s opacity;

    :hover {
      opacity: 0.8;
    }

    @media (max-width: 960px) {
      color: ${({ theme }) => (theme.isDarkMode ? '#fff' : '#000')};
    }
  }

  ${({ desktop }) =>
    desktop
      ? `
      align-items: center;
      display: flex;

      @media (max-width: 960px) {
        display: none;
      }

      a {
        margin-right: 1.5rem;

        &:last-child {
          margin-right: unset;
        }
      }
    `
      : `
      padding: 4rem 3rem;
      display: flex;
      flex-direction: column;

      a {
        margin-top: .75rem;
        margin-bottom: .75rem;

        &:last-of-type {
		  margin-bottom: 1.5rem;
        }
      }
  `}
`

type Props = {
  desktop?: boolean
}

export const NavbarLinks: React.FC<Props> = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href='#about'>About</AnchorLink>
    <AnchorLink href='#projects'>Projects</AnchorLink>
    <AnchorLink href='#contact'>Contact</AnchorLink>
    <ToggleDarkMode />
  </Wrapper>
)
