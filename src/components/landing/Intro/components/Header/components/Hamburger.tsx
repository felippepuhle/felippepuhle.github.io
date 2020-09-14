import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div<{ sidebar: boolean }>`
  z-index: 5;
  top: 1.6rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    `
			right: 18%;
			top: 1.4rem;
		
			@media (max-width: 960px) {
				right: 35%;
				position: fixed;
			}
		
			@media (max-width: 600px) {
				right: 66%;
			}
	`}
`

const Bar = styled.div<{
  sidebar: boolean
  top?: boolean
  mid?: boolean
  bottom?: boolean
}>`
  width: 1.6rem;
  height: 0.15rem;
  margin-bottom: 0.3rem;
  background-color: #212121;
  transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91), opacity 500ms,
    box-shadow 250ms, background-color 500ms;

  @media (max-width: 600px) {
    width: 1.6rem;
  }

  ${({ theme, top, sidebar }) =>
    top &&
    sidebar &&
    `
		background-color: ${theme.isDarkMode ? '#fff' : '#212121'};
		transform: translateY(8px) rotate(-135deg);
		
	`}

  ${({ theme, mid, sidebar }) =>
    mid &&
    sidebar &&
    `
		transform: scale(0);
		`}

	${({ theme, bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
			background-color: ${theme.isDarkMode ? '#fff' : '#212121'};
			transform: translateY(-6px) rotate(-45deg);
	`}
`

type Props = {
  sidebar: boolean
  toggle: () => void
}

export const Hamburger: React.FC<Props> = ({ sidebar, toggle }) => (
  <Wrapper sidebar={sidebar} onClick={toggle}>
    <Bar top sidebar={sidebar} />
    <Bar mid sidebar={sidebar} />
    <Bar bottom sidebar={sidebar} />
  </Wrapper>
)
