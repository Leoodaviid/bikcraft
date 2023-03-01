import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.gray600};
  padding: 3.75rem 0 3.75rem 0;
  :nth-child(odd) {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white} 30%,
      ${({ theme }) => theme.colors.black} 0%
    );
    .bik h2 {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  .bik {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  .bik-image {
    display: grid;
  }
  .bik-image img {
    grid-area: 1/1;
  }
  .bik-image span {
    grid-area: 1/1;
    place-self: start end;
    margin-top: 20px;
    background: ${({ theme }) => theme.colors.black};
    display: inline-block;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border-radius: 4px 0 0 4px;
    font: 500 ${({ theme }) => theme.fontSize.xl} / 1.35 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.white};
  }
  .bik-content {
    display: grid;
    grid-template-columns: 1fr auto;
    align-content: start;
  }
  .bik h2,
  .bik p {
    grid-column: 1/-1;
  }
  .bik h2 {
    font: 600 ${({ theme }) => theme.fontSize['3xl']} / 1.25
      ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 1.25rem;
  }
  .bik h2::before {
    content: '';
    display: block;
    width: 12px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.yellow};
    margin-bottom: 0.5rem;
  }
  .bik p {
    font: 400 ${({ theme }) => theme.fontSize.lg} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    margin-bottom: 2rem;
  }
  .bik a {
    place-self: end;
  }
  .bik ul {
    display: grid;
    gap: 1rem;
  }
  .bik li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font: 400 ${({ theme }) => theme.fontSize.xl} / 1.35 ${({ theme }) => theme.fontFamily.heading};
  }
  .bik-content img {
    width: 24px;
  }
  @media (max-width: 800px) {
    padding: 2.5rem 0 2.5rem 0;
    :nth-child(odd) {
      background: ${({ theme }) => theme.colors.black};
      h2 {
        color: ${({ theme }) => theme.colors.white};
      }
    }
    .bik {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
  }
  @media (max-width: 600px) {
    padding: 2.5rem 0 2.5rem 0;
    .bik-content {
      grid-template-columns: 1fr;
    }
    .bik ul {
      grid-template-columns: 1fr 1fr;
      margin-bottom: 2rem;
    }
    .bik li {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
    .bik a {
      place-self: start;
    }
  }
`
