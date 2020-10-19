import styled from 'styled-components'

export const Input = styled.input<{ error?: boolean }>`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid ${({ theme }) => theme.colors.main};
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  ${({ error }) =>
    error &&
    `
		border-color: ${({ theme }) => theme.colors.error};
	`}

  &::placeholder {
    color: #a7a7a7;
  }
`