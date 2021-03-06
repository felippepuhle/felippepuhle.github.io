import styled from 'styled-components'

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.7rem 2.5rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: ${({ theme }) => theme.colors.main};
  transition: 0.2s opacity;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }
`
