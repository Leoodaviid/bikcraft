import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(${({ theme }) => theme.colors.yellow}, #f2a50c);
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  font: 600 ${({ theme }) => theme.fontSize.lg} / 1.35 ${({ theme }) => theme.fontFamily.heading};

  &:hover {
    background: linear-gradient(#ffb60d, #e59317);
  }

  @media (max-width: 600px) {
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`
