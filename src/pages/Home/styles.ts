import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: inset 0 -120px ${({ theme }) => theme.colors.white};

  .introducao {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 40px;
  }
  .introducao-conteudo {
    align-self: end;
    padding-bottom: 12.5rem;
  }
  .introducao img {
    height: 100%;
    object-fit: cover;
  }
  .introducao h1 {
    margin-bottom: 2rem;
  }
  .introducao p {
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.colors.gray600};
  }

  @media (max-width: 800px) {
    background: ${({ theme }) => theme.colors.gray900};
    padding-top: 2.5rem;
    box-shadow: inset 0 -60px ${({ theme }) => theme.colors.white};

    .introducao {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .introducao-conteudo {
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
  ul {
    display: flex;
    gap: 2.5rem;
    padding: 0 1.25rem 1.25rem 1.25rem;
    max-width: 1400px;
    margin: 0 auto;
    overflow-x: auto;
  }
  li {
    flex: 1;
    min-width: 280px;
  }
  li span {
    padding-left: 1.25rem;
    font: 500 ${({ theme }) => theme.fontSize.base} / 1.35 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray600};
  }
  a {
    display: block;
  }
  img {
    margin-bottom: 1rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
  h3::before {
    content: '';
    display: inline-block;
    height: 0.5rem;
    width: 0.75rem;
    margin-right: 0.5rem;
    background-color: ${({ theme }) => theme.colors.yellow};
    transition: width 0.2s;
  }
  a:hover h3::before {
    width: 1.5rem;
  }

  @media (max-width: 800px) {
    padding: 0 0 3.5rem 0;
    ul {
      gap: 1.25rem;
    }
  }
`
