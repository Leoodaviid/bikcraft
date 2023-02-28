import styled from 'styled-components'

export const Partner = styled.ul`
  padding: 0 1.25rem;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  li {
    display: flex;
    padding: 2rem;
    border-left: 2px solid ${({ theme }) => theme.colors.gray200};
  }
  img {
    margin: auto;
  }
  li:first-child,
  li:nth-child(5) {
    border-left: none;
  }
  li:nth-child(n + 5) {
    border-top: 2px solid ${({ theme }) => theme.colors.gray200};
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    li {
      padding: 1.25rem;
    }
    li:nth-child(n + 3) {
      border-top: 2px solid ${({ theme }) => theme.colors.gray200};
    }
    li:nth-child(odd) {
      border-left: none;
    }
  }
`
