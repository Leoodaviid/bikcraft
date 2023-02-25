import styled from 'styled-components'

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: inset 0 -120px ${({ theme }) => theme.colors.white};

  .introducao {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 40px;
    box-sizing: border-box;
    max-width: 1200px;
    padding: 0 1.25rem 0 1.25rem;
    margin: 0 auto;
  }
  .introducao-conteudo {
    align-self: end;
    padding-bottom: 12.5rem;
  }
  .introducao img {
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }
  .introducao h1 {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.fontSize['5xl']};
    line-height: 1.125;
    font-family: ${({ theme }) => theme.fontFamily.heading};
    font-weight: 600;
  }

  .introducao h1 span {
    color: ${({ theme }) => theme.colors.yellow};
  }

  .introducao p {
    margin-bottom: 1.25rem;
    font-size: 24px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.gray600};
    font-family: ${({ theme }) => theme.fontFamily.rob};
    font-weight: 400;
  }

  @media (max-width: 1200px) {
    .introducao h1 {
      font-size: ${({ theme }) => theme.fontSize['4xl']};
    }
    .introducao p {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
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
      font-size: ${({ theme }) => theme.fontSize['3xl']};
      margin-bottom: 1rem;
    }
    .introducao img {
      height: 300px;
      width: 100%;
    }
  }
`
