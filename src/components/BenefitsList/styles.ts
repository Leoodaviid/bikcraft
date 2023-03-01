import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, max-content));
  gap: 2.5rem 5rem;

  h3,
  img {
    margin-bottom: 0.5rem;
  }

  h3 {
    font: 400 ${({ theme }) => theme.fontSize['2xl']} / 1.5
      ${({ theme }) => theme.fontFamily.heading};
  }
  p {
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray500};
  }
  @media (max-width: 800px) {
    gap: 1.25rem;
  }
`
