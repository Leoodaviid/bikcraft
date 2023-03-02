import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray500};
  padding: 3.75rem 0 3.75rem 0;
  .bik {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 2.5rem;
  }
  .bik-images {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  }
  .bik-images img {
    flex: 1;
    min-width: 200px;
  }
  .bik-images img:first-child {
    min-width: 100%;
  }
  .bik-content > p {
    margin-bottom: 2rem;
  }
  .bik-sale {
    display: grid;
    grid-template-columns: max-content auto;
    align-items: center;
    justify-items: start;
    gap: 0.5rem 0.75rem;
    margin-bottom: 2.5rem;
  }
  .bik-sale a {
    grid-row: span 2;
  }
  .bik-sale span {
    display: flex;
    align-items: center;
    font: 400 ${({ theme }) => theme.fontSize.sm} / 1.35 ${({ theme }) => theme.fontFamily.heading};
    background-color: ${({ theme }) => theme.colors.gray900};
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  .bik-content h2 {
    font: 400 ${({ theme }) => theme.fontSize.sm} / 1.35 ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 0.015em;
    margin-bottom: 0.75rem;
  }
  .bik-information,
  .bik-datasheet {
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.gray900};
    border-radius: 0.25rem;
  }
  .bik-information {
    margin-bottom: 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .bik-information img {
    width: 24px;
    margin-bottom: 0.5rem;
  }
  .bik-information h3 {
    font: 400 ${({ theme }) => theme.fontSize.xl} / 1.35 ${({ theme }) => theme.fontFamily.heading};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;
  }
  .bik-information p {
    font: 400 ${({ theme }) => theme.fontSize.md} / 1.435 ${({ theme }) => theme.fontFamily.rob};
  }
  .bik-datasheet li {
    padding: 0.25rem;
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
  .bik-datasheet li:last-child {
    border-bottom: none;
  }
  .bik-datasheet span {
    color: ${({ theme }) => theme.colors.gray600};
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
  }
  @media (max-width: 800px) {
    padding: 2.5rem 0 2.5rem 0;
    .bik {
      grid-template-columns: 1fr;
    }
    .bik-images {
      grid-row: 2;
    }
  }
  @media (max-width: 400px) {
    .bik-information {
      grid-template-columns: 1fr;
    }
    .bik-sale {
      grid-template-columns: 1fr;
    }
  }
`
