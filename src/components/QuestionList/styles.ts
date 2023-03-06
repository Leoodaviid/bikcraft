import styled, { css } from 'styled-components'
import Seta from '../../assets/icons/seta-abrir.svg'

export const Div = styled.div`
  padding: 1.25rem;
  border-radius: 0.25rem;

  :nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.gray200};
  }
`

export const Dl = styled.dl`
  button {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    font: 600 ${({ theme }) => theme.fontSize.xl} / 1.35 ${({ theme }) => theme.fontFamily.heading};
    gap: 0.5rem;
    cursor: pointer;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
  }
  dd {
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray600};
  }

  button::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  button::after {
    content: '';
    display: inline-block;
    width: 14px;
    height: 6px;
    background: url(${Seta});
    transition: 0.3s;
  }
  button:hover::after,
  button[aria-expanded='true']::after {
    transform: rotate(180deg);
  }
  dd {
    padding: 1rem 0 0 1.25rem;
  }
`
