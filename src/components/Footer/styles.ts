import styled from 'styled-components'

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  .footer {
    display: grid;
    grid-template-columns: 3fr 5fr 4fr;
    gap: 2.5rem;
    padding: 3.75rem 0 3.75rem 0;
  }
  .footer h3 {
    margin-bottom: 2rem;
    font: 500 ${({ theme }) => theme.fontSize['2xl']} / 1.5 ${({ theme }) => theme.fontFamily.rob};
    text-transform: uppercase;
  }
  .footer li {
    margin-bottom: 1rem;
    font: 500 ${({ theme }) => theme.fontSize.xl} / 1.35 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray500};
  }
  .contact ul {
    margin-bottom: 2rem;
  }
  .contact li:nth-child(even):after {
    content: '';
    display: block;
    max-width: 360px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gray900};
    margin-top: 1rem;
  }
  .social-media {
    display: flex;
    gap: 2rem;
  }
  .footer a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  .copy {
    grid-column: 1/-1;
    margin-top: 2.5rem;
    font: 500 ${({ theme }) => theme.fontSize.xl} / 1.35 ${({ theme }) => theme.fontFamily.rob};
    color: ${({ theme }) => theme.colors.gray500};
  }
  @media (max-width: 800px) {
    .footer {
      grid-template-columns: 1fr 1fr;
    }
    .footer > img {
      display: none;
    }
  }
  @media (max-width: 600px) {
    .footer {
      grid-template-columns: 1fr;
      gap: 3.75rem;
    }
    .copy {
      margin-top: 0px;
    }
  }
`
