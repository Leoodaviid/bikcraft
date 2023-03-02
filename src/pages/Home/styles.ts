import styled from 'styled-components'

export const Introduction = styled.section`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: inset 0 -120px ${({ theme }) => theme.colors.white};

  .introducao {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 40px;
  }
  .introducao-content {
    align-self: end;
    padding-bottom: 12.5rem;
  }
  .introducao img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .introducao h1 {
    margin-bottom: 2rem;
  }
  .introducao p {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 800px) {
    background: ${({ theme }) => theme.colors.gray900};
    padding-top: 2.5rem;
    box-shadow: inset 0 -60px ${({ theme }) => theme.colors.white};

    .introducao {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .introducao-content {
      padding-bottom: 0px;
    }
    .introducao h1 {
      margin-bottom: 1rem;
    }
    .introducao img {
      height: 300px;
      width: 100%;
    }
  }
`
export const Article = styled.article`
  padding: 3.75rem 0 7.5rem 0;
  h2 {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 800px) {
    padding: 0 0 3.5rem 0;
  }
`

export const Technology = styled.article`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: inset 0 5rem ${({ theme }) => theme.colors.white},
    inset 0 -5rem ${({ theme }) => theme.colors.white};
  .technology {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  .technology-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }
  .techonology-content {
    padding: 10rem 0;
  }
  .techonology-content > span {
    display: block;
    font: 500 ${({ theme }) => theme.fontSize.xl} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray500};
    text-transform: uppercase;
    margin-bottom: 1.25rem;
  }
  .techonology-content h2 {
    margin-bottom: 2rem;
  }
  .techonology-content > p {
    margin-bottom: 1.25rem;
  }
  .techonology-content a {
    margin-bottom: 5rem;
  }
  .technology-benefits {
    display: flex;
    gap: 2.5rem;
  }
  .technology-benefits img {
    width: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .technology-benefits h3 {
    font: 400 ${({ theme }) => theme.fontSize.xl} / 1.35 ${({ theme }) => theme.fontFamily.heading};
    margin-bottom: 0.5rem;
    width: max-content;
  }
  .technology-benefits p {
    font: 400 ${({ theme }) => theme.fontSize.base} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray500};
  }
  @media (max-width: 800px) {
    box-shadow: initial;
    .technology {
      grid-template-columns: 1fr;
    }
    .techonology-content {
      padding: 3.75rem 0;
    }
    .technology-img img {
      display: none;
    }
    .techonology-content a {
      margin-bottom: 3.75rem;
    }
  }
  @media (max-width: 600px) {
    .technology-benefits {
      flex-direction: column;
    }
  }
`
export const Partners = styled.section`
  padding: 3.75rem 0 7.5rem 0;
  h2 {
    margin-bottom: 3.75rem;
  }
  @media (max-width: 800px) {
    padding: 3.75rem 0 3.75rem 0;
    h2 {
      margin-bottom: 1.25rem;
    }
  }
`
export const Testimony = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.yellow};
  overflow: hidden;
  div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0px;
  }
  .testimony-content {
    padding: 2.5rem 2.5rem 5rem 5rem;
    align-self: end;
  }
  .testimony-content p {
    /* max-width: 32ch; */
    font: 900 ${({ theme }) => theme.fontSize['3xl']} / 1.25 ${({ theme }) => theme.fontFamily.meri};
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 2rem;
    position: relative;
  }
  .testimony-content p::before,
  .testimony-content p::after {
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.tertiary};
    position: absolute;
  }
  .testimony-content p::before {
    content: '“';
    left: -50px;
    top: -20px;
  }
  .testimony-content p::after {
    content: '”';
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    div > img {
      max-height: 200px;
    }
    .testimony-content {
      padding: 2.5rem 1.25rem;
      justify-self: center;
    }
  }
`
export const Safe = styled.article`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 3.75rem 0 3.75rem 0;
  .safe {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: center;
  }
  .safe h2 {
    grid-column: 1/-1;
  }
  @media (max-width: 800px) {
    .safe {
      grid-template-columns: 1fr;
    }
  }
`
