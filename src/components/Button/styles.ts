import styled, { css } from 'styled-components'

interface ButtonProps {
  className?: string
}
export const Button = styled.button<ButtonProps>`
  display: inline-block;
  padding: 1rem 2rem;
  ${({ className }) =>
    className === 'secondary'
      ? css`
          background: ${({ theme }) => theme.colors.gray700};
          color: ${({ theme }) => theme.colors.white};
          &:hover {
            background: ${({ theme }) => theme.colors.gray600};
          }
        `
      : css`
          background: linear-gradient(${({ theme }) => theme.colors.yellow}, #f2a50c);
          color: ${({ theme }) => theme.colors.secondary};
          &:hover {
            background: linear-gradient(#ffb60d, #e59317);
          }
        `}
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  font: 600 ${({ theme }) => theme.fontSize.lg} / 1.35 ${({ theme }) => theme.fontFamily.heading};
  max-width: max-content;

  @media (max-width: 600px) {
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`
