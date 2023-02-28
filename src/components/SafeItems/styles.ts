import styled, { css } from 'styled-components'
import { SafeItemsProps } from './SafeItems'
import IconSvg from '../../assets/icons/lista.svg'

export const Safe = styled.div<SafeItemsProps>`
  background-color: ${({ theme }) => theme.colors.gray900};
  padding: 2rem 2rem 2rem 3.75rem;
  display: grid;
  grid-template-columns: 1fr auto;

  h3 {
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    font: 600 ${({ theme }) => theme.fontSize['3xl']} / 1.25
      ${({ theme }) => theme.fontFamily.heading};
  }
  ${({ level }) =>
    level === 'prata'
      ? css`
          h3 {
            color: ${({ theme }) => theme.colors.gray500};
          }
        `
      : css`
          h3 {
            color: ${({ theme }) => theme.colors.yellow};
          }
        `}
  span {
    grid-column: 2;
    display: block;
    text-align: right;
    font: 600 ${({ theme }) => theme.fontSize['3xl']} / 1.25
      ${({ theme }) => theme.fontFamily.heading};
  }
  .flat {
    font: 400 ${({ theme }) => theme.fontSize.xs} / 1.35 ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.gray500};
  }
  ul {
    grid-column: 1/-1;
    margin-bottom: 2rem;
  }
  li {
    display: flex;
    align-items: center;
    position: relative;
    font: 500 ${({ theme }) => theme.fontSize.xl} / 1.35 ${({ theme }) => theme.fontFamily.rob};
  }
  li + li {
    margin-top: 1.25rem;
  }
  li::before {
    content: '';
    display: inline-block;
    width: 13px;
    height: 9px;
    background-image: url(${IconSvg});
    position: absolute;
    left: -21px;
  }
  a {
    grid-column: 1/-1;
  }
`
