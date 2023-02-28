import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 3.75rem 0 3.75rem 0;
  color: ${({ theme }) => theme.colors.white};
  .titulo p {
    font: 400 ${({ theme }) => theme.fontSize['2xl']} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray500};
    margin-bottom: 0.25rem;
  }
  .titulo h1 {
    margin: 0;
  }
  @media (max-width: 800px) {
    padding: 2.5rem 0 2.5rem 0;
    .titulo p {
      font-size: 1rem;
      text-transform: lowercase;
    }
  }
`
