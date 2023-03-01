import styled from 'styled-components'

export const Benefits = styled.article`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 7.5rem 0 7.5rem 0;
  h2 {
    margin-bottom: 3.75rem;
  }

  @media (max-width: 800px) {
    padding: 3.75rem 0 3.75rem 0;
  }
  h2 {
    margin-bottom: 2.5rem;
  }
`
export const Questions = styled.article`
  padding: 7.5rem 0 7.5rem 0;
  h2 {
    margin-bottom: 3.75rem;
  }
  @media (max-width: 800px) {
    padding: 3.75rem 0 3.75rem 0;
  }
  h2 {
    margin-bottom: 2.5rem;
  }
`
