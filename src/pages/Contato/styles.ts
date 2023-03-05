import styled from 'styled-components'
import IconLocal from '../../assets/icons/local.svg'
import IconEmain from '../../assets/icons/email.svg'
import IconPhone from '../../assets/icons/telefone.svg'
import BottomLeft from '../../assets/icons/bottom-left.svg'
import BottomRight from '../../assets/icons/bottom-right.svg'

export const Container = styled.div`
  padding-bottom: 0.5rem;
  background: linear-gradient(
    ${({ theme }) => theme.colors.black} 280px,
    ${({ theme }) => theme.colors.gray100} 0px
  );
  .contact {
    display: grid;
    grid-template-columns: 5fr 7fr;
  }
  .contact-data,
  .contact-form {
    padding: 3.75rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  .contact-data {
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray500};
    border-radius: 5px 0 0 5px;
    background: ${({ theme }) => theme.colors.gray900} url(${BottomLeft}) no-repeat bottom 20px left
      20px;
  }
  .contact-form {
    border-radius: 0 5px 5px 0;
    background: ${({ theme }) => theme.colors.white} url(${BottomRight}) no-repeat bottom 20px right
      20px;
  }
  .contact-data h2 {
    font: 400 ${({ theme }) => theme.fontSize.xl} / 1.35 ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 3.75rem;
  }
  .contact-address {
    margin-bottom: 2rem;
    padding-left: 1.75rem;
    background: url(${IconLocal}) no-repeat 0px 2px;
  }
  .contact-address p {
    margin-bottom: 0.5rem;
  }
  address a {
    display: block;
    max-width: max-content;
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    margin-bottom: 0.5rem;
    padding-left: 1.75rem;
  }
  address a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  address a:first-child {
    background: url(${IconEmain}) no-repeat 0px 2px;
  }
  address a:nth-child(2) {
    margin-bottom: 2rem;
  }
  address a:nth-child(3) {
    background: url(${IconPhone}) no-repeat 0px 2px;
    margin-bottom: 3.75rem;
  }
  .contact-social {
    display: flex;
    gap: 2rem;
    padding-left: 1.75rem;
  }
  @media (max-width: 800px) {
    .contact {
      grid-template-columns: 1fr;
    }
    .contact-data,
    .contact-form {
      padding: 1.25rem;
    }
    .contact-data {
      border-radius: 5px 5px 0 0;
      background: ${({ theme }) => theme.colors.gray900};
    }
    .contact-form {
      border-radius: 0 0 5px 5px;
    }
    .contact-data h2,
    address a:nth-child(3) {
      margin-bottom: 2rem;
    }
    .contact-social {
      margin-bottom: 0.75rem;
    }
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  .col-2 {
    grid-column: span 2;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    .col-2 {
      grid-column: 1;
    }
  }
`

export const Article = styled.article`
  background-color: ${({ theme }) => theme.colors.gray100};
  padding: 7.5rem 0 7.5rem;
  h2 {
    margin-bottom: 3.75rem;
  }
  .store {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 2.5rem;
  }
  .store-item img {
    border-radius: 0.25rem 0.25rem 0 0;
  }
  .store-item {
    border-radius: 0.25rem;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  .store-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 1rem;
    padding: 2rem;
  }
  .store-content h3 {
    font: 600 ${({ theme }) => theme.fontSize['3xl']} / 1.25
      ${({ theme }) => theme.fontFamily.heading};
  }
  .store-content h3,
  .store-time {
    grid-column: 1/-1;
  }
  .store-data a,
  .store-data p {
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray600};
  }
  .store-data {
    display: grid;
    gap: 0.5rem;
    border-left: 2px solid ${({ theme }) => theme.colors.gray200};
    padding-left: 0.75rem;
  }
  .store-time {
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray700};
  }
  .store-time {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  @media (max-width: 800px) {
    padding: 3.75rem 0 3.75rem 0;
    h2 {
      margin-bottom: 2rem;
    }
    .store {
      gap: 1.25rem;
    }
    .store-content h3 {
      font-size: ${({ theme }) => theme.fontSize['2xl']};
    }
    .store-content {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .store {
      grid-template-columns: 1fr;
    }
  }
`
