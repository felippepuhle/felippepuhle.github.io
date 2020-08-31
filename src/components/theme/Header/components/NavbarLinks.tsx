import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

import { ToggleDarkMode } from './ToggleDarkMode'

const Wrapper = styled.div<{ desktop?: boolean }>`
  a {
    color: #000;
    text-decoration: none;

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
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
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
