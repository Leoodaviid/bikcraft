import styled from 'styled-components'
import BottomRight from '../../assets/icons/bottom-right.svg'
import BottomLeft from '../../assets/icons/bottom-left.svg'

export const Container = styled.section`
  background: linear-gradient(
    ${({ theme }) => theme.colors.black} 280px,
    ${({ theme }) => theme.colors.gray100} 0px
  );
  .budget {
    display: grid;
    grid-template-columns: 5fr 7fr;
    padding-bottom: 7.5rem;
    gap: 0;
  }
  .budget h2 {
    text-transform: uppercase;
    position: relative;
    display: flex;
    align-items: center;
  }
  .budget h2::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.yellow};
    position: absolute;
    left: -12px;
  }
  .budget-product,
  .budget-data {
    padding: 3.75rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  .budget-product {
    border-radius: 5px 0 0 5px;
    background: ${({ theme }) => theme.colors.gray900} url(${BottomLeft}) no-repeat bottom 20px left
      20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    align-content: flex-start;
  }
  .budget-product > * {
    grid-column: 1/-1;
  }
  .budget-product > label {
    grid-column: initial;
  }
  .budget-product label {
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.gray400};
    background-color: ${({ theme }) => theme.colors.gray700};
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.gray700};
  }
  .budget-product input:checked + label {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
  .budget-product label::before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border: 1px solid ${({ theme }) => theme.colors.gray600};
    border-radius: 50%;
    margin-right: 8px;
  }
  .budget-product input:checked + label::before {
    border-color: ${({ theme }) => theme.colors.gray700};
    box-shadow: inset 0 0 0 3px ${({ theme }) => theme.colors.white},
      inset 0 0 0 6px ${({ theme }) => theme.colors.gray700};
  }
  .budget-product label:hover {
    background-color: ${({ theme }) => theme.colors.gray600};
    border-color: ${({ theme }) => theme.colors.gray600};
  }
  .budget-product input:focus + label {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.yellow};
    border-color: ${({ theme }) => theme.colors.gray900};
  }
  .budget-product label span {
    display: none;
  }
  .budget-product input:checked + label span {
    display: inline-block;
  }
  .budget-product input {
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }
  .budget-data {
    border-radius: 0 5px 5px 0;
    background: ${({ theme }) => theme.colors.white} url(${BottomRight}) no-repeat bottom 20px right
      20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  .budget-content {
    display: none;
  }
  .budget-product h2 {
    font: 400 ${({ theme }) => theme.fontSize.sm} / 1.35 ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.gray500};
    margin-top: 1.25rem;
  }
  .budget-data h2 {
    font: 400 ${({ theme }) => theme.fontSize.sm} / 1.35 ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.black};
  }

  #bikcraft:checked ~ #budget-bikcraft,
  #seguro:checked ~ #budget-seguro {
    display: grid;
    gap: 1.25rem;
  }
  .budget-details {
    display: none;
    background: ${({ theme }) => theme.colors.white};
    padding: 1.25rem;
    grid-template-columns: 1fr 1fr;
    border-radius: 0.25rem;
    align-items: center;
  }
  .budget-product input:checked + label + .budget-details {
    display: grid;
  }
  @media (max-width: 1200px) {
    .budget-product,
    .budget-data {
      padding: 2rem;
    }
  }
  @media (max-width: 800px) {
    .budget {
      grid-template-columns: 1fr;
    }
    .budget-product {
      border-radius: 5px 5px 0 0;
    }
    .budget-data {
      border-radius: 0 0 5px 5px;
      background: ${({ theme }) => theme.colors.gray900};
    }
  }
  @media (max-width: 600px) {
    .budget-data {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 400px) {
    .budget-product {
      grid-template-columns: 1fr;
    }
  }
`
