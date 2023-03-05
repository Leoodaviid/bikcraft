import styled from 'styled-components'
import TopRight from '../../assets/icons/top-right.svg'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 3.75rem 0 3.75rem 0;
  color: ${({ theme }) => theme.colors.white};
  .title {
    background: url(${TopRight}) no-repeat top right 20px;
  }
  .title p {
    font: 400 ${({ theme }) => theme.fontSize['2xl']} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray500};
    margin-bottom: 0.25rem;
  }
  .title h1 {
    margin: 0;
  }
  @media (max-width: 800px) {
    padding: 2.5rem 0 2.5rem 0;
    .title p {
      font-size: 1rem;
    }
  }
`
